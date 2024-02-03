import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Widget from "../Widget";
import { Image, ListGroup, Tab, Tabs } from "react-bootstrap";
import widget01 from "../widgets/images/widget01.jpg";

const ModalAddWidget = (props: any) => {
  const source = "https://1drv.ms/i/s!AkRrvIfQEchA-c1zu7JH3fmW16O3hw?e=j8Xnjy";
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>

      <Tabs
        defaultActiveKey="all widgets"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="all widgets" title="ALL WIDGETS">
          <Modal.Body className="grid-example">
            <Container fluid>
              <ListGroup>
                {props.listOfWidgets.map(
                  (widget: { name: string; image: string }) => (
                    <Widget name={widget.name} image={widget.image} />
                  )
                )}
              </ListGroup>
            </Container>
          </Modal.Body>
        </Tab>
        <Tab eventKey="forms" title="FORMS">
          <Modal.Body className="grid-example">
            <Container fluid>
              <ListGroup>
                {props.listOfWidgets
                  .filter((item: { type: string }) => item.type === "form")
                  .map((widget: { name: string; image: string }) => (
                    <Widget name={widget.name} image={widget.image} />
                  ))}
              </ListGroup>
            </Container>
          </Modal.Body>
        </Tab>
        <Tab eventKey="tasks" title="TASKS">
          <Modal.Body className="grid-example">
            <Container fluid>
              <ListGroup>
                {props.listOfWidgets
                  .filter((item: { type: string }) => item.type === "task")
                  .map((widget: { name: string; image: string }) => (
                    <Widget name={widget.name} image={widget.image} />
                  ))}
              </ListGroup>
            </Container>
          </Modal.Body>
        </Tab>

        <Tab eventKey="processes" title="PROCESSES">
          <Modal.Body className="grid-example">
            <Container fluid>
              <ListGroup>
                {props.listOfWidgets
                  .filter((item: { type: string }) => item.type === "processe")
                  .map((widget: { name: string; image: string }) => (
                    <Widget name={widget.name} image={widget.image} />
                  ))}
              </ListGroup>
            </Container>
          </Modal.Body>
        </Tab>
      </Tabs>

      <Modal.Footer>
        <Button onClick={props.onHide}> OK </Button>
        <Button onClick={props.onHide}>CANCEL</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalAddWidget;
