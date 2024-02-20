import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import { Image, ListGroup, ListGroupItem, Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import { addWidget } from "../../redux/slices/userSlice";
import { useAppDispatch } from "../../redux/reduxHooks";

const ModalAddWidget = (props: any) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetType, setWidgetType] = useState("");
  const dispatch = useAppDispatch();

  function handleSelect(e: any) {
    setWidgetType(e.target.title);
    setWidgetName(e.target.innerText);
  }

  function handleAddWidgetToWidgetList(e: any) {
    dispatch(
      addWidget({
        widgetName: widgetName,
        tabId: props.tabId,
        widgetType: widgetType,
      })
    );
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
                  (widget: {
                    name: string;
                    image: string;
                    widgetType: string;
                  }) => (
                    <div>
                      <ListGroupItem
                        className="border border-info m-2"
                        variant="light"
                        action
                        onClick={handleSelect}
                        title={widget.widgetType}
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
                  .map(
                    (widget: {
                      name: string;
                      image: string;
                      widgetType: string;
                    }) => (
                      <div>
                        <ListGroupItem
                          className="border border-info m-2"
                          variant="light"
                          action
                          onClick={handleSelect}
                          title={widget.widgetType}
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
        <Tab eventKey="tasks" title="TASKS">
          <Modal.Body className="grid-example">
            <Container fluid>
              <ListGroup>
                {props.listOfWidgets
                  .filter((item: { type: string }) => item.type === "task")
                  .map(
                    (widget: {
                      name: string;
                      image: string;
                      widgetType: string;
                    }) => (
                      <div>
                        <ListGroupItem
                          className="border border-info m-2"
                          variant="light"
                          action
                          onClick={handleSelect}
                          title={widget.widgetType}
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

        <Tab eventKey="processes" title="PROCESSES">
          <Modal.Body className="grid-example">
            <Container fluid>
              <ListGroup>
                {props.listOfWidgets
                  .filter((item: { type: string }) => item.type === "processe")
                  .map(
                    (widget: {
                      name: string;
                      image: string;
                      widgetType: string;
                    }) => (
                      <div>
                        <ListGroupItem
                          className="border border-info m-2"
                          variant="light"
                          action
                          onClick={handleSelect}
                          title={widget.widgetType}
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
      </Tabs>

      <Modal.Footer>
        <Button onClick={handleAddWidgetToWidgetList}> OK </Button>
        <Button onClick={props.onHide}>CANCEL</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalAddWidget;
