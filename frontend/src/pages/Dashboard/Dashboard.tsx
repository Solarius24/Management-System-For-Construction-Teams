import { useState } from "react";
import { Button, Container, Navbar, Spinner, Tab, Tabs } from "react-bootstrap";
import ModalTabSettings from "../../components/modals/ModalTabSettings/ModalTabSettings";
import ModalAddTab from "../../components/modals/ModalAddTab";
import widgetList from "../../components/widgets/widgetList";
import ModalAddWidget from "../../components/modals/ModalAddWidget";
import ListOfWidgets from "../../components/widgets/ListOfWidgets";
import { useAppSelector } from "../../redux/reduxHooks";

const Dashboard = () => {
  const [key, setKey] = useState("65c7c94f4217846243781a98");
  const [modalAddWidgetShow, setModalAddWidgetShow] = useState(false);
  const [modalSettingsShow, setModalSettingsShow] = useState(false);
  const [modalAddTabShow, setModalAddTabShow] = useState(false);
  const data = useAppSelector((state) => state.userData.listOfTabs);

  function handleAddNewTab() {
    setModalAddTabShow(true);
  }

  function handleAddWidget() {
    setModalAddWidgetShow(true);
  }
  return (
    <div>
      <Navbar bg="white" className="mt-5 gap-3 ms-3">
        <Button variant="primary" onClick={handleAddNewTab}>
          ADD NEW TAB
        </Button>
        <Button className="ml-5" onClick={() => setModalSettingsShow(true)}>
          TAB SETTINGS
        </Button>
      </Navbar>

      {data[0].tabName === "default" ? (
        <Container>
          <Tabs
            className="mb-3"
            activeKey={key}
            onSelect={(k: any) => setKey(k)}
            defaultActiveKey={key}
          >
            {data.map((tab: any) => (
              <Tab
                key={tab._id}
                id={tab._id}
                title={tab.tabName}
                eventKey={tab._id}
              >
                <Button
                  id="add_widget"
                  active
                  variant="primary"
                  onClick={handleAddWidget}
                >
                  ADD WIDGET
                </Button>
                <ListOfWidgets tabId={key} widgets={tab.listOfWidgets} />
              </Tab>
            ))}
          </Tabs>
        </Container>
      ) : (
        <div
          className="d-flex flex-column align-items-center justify-content-top"
          style={{ width: "100vw", height: "100vh" }}
        >
          <Spinner style={{ width: "15rem", height: "15rem" }}></Spinner>
          <h5>...LOADING</h5>
          <h5>please wait approx 1 min</h5>
        </div>
      )}

      <ModalAddWidget
        show={modalAddWidgetShow}
        onHide={() => setModalAddWidgetShow(false)}
        title="ADD WIDGET"
        listOfWidgets={widgetList}
        tabId={key}
      />
      <ModalTabSettings
        show={modalSettingsShow}
        onHide={() => setModalSettingsShow(false)}
        title={"TAB SETTINGS"}
      />

      <ModalAddTab
        show={modalAddTabShow}
        onHide={() => setModalAddTabShow(false)}
        title={"ADD TAB"}
      />
    </div>
  );
};

export default Dashboard;
