import React from "react";
import { Card, CardBody, CardTitle } from "react-bootstrap";

const Cyrcle = (props: any) => {
  return (
    <Card>
      <CardTitle>{props.widgetName}</CardTitle>
      <CardBody></CardBody>
    </Card>
  );
};

export default Cyrcle;
