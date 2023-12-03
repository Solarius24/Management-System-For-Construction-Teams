import React from "react";
import { Form, FormCheck, FormGroup } from "react-bootstrap";

interface CheckBoxFilterData {
  data:string[],
}

const CheckBoxFilter = (props: CheckBoxFilterData) => {
  return (
    <Form>
      <FormGroup>
        {props.data.map((item) => (
          <FormCheck label={item} name="6" type="checkbox" onChange={()=>alert("checked")}  />
        ))}
      </FormGroup>
    </Form>
  );
};

export default CheckBoxFilter;
