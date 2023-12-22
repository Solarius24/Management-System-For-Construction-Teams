import { useState } from "react";
import {
  Button,
  CardGroup,
  Container,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import ModalSettings from "../components/modals/ModalSettings";
import ModalInput from "../components/modals/ModalInput";
import listOfWidgets from "../configData/widgetsConfig/listOfWidgets";
import ModalAddWidget from "../components/modals/ModalAddWidget";
import TinyBarChart from "../components/widgets/TinyBarChart";
import { Link } from "react-router-dom";
import HorizontalBarchart from "../components/widgets/HorizontalBarChart";
import PieChartWithCustomLabels from "../components/widgets/PieChartWithCustomLabels";

const Dashboard = () => {
  const [modalGridShow, setModalGridShow] = useState(false);
  const [modalSettingsShow, setModalSettingsShow] = useState(false);
  const [modalInputShow, setModalInputShow] = useState(false);

  return (
    <div>
      <Navbar bg="white" className="mt-5">
        <Button
          disabled
          variant="primary"
          onClick={() => setModalInputShow(true)}
        >
          ADD NEW TAB
        </Button>
        <Container>
          <Nav variant="tabs" className="me-auto">
            <Nav.Link>
              <Link to={"/dashboard?tabid=01"}>Default Tab</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/dashboard?tabid=02"}> New Tab 01</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to={"/dashboard?tabid=03"}>New Tab 02 </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="d-flex justify-content-between m-2">
        <Button variant="primary" onClick={() => setModalGridShow(true)}>
          ADD WIDGET
        </Button>
        <Button className="ml-5" onClick={() => setModalSettingsShow(true)}>
          TAB SETTINGS
        </Button>
      </Container>

      <Container fluid>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px 20px",
            justifyContent: "center",
          }}
        >
          <TinyBarChart />
          <HorizontalBarchart />
          <PieChartWithCustomLabels />
          <TinyBarChart />
          <TinyBarChart />
          <HorizontalBarchart />
          <PieChartWithCustomLabels />
          <TinyBarChart />
        </div>
      </Container>
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
