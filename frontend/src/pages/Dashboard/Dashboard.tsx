import { useEffect, useState } from "react";
import { Button, Container, Navbar, Tab, Tabs } from "react-bootstrap";
import ModalTabSettings from "../../components/modals/ModalTabSettings/ModalTabSettings";
import ModalAddTab from "../../components/modals/ModalAddTab";
import widgetList from "../../components/widgets/widgetList";
import ModalAddWidget from "../../components/modals/ModalAddWidget";
import ListOfWidgets from "../../components/widgets/ListOfWidgets";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { fetchUserData } from "../../redux/slices/userSlice";
import { fetchForms } from "../../redux/slices/formSlice";
import { fetchTasks } from "../../redux/slices/taskSlice";
import { fetchFormsSchedule } from "../../redux/slices/formScheduleSlice";
import { fetchProcesses } from "../../redux/slices/processSlice";

const Dashboard = () => {
  const [key, setKey] = useState("65c7c94f4217846243781a98");
  const [modalAddWidgetShow, setModalAddWidgetShow] = useState(false);
  const [modalSettingsShow, setModalSettingsShow] = useState(false);
  const [modalAddTabShow, setModalAddTabShow] = useState(false);
  const data = useAppSelector((state) => state.userData.listOfTabs);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUserData());
    dispatch(fetchForms());
    dispatch(fetchTasks());
    dispatch(fetchFormsSchedule());
    dispatch(fetchProcesses());
  }, []);

  function handleAddNewTab() {
    setModalAddTabShow(true);
  }

  function handleAddWidget() {
    setModalAddWidgetShow(true);
  }
  return (
    <div>
      <Navbar bg="white" className="mt-5">
        <Button variant="primary" onClick={handleAddNewTab}>
          ADD NEW TAB
        </Button>
        <Button className="ml-5" onClick={() => setModalSettingsShow(true)}>
          TAB SETTINGS
        </Button>
      </Navbar>

      <Container>
        <Tabs className="mb-3" activeKey={key} onSelect={(k: any) => setKey(k)}>
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
