import { Tab, Tabs } from "react-bootstrap";
import FormsTab from "./FormsTab";
import FormScheduleTab from "./FormScheduleTab";
import FormItemList from "../components/forms/FormItemList";

const Forms = () => {
  return (
    <div style={{marginTop:"60px"}}>
      <Tabs
        defaultActiveKey={"formsTab"}
        id="controlled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="formsTab" title="FORMS">
          <FormsTab />
        </Tab>
        <Tab eventKey="formScheduleTab" title="FORMS SCHEDULE">
          <FormScheduleTab />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Forms;
