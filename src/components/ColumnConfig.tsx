import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
} from "react-bootstrap";

interface ColumnConfigList {
  handleClose: () => void;
  show: boolean;
  onHide: () => void;
  columnConfigList: { id: string; name: string }[];
}

const ColumnConfig = (props:ColumnConfigList) => {
  return (
    <Card
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark ove"
      style={{ width: "280px" }}
    >
      <CardTitle className="d-flex justify-content-between m-2">
        <div className="fs-6">COLUMN CONFIGURATION</div>
        <Button onClick={props.onHide}>CLOSE</Button>
      </CardTitle>
      <CardBody  style={{height:"70vh"}}>
        <Form className="nav nav-pills flex-column mb-auto overflow-scroll"
        style={{height:"100%"}}>
          <FormGroup>
            {props.columnConfigList.map((item) => (
              <Form.Check
                label={item.name}
                name="6"
                type="checkbox"
                id={item.id}
              />
            ))}
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
};

export default ColumnConfig;

{
  /* <div
className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark ove"
style={{ width: "280px" }}
>
<div className="d-flex justify-content-between m-2">
  <div className="fs-6">COLUMN CONFIGURATION</div>
  <Button onClick={props.onHide}>CLOSE</Button>
</div>

<hr />
<ul className="nav nav-pills flex-column mb-auto">
  <Form>
    {columnConfigList.map((item) => (
      <Form.Check
        label={item.name}
        name="6"
        type="checkbox"
        id={item.id}
      />
    ))}
  </Form>
</ul>
<hr />
</div> */
}
