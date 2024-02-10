import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import { Image, ListGroup, ListGroupItem, Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import { addWidget } from "../../redux/slices/userSlice";
import { useAppDispatch } from "../../redux/reduxHooks";

const ModalAddWidget = (props: any) => {
  const [widget, setWidget] = useState("");
  const dispatch = useAppDispatch();

  function handleSelect(e: any) {
    console.log(e.target.innerText);
    setWidget(e.target.innerText);
  }

  function handleAddWidgetToWidgetList(e: any) {
    dispatch(addWidget({ widgetName: widget, tabId: props.tabId }));
    props.onHide();
  }
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>

      <Tabs
        defaultActiveKey="all widgets"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="all widgets" title="ALL WIDGETS">
          <Modal.Body className="grid-example">
            <Container fluid>
              <ListGroup>
                {props.listOfWidgets.map(
                  (widget: { name: string; image: string }) => (
                    <div>
                      <ListGroupItem
                        className="border border-info m-2"
                        variant="light"
                        action
                        onClick={handleSelect}
                      >
                        <Image src={widget.image} alt=" " />
                        <h5 className="h6">{widget.name}</h5>
                      </ListGroupItem>
                    </div>
                  )
                )}
              </ListGroup>
            </Container>
          </Modal.Body>
        </Tab>
        <Tab eventKey="forms" title="FORMS">
          <Modal.Body className="grid-example">
            <Container fluid>
              <ListGroup>
                {props.listOfWidgets
                  .filter((item: { type: string }) => item.type === "form")
                  .map((widget: { name: string; image: string }) => (
                    <div>
                      <ListGroupItem
                        className="border border-info m-2"
                        variant="light"
                        action
                      >
                        <Image src={widget.image} alt=" " />
                        <h5 className="h6">{widget.name}</h5>
                      </ListGroupItem>
                    </div>
                  ))}
              </ListGroup>
            </Container>
          </Modal.Body>
        </Tab>
        <Tab eventKey="tasks" title="TASKS">
          <Modal.Body className="grid-example">
            <Container fluid>
              <ListGroup>
                {props.listOfWidgets
                  .filter((item: { type: string }) => item.type === "task")
                  .map((widget: { name: string; image: string }) => (
                    <div>
                      <ListGroupItem
                        className="border border-info m-2"
                        variant="light"
                        action
                      >
                        <Image src={widget.image} alt=" " />
                        <h5 className="h6">{widget.name}</h5>
                      </ListGroupItem>
                    </div>
                  ))}
              </ListGroup>
            </Container>
          </Modal.Body>
        </Tab>

        <Tab eventKey="processes" title="PROCESSES">
          <Modal.Body className="grid-example">
            <Container fluid>
              <ListGroup>
                {props.listOfWidgets
                  .filter((item: { type: string }) => item.type === "processe")
                  .map((widget: { name: string; image: string }) => (
                    <div>
                      <ListGroupItem
                        className="border border-info m-2"
                        variant="light"
                        action
                      >
                        <Image src={widget.image} alt=" " />
                        <h5 className="h6">{widget.name}</h5>
                      </ListGroupItem>
                    </div>
                  ))}
              </ListGroup>
            </Container>
          </Modal.Body>
        </Tab>
      </Tabs>

      <Modal.Footer>
        <Button onClick={handleAddWidgetToWidgetList}> OK </Button>
        <Button onClick={props.onHide}>CANCEL</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalAddWidget;
