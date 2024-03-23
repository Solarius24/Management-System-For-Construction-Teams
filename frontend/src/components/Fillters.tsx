import {
  Accordion,
  AccordionHeader,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  ListGroup,
} from "react-bootstrap";

interface fillters {
  handleClose: () => void;
  show: boolean;
  onHide: () => void;
}

const formFilters = [
  { id: "ff01", name: "REF", type: " ", data: [] },
  { id: "ff02", name: "LOCATION", type: " ", data: [] },
  { id: "ff03", name: "STATUS", type: " ", data: [] },
  { id: "ff04", name: "FORM TYPE", type: " ", data: [] },
  // { id: "ff05", name: "FORM NAME", type: " ", data: [] },
  // { id: "ff06", name: "FORM TITLE", type: " ", data: [] },
  // { id: "ff07", name: "ISSUED TO ORGANISATION", type: " ", data: [] },
  { id: "ff08", name: "OWNED BY ORGANISATION", type: " ", data: [] },
  // { id: "ff09", name: "OWNED BY USER", type: " ", data: [] },
  // { id: "ff10", name: "CREATED DATE", type: " ", data: [] },
  // { id: "ff11", name: "STATUS CHANGE DATE", type: " ", data: [] },
  // { id: "ff12", name: "EXPIRY DATE", type: " ", data: [] },
  // { id: "ff13", name: "SHOW OVERDUE FORMS ONLY", type: " ", data: [] },
  // { id: "ff14", name: "OPEN ACTIONS ONLY", type: " ", data: [] },
  // { id: "ff15", name: "SEARCH QUESTIONS", type: " ", data: [] },
  // { id: "ff16", name: "IMAGES", type: " ", data: [] },
  // { id: "ff17", name: "DOCUMENTS", type: " ", data: [] },
  // { id: "ff18", name: "COMMENTS", type: " ", data: [] },
  // { id: "ff19", name: "ASSOCIATIONS", type: " ", data: [] },
];

const Fillters = (props: fillters) => {
  return (
    <Card
      className="d-flex flex-column flex-shrink-0  text-white bg-dark w-auto"
      style={{ height: "80vh" }}
    >
      <CardHeader className="d-flex justify-content-between">
        <CardTitle className="fs-5">FILLTERS</CardTitle>
        <Button onClick={props.onHide}>CLOSE</Button>
      </CardHeader>
      <CardBody className="overflow-scroll">
        <ListGroup>
          <Accordion defaultActiveKey={["0"]}>
            <Accordion.Item eventKey="ref">
              <AccordionHeader>REF</AccordionHeader>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="location">
              <AccordionHeader>LOCATION</AccordionHeader>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="status">
              <AccordionHeader>STATUS</AccordionHeader>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="form type">
              <AccordionHeader>FORM TYPE</AccordionHeader>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="owned by organisation">
              <AccordionHeader>OWNED BY ORGANISATION</AccordionHeader>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Fillters;
