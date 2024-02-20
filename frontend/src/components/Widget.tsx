import React from "react";
import { ListGroupItem } from "react-bootstrap";

const Widget = (props: any) => {
  return (
    <ListGroupItem className="border border-info m-2" variant="light" action>
      <img src={props.image} alt=" " />
      <h5 className="h6">{props.name}</h5>
    </ListGroupItem>
  );
};

export default Widget;
