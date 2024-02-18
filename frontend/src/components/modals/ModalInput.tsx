import { Button, Form, Modal } from "react-bootstrap";
import { useAppDispatch } from "../../redux/reduxHooks";
import { updateUserTabName } from "../../redux/slices/userSlice";
import { useState } from "react";

const ModalInput = (props: any) => {
  const [newTabName, setNewTabName] = useState("");
  function handleChangeTabName() {
    dispatch(updateUserTabName({ tabId: props.tabId, tabName: newTabName }));
    props.onHide();
  }
  const dispatch = useAppDispatch();

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          as="textarea"
          rows={1}
          placeholder={props.tabName}
          onChange={(e) => setNewTabName(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="secondary">
          Close
        </Button>
        <Button onClick={handleChangeTabName} variant="primary">
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalInput;
