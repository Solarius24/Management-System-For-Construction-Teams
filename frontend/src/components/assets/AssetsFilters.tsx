// @ts-nocheck
import {
  Accordion,
  AccordionHeader,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  ListGroup,
} from "react-bootstrap";
import { useState } from "react";

interface fillters {
  handleClose: () => void;
  show: boolean;
  onHide: () => void;
  setFilterData?: React.Dispatch<React.SetStateAction<Object>>;
}

interface filter {
  id?: string;
  location?: string;
  status?: string;
}
const AssetsFillters = (props: fillters) => {
  const [ref, setRef] = useState("");
  const [location, setLocation] = useState("");

  let filter: filter = {};
  if (ref.length > 0) {
    filter.id = ref;
  }
  if (location.length > 0) {
    filter.location = location;
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.setFilterData(filter);
  }

  return (
    <Card
      className="d-flex flex-column flex-shrink-0  text-white bg-dark"
      // style={{ height: "80vh" }}
    >
      <CardHeader className="d-flex justify-content-between">
        <CardTitle className="fs-5">FILLTERS</CardTitle>
        <Button onClick={props.onHide}>CLOSE</Button>
      </CardHeader>
      <CardBody className="p-0">
        <ListGroup>
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Form onSubmit={handleSubmit}>
              <Accordion.Item eventKey="ref">
                <AccordionHeader>REF</AccordionHeader>
                <Accordion.Body>
                  <FormGroup>
                    <FormControl
                      type="input"
                      onChange={(e) => setRef(e.target.value)}
                    />
                  </FormGroup>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="location">
                <AccordionHeader>LOCATION</AccordionHeader>
                <Accordion.Body>
                  <FormGroup>
                    <FormCheck
                      checked={location === "GROUND FLOOR LEVEL"}
                      id="GROUND FLOOR LEVEL"
                      type="checkbox"
                      label="GROUND FLOOR LEVEL"
                      onClick={(e) =>
                        location === "GROUND FLOOR LEVEL"
                          ? setLocation("")
                          : setLocation(e.target.id)
                      }
                    />
                    <FormCheck
                      checked={location === "INTERMEDIAL LEVEL"}
                      id="INTERMEDIAL LEVEL"
                      type="checkbox"
                      label="INTERMEDIAL LEVEL"
                      onClick={(e) =>
                        location === "INTERMEDIAL LEVEL"
                          ? setLocation("")
                          : setLocation(e.target.id)
                      }
                    />
                    <FormCheck
                      checked={location === "BASEMENT LEVEL"}
                      id="BASEMENT LEVEL"
                      type="checkbox"
                      label="BASEMENT LEVEL"
                      onClick={(e) =>
                        location === "INTERMEDIAL LEVEL"
                          ? setLocation("")
                          : setLocation(e.target.id)
                      }
                    />
                  </FormGroup>
                </Accordion.Body>
              </Accordion.Item>

              <Button type="submit">SEARCH</Button>
            </Form>
          </Accordion>
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default AssetsFillters;
