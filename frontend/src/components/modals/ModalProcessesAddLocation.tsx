import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useAppDispatch } from "../../redux/reduxHooks";
import { addUserData, fetchUserData } from "../../redux/slices/userSlice";

function ModalProcessesAddLocation(props: any) {
  const [tabTitle, setTabTitle] = useState(" ");
  const dispatch = useAppDispatch();

  function handleAddNewLocation() {
    // dispatch(addUserData({ tabName: tabTitle, listOfWidgets: [] }));
    // dispatch(fetchUserData());
    props.onHide();
    setTabTitle("");
  }

  return (
    <>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Location Name
          </Modal.Title>
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
          <Button onClick={handleAddNewLocation}> OK </Button>
          <Button onClick={props.onHide}>CANCEL</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalProcessesAddLocation;
