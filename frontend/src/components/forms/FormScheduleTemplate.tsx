import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  CardHeader,
  CardText,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../redux/reduxHooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateFormSchedule } from "../../redux/slices/formScheduleSlice";

const FormScheduleTemplate = (props: any) => {
  console.log("template", props.formScheduleData);
  const [location, setLocation] = useState(props.formScheduleData[0].location);
  const [startDate, setStartDate] = useState(
    props.formScheduleData[0].startDate
  );
  const [description, setDescription] = useState(
    props.formScheduleData[0].description
  );
  const [repeat, setRepeat] = useState(props.formScheduleData[0].repeat);
  const [issuedByOrganisation, setIssuedByOrganisation] = useState(
    props.formScheduleData[0].issuedByOrganisation
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function onSubmit(data: any) {
    // data.id = docRef;
    dispatch(updateFormSchedule(data));
    navigate("/forms");
  }

  return (
    <Container
      className="overflow-auto"
      style={{ height: "80vh", marginTop: "60px" }}
    >
      <Card>
        <CardHeader>
          <Row>
            <Col>
              <CardText>
                Form Schedule Ref:
                {props.formScheduleData[0].id}
              </CardText>
            </Col>
          </Row>
        </CardHeader>
      </Card>

      <Card>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="m-3" as={Row}>
            <Col>
              <Form.Label>Form Schedule Type</Form.Label>
            </Col>

            <Col>
              <Form.Select disabled value={props.formScheduleData[0].type}>
                <option value="===select---">
                  {props.formScheduleData[0].type}
                </option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group className="m-3" as={Row}>
            <Col>
              <Form.Label>Form Template</Form.Label>
            </Col>

            <Col>
              <Form.Select disabled value={props.formScheduleData[0].template}>
                <option value="===select---">
                  {props.formScheduleData[0].template}
                </option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group className="m-3" as={Row}>
            <Form.Label column>Description</Form.Label>
            <Col>
              <Form.Control
                {...register("description", { required: true })}
                as="textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group className="m-3" as={Row}>
            <Form.Label column>Location</Form.Label>
            <Col>
              <Form.Control
                value={location}
                {...register("location", { required: true })}
                as="textarea"
                onChange={(e) => setLocation(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group className="m-3" as={Row}>
            <Form.Label column>Issued To Organization</Form.Label>
            <Col>
              <Form.Select
                {...register("issuedToOrganization", { required: true })}
                onChange={(e) => setIssuedByOrganisation(e.target.value)}
                aria-label="Default select example"
                value={issuedByOrganisation}
              >
                <option value="MainContractor">Main Contractor</option>
                <option value="SubContractor">Sub Contractor</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group className="m-3" as={Row}>
            <Form.Label column>Start Date</Form.Label>
            <Col>
              <Form.Control
                {...register("startDate", { required: true })}
                as="input"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group className="m-3" as={Row}>
            <Form.Label column>Repeat</Form.Label>
            <Col>
              <Form.Select
                {...register("repeat", { required: true })}
                onChange={(e) => setRepeat(e.target.value)}
                aria-label="Default select example"
                value={repeat}
              >
                <option value="NEVER">NEVER</option>
                <option value="WEEKLY">WEEKLY</option>
                <option value="MONTHLY">MONTHLY</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Button type="submit">SAVE</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default FormScheduleTemplate;
