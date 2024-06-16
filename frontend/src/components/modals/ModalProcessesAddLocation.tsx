import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useAppDispatch } from "../../redux/reduxHooks";
import { addLocation } from "../../redux/slices/processSlice";

function ModalProcessesAddLocation(props: any) {
  const [locationName, setLocationName] = useState(" ");
  const dispatch = useAppDispatch();

  function handleAddNewLocation() {
    let data = {
      id: `${props.docId}_${Date.now()}`,
      locationName: `${locationName}`,
      createdDate: `${new Date().toLocaleString()}`,
      locationStatus: {
        0: "NOT STARTED",
        1: "NOT STARTED",
        2: "NOT STARTED",
        3: "NOT STARTED",
        4: "NOT STARTED",
        5: "NOT STARTED",
        6: "NOT STARTED",
      },
    };
    dispatch(addLocation([data, props.docId]));
    props.onHide();
    setLocationName("");
  }

  return (
    <>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            LOCATION NAME
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example">
          <Form>
            <Form.Group className="m-3">
              <Form.Control
                placeholder="Enter Tab Name"
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleAddNewLocation}>SAVE </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalProcessesAddLocation;
