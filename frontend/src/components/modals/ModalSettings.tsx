import React, { useState } from "react";
import { Button, Container, ListGroup, Modal } from "react-bootstrap";
import ModalInput from "./ModalInput";

const ModalSettings = (props: any) => {
  const [showModal, setShowModal] = useState(false);
 const [tabTitle,setTabTitle] = useState(" ")

  function handleAddNewTab(e: any) {
    setTabTitle(e.target.innerText)
    setShowModal(true);

  }
  function handleDeleteTab(e: any) {
    setShowModal(true);
    setTabTitle(e.target.innerText)
  }

  function handleEditTab(e: any) {
    setShowModal(true);
    setTabTitle(e.target.innerText)
  }

  return (
    <>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example">
          <Container fluid>
            <Button onClick={handleAddNewTab}> NEW TAB </Button>
            <Button onClick={handleEditTab}> EDIT SELECTED</Button>
            <Button onClick={handleDeleteTab}> DELETE SELECTED </Button>
            <ListGroup>
              <ListGroup.Item action>Cras justo odio</ListGroup.Item>
              <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item action>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}> OK </Button>
          <Button onClick={props.onHide}>CANCEL</Button>
        </Modal.Footer>
      </Modal>
      <ModalInput
        show={showModal}
        onHide={() => setShowModal(false)}
        title={tabTitle}
      />
    </>
  );
};

export default ModalSettings;
