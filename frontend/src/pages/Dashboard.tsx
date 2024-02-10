import { useEffect, useState } from "react";
import { Button, Container, Navbar, Tab, Tabs } from "react-bootstrap";
import ModalSettings from "../components/modals/ModalTabSettings";
import ModalAddTab from "../components/modals/ModalAddTab";
import listOfWidgets from "../configData/widgetsConfig/listOfWidgets";
import ModalAddWidget from "../components/modals/ModalAddWidget";
import ListOfWidgets from "../components/widgets/ListOfWidgets";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks";
import { fetchUserData } from "../redux/slices/userSlice";

const Dashboard = () => {
  const [modalGridShow, setModalGridShow] = useState(false);
  const [modalSettingsShow, setModalSettingsShow] = useState(false);
  const [modalAddTabShow, setModalAddTabShow] = useState(false);
  const [tabId, setTabId] = useState("");
  const data = useAppSelector((state) => state.userData.listOfTabs);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  function handleAddNewTab() {
    setModalAddTabShow(true);
  }

  function handleAddWidget() {
    setModalGridShow(true);
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
        <Tabs
          defaultActiveKey={"Default"}
          id="controlled-tab-example"
          className="mb-3"
        >
          {data.map((tab: any) => (
            <Tab
              title={tab.tabName}
              eventKey={tab.tabName}
              onClick={() => setTabId(tab._id)}
            >
              <Button active variant="primary" onClick={handleAddWidget}>
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
        tabId={tabId}
      />
      <ModalSettings
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
