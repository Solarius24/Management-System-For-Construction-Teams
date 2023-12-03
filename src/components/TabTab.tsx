import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const TabTab = (props: any) => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      {props.itemList.map((item: string) => (
        <Tab eventKey={item} title={item} />
      ))}
    </Tabs>
  );
};

export default TabTab;
