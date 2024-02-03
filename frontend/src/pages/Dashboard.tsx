import { useState } from "react";
import { Button, Container, Navbar, Tab, Tabs } from "react-bootstrap";
import ModalSettings from "../components/modals/ModalSettings";
import ModalInput from "../components/modals/ModalInput";
import listOfWidgets from "../configData/widgetsConfig/listOfWidgets";
import ModalAddWidget from "../components/modals/ModalAddWidget";
import ListOfWidgets from "../components/widgets/ListOfWidgets";

const Dashboard = () => {
  const [modalGridShow, setModalGridShow] = useState(false);
  const [modalSettingsShow, setModalSettingsShow] = useState(false);
  const [modalInputShow, setModalInputShow] = useState(false);

  const listOfTabs = [
    {
      name: "Default",
      listOfWidgets: [
        "Organizations With Most Tasks",
        "Location With Most Tasks",
      ],
    },
    { name: "Tab 01", listOfWidgets: ["Overdue Task Count"] },
    { name: "Tab 02", listOfWidgets: ["Task S Curve"] },
  ];

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
        <Button className="ml-5" onClick={() => setModalSettingsShow(true)}>
          TAB SETTINGS
        </Button>
      </Navbar>

      <Container>
        <Tabs
          defaultActiveKey={"formsTab"}
          id="controlled-tab-example"
          className="mb-3"
        >
          {listOfTabs.map((tab) => (
            <Tab title={tab.name} eventKey={tab.name}>
              <Button variant="primary" onClick={() => setModalGridShow(true)}>
                ADD WIDGET
              </Button>
              <ListOfWidgets widgets={tab.listOfWidgets} />
            </Tab>
          ))}
        </Tabs>
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
