import { Button, Form, Modal } from "react-bootstrap";

interface ModalAddConfig {
  show: boolean;
  title: string;
  list: { id: string; type?: string; formTemplate?: {}[] }[];
  onHide: () => void;
  display?: React.ReactNode;
}
const ModalAddFormSchedule = (props: ModalAddConfig) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Label>Form Schedule Type</Form.Label>
        <Form.Select aria-label="Default select example">
          {props.list.map((item) => (
            <option value={item.id} key={item.id}>
              {item.type}
            </option>
          ))}
        </Form.Select>
        {props.display}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="secondary">
          Close
        </Button>
        <Button onClick={props.onHide} variant="primary">
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAddFormSchedule;
