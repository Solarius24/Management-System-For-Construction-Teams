import { Button, ListGroup, ListGroupItem, Modal } from "react-bootstrap";

const ModalSwitchProject = (props: any) => {
  function handleSelect() {
    console.log("selected");
  }
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Switch Project
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroupItem
            className="border border-info m-2"
            variant="light"
            action
            onClick={handleSelect}
            // title={widget.widgetType}
          >
            HS2 OLD OAK COMMON WP8
          </ListGroupItem>
          <ListGroupItem
            className="border border-info m-2"
            variant="light"
            action
            onClick={handleSelect}
            // title={widget.widgetType}
          >
            HS2 OLD OAK COMMON WP17
          </ListGroupItem>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSelect}>SELECT</Button>
        <Button onClick={props.onHide}>CLOSE</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalSwitchProject;
