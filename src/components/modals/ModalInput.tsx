import { Button, Form, Modal } from "react-bootstrap";

const ModalInput = (props: any) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control as="textarea" rows={1} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="secondary">Close</Button>
        <Button onClick={props.onHide} variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalInput;
