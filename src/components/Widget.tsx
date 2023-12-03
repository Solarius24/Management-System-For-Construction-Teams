import React from "react";
import { Card, CardImg } from "react-bootstrap";

const Widget = (props: any) => {
  return (
    <div className="border border-info">
      <img src={props.image} alt=" " />
      <h5 className="h6">{props.name}</h5>
    </div>
  );
};

export default Widget;
