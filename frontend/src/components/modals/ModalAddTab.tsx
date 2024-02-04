import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useAppDispatch } from "../../redux/reduxHooks";
import { addUserData } from "../../redux/slices/userSlice";

const ModalAddTab = (props: any) => {
  const [tabTitle, setTabTitle] = useState(" ");
  const dispatch = useAppDispatch();

  function handleAddNewTab(e: any) {
    dispatch(
      addUserData({ id: new Date(), tabName: tabTitle, listOfWidgets: [] })
    );
    props.onHide();
    setTabTitle("");
  }

  return (
    <>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">TAB NAME</Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example">
          <Form>
            <Form.Group className="m-3">
              <Form.Control
                placeholder="Enter Tab Name"
                value={tabTitle}
                onChange={(e) => setTabTitle(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleAddNewTab}> OK </Button>
          <Button onClick={props.onHide}>CANCEL</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddTab;
