import { useState } from "react";
import { Button, Container, ListGroup, Modal } from "react-bootstrap";
import ModalTabNewTitle from "../ModalTabNewtitle/ModalTabNewTitle";
import { useAppDispatch, useAppSelector } from "../../../redux/reduxHooks";
import { deleteUserTab } from "../../../redux/slices/userSlice";

const ModalTabSettings = (props: any) => {
  const [showModal, setShowModal] = useState(false);
  const [tabTitle, setTabTitle] = useState("");
  const [tabId, setTabId] = useState("");
  const data = useAppSelector((state) => state.userData.listOfTabs);
  const dispatch = useAppDispatch();

  function handlerSelectTab(e: any) {
    if (e.target.title === "default") {
      alert("default Tab cannot be remove or edit");
    } else {
      setTabId(e.target.id);
      setTabTitle(e.target.title);
    }
  }

  function handleDeleteTab() {
    dispatch(deleteUserTab({ tabId: tabId }));
  }

  function handleEditTab(e: any) {
    setShowModal(true);
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
            <Button onClick={handleEditTab} name="edit selected">
              EDIT SELECTED
            </Button>
            <Button onClick={handleDeleteTab}>DELETE SELECTED</Button>
            <ListGroup>
              {data.map((item) => (
                <ListGroup.Item
                  key={item._id}
                  id={item._id}
                  title={item.tabName}
                  action
                  variant="light"
                  onClick={handlerSelectTab}
                >
                  {item.tabName}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}> OK </Button>
          <Button onClick={props.onHide}>CANCEL</Button>
        </Modal.Footer>
      </Modal>
      <ModalTabNewTitle
        show={showModal}
        onHide={() => setShowModal(false)}
        tabId={tabId}
      />
    </>
  );
};

export default ModalTabSettings;
