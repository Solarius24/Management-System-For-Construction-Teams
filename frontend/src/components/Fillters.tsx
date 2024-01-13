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
import AllFilters from "./AllFilters";

interface fillters {
  handleClose: () => void;
  show: boolean;
  onHide: () => void;
  filterData: { id: string; name: string; type: string; data:string[] }[];
}

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
            {props.filterData.map((item) => {
              return (
                <Accordion.Item eventKey={item.id}>
                  <AccordionHeader>{item.name}</AccordionHeader>
                  <Accordion.Body>
                    <AllFilters type = {item.type} data={item.data} />
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Fillters;
