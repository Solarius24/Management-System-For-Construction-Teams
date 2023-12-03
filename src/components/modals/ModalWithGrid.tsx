import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import TabTab from "../TabTab";
import Widget from "../Widget";

const ModalWithGrid = (props: any) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <TabTab itemList={["ALL WIDGETS", "TASKS", "FORMS", "PROCESSES"]} />
      <Modal.Body className="grid-example">
        <Container fluid >
          {props.listOfWidgets.map(
            (widget: { name: string; image: string }) => (
              <Widget name={widget.name} image={widget.image} />
            )
          )}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}> OK </Button>
        <Button onClick={props.onHide}>CANCEL</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalWithGrid;
