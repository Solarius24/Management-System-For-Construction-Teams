import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  CardText,
  Col,
  Container,
  Form,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../redux/reduxHooks";
import { updateForm } from "../../redux/slices/formSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormTemplate = (props: any) => {
  const [location, setLocation] = useState(props.formData[0].location);
  const [signatureDate, setSignatureDate] = useState(
    props.formData[0].signatureDate
  );
  const [signature, setSignature] = useState(props.formData[0].signature);
  const [details, setDetails] = useState(props.formData[0].details);
  const [status, setStatus] = useState(props.formData[0].status);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const docRef = props.formData[0].documentRef;
  function onSubmit(data: any) {
    data.id = docRef;
    dispatch(updateForm(data));
    navigate("/forms");
  }

  return (
    <Container style={{ marginTop: "60px" }}>
      <Card>
        <CardHeader>
          <Row>
            <Col>
              <CardText>
                Form Ref:{props.formData[0].documentRef}{" "}
                {props.formData[0].title}
              </CardText>
            </Col>
            <Col>
              <NavDropdown
                className="d-flex justify-content-end"
                title="ACTIONS"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>COPY FORM</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>DISTRIBUTE FORM</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>VIEW REPORT</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>VIEW REQUIRED QUESTIONS</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>MARK ALL AS GOOD</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Col>
          </Row>
        </CardHeader>
      </Card>

      <Card>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="m-3" as={Row}>
            <Form.Label column>Form Type</Form.Label>
            <Col>
              <Form.Label>{props.formData[0].formType}</Form.Label>
            </Col>
          </Form.Group>
          <Form.Group className="m-3" as={Row}>
            <Form.Label column>Form Title</Form.Label>
            <Col>
              <Form.Label>{props.formData[0].formTitle}</Form.Label>
            </Col>
          </Form.Group>
          <Form.Group className="m-3" as={Row}>
            <Form.Label column>Status</Form.Label>
            <Col>
              <Form.Select
                {...register("status", { required: true })}
                onChange={(e) => setStatus(e.target.value)}
                aria-label="Default select example"
              >
                <option>{status}</option>
                <option value="OPEN">OPEN</option>
                <option value="IN PROGRESS">IN PROGRESS</option>
                <option value="CLOSED">CLOSED</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group className="m-3" as={Row}>
            <Form.Label column>Location</Form.Label>
            <Col>
              <Form.Select
                {...register("location", { required: true })}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option>{location}</option>
                <option value="GROUND FLOOR LEVEL">GROUND FLOOR LEVEL</option>
                <option value="INTERMEDIATE LEVEL">INTERMEDIATE LEVEL</option>
                <option value="BASEMENT LEVEL">BASEMENT LEVEL</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group className="m-3" as={Row}>
            <Form.Label column>Details</Form.Label>
            <Col>
              <Form.Control
                {...register("details", { required: true })}
                as="textarea"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group className="m-3" as={Row}>
            <Form.Label column>Signature Date</Form.Label>
            <Col>
              <Form.Control
                {...register("signatureDate", { required: true })}
                as="input"
                type="date"
                value={signatureDate}
                onChange={(e) => setSignatureDate(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group className="m-3" as={Row}>
            <Form.Label column>Signature (Full Name)</Form.Label>
            <Col>
              <Form.Control
                {...register("signature", { required: true })}
                as="input"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
              />
            </Col>
          </Form.Group>
          <CardFooter>
            <Row>
              <Button type="submit">SAVE</Button>
            </Row>
          </CardFooter>
        </Form>
      </Card>
    </Container>
  );
};

export default FormTemplate;
