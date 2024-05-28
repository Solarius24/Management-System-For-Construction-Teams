import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  ListGroup,
  Modal,
} from "react-bootstrap";
import ModalTabNewTitle from "../ModalTabNewtitle/ModalTabNewTitle";
import { useAppDispatch, useAppSelector } from "../../../redux/reduxHooks";
import { deleteUserTab } from "../../../redux/slices/userSlice";

const ModalTabSettings = (props: any) => {
  const [showModal, setShowModal] = useState(false);
  const [tabTitle, setTabTitle] = useState("");
  const [tabId, setTabId] = useState("");
  const [error, setError] = useState("");
  const data = useAppSelector((state) => state.userData.listOfTabs);
  const dispatch = useAppDispatch();

  function handlerSelectTab(e: any) {
    if (e.target.title === "default") {
      setError("default Tab cannot be remove or edit");
    } else {
      setError("");
      setTabId(e.target.id);
      setTabTitle(e.target.title);
    }
  }

  function handleDeleteTab() {
    if (tabId) {
      dispatch(deleteUserTab({ tabId: tabId }));
    } else {
      setError("Please select first the Tab to delete");
    }
  }

  function handleEditTab(e: any) {
    if (tabId) {
      setError("");
      setShowModal(true);
    } else {
      setError("Please select first the Tab to edit");
    }
  }
  function handleCloseModal() {
    setError("");
    setTabId("");
    setTabTitle("");
    props.onHide();
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
            <div className="d-flex flex-row justify-content-between ">
              <Button onClick={handleEditTab} name="edit selected">
                EDIT SELECTED
              </Button>
              <Button onClick={handleDeleteTab}>DELETE SELECTED</Button>
            </div>

            <p className="text-danger">{error}</p>
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
          <Button onClick={handleCloseModal}> OK </Button>
          <Button onClick={handleCloseModal}>CANCEL</Button>
        </Modal.Footer>
      </Modal>
      <ModalTabNewTitle
        show={showModal}
        onHide={() => setShowModal(false)}
        tabId={tabId}
        tabName={tabTitle}
      />
    </>
  );
};

export default ModalTabSettings;
