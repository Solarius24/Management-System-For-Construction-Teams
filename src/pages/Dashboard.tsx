import { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import ModalSettings from "../components/modals/ModalSettings";
import ModalInput from "../components/modals/ModalInput";
import listOfWidgets from "../configData/widgetsConfig/listOfWidgets";
import ModalAddWidget from "../components/modals/ModalAddWidget";



const Dashboard = () => {
  const [modalGridShow, setModalGridShow] = useState(false);
  const [modalSettingsShow, setModalSettingsShow] = useState(false);
  const [modalInputShow, setModalInputShow] = useState(false);

  return (
    <div>
      <Navbar bg="white">
        {/* <Button variant="primary" onClick={() => setModalInputShow(true)}>
          ADD NEW TAB
        </Button> */}
        <Container>
          <Nav variant="tabs" className="me-auto">
            <Nav.Link  href="/dashboard?tabid=01">Default Tab01</Nav.Link>
            <Nav.Link  href="/dashboard?tabid=02">Default Tab02</Nav.Link>
            <Nav.Link  href="/dashboard?tabid=03">Default Tab03</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="d-flex justify-content-between m-2">
        <Button variant="primary" onClick={() => setModalGridShow(true)}>
          ADD WIDGET
        </Button>
        <Button className="ml-5" onClick={() => setModalSettingsShow(true)}>
          TAB SETTINGS
        </Button>
      </div>
      <Container>Widgets</Container>
      <ModalAddWidget
        show={modalGridShow}
        onHide={() => setModalGridShow(false)}
        title={"ADD WIDGET"}
        listOfWidgets={listOfWidgets}
      />
      <ModalSettings
        show={modalSettingsShow}
        onHide={() => setModalSettingsShow(false)}
        title={"TAB SETTINGS"}
      />
      <ModalInput
        show={modalInputShow}
        onHide={() => setModalInputShow(false)}
        title={"ADD TAB"}

      />
    </div>
  );
};

export default Dashboard;
