import { Button, Form, Modal } from "react-bootstrap";
import { useAppDispatch } from "../../../redux/reduxHooks";
import { updateUserTabName } from "../../../redux/slices/userSlice";
import { useState } from "react";

const ModalTabNewTitle = (props: any) => {
  const [newTabName, setNewTabName] = useState("");
  function handleChangeTabName() {
    dispatch(updateUserTabName({ tabId: props.tabId, tabName: newTabName }));
    props.onHide();
  }
  const dispatch = useAppDispatch();

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">TAB NAME</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          as="input"
          placeholder={props.tabName}
          onChange={(e) => setNewTabName(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="secondary">
          CANCEL
        </Button>
        <Button onClick={handleChangeTabName} variant="primary">
          SAVE
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalTabNewTitle;
