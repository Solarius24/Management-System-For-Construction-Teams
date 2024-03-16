import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormCheck,
  FormGroup,
} from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks";
import { addColumnToListOfColumnToDisplay } from "../redux/slices/userSlice";

interface ColumnConfigList {
  handleClose: () => void;
  show: boolean;
  onHide: () => void;
  columnConfigList: { id: string; name: string }[];
}

const ColumnConfig = (props: ColumnConfigList) => {
  const data = useAppSelector(
    (state) => state.userData.listOfColumnsToDisplay.form
  );
  const dispatch = useAppDispatch();
  function addColumn(e: any) {
    let copyData = [...data];
    if (e.target.checked === true) {
      copyData.push(e.target.id);
    } else if (e.target.checked === false) {
      let unchecked = copyData.filter((col) => col !== e.target.id);
      copyData = unchecked;
    }
    return dispatch(addColumnToListOfColumnToDisplay(copyData));
  }
  return (
    <Card className="d-flex flex-column flex-shrink-0 text-white bg-dark ove">
      <CardTitle className="d-flex justify-content-between m-2">
        <div className="fs-6">COLUMN CONFIGURATION</div>
        <Button onClick={props.onHide}>CLOSE</Button>
      </CardTitle>
      <CardBody style={{ height: "70vh" }} className="p-2">
        <Form
          className="nav nav-pills flex-column mb-auto overflow-scroll"
          style={{ height: "100%" }}
        >
          <FormGroup onChange={addColumn}>
            {/* {props.columnConfigList.map((item) => (
              <Form.Check
                label={item.name}
                name="6"
                type="checkbox"
                id={item.id}
              />
            ))} */}
            <FormCheck type="checkbox" id="Ref" label="REF" />
            <FormCheck type="checkbox" id="Title" label="TITLE" />
            <FormCheck type="checkbox" id="Status" label="STATUS" />
            <FormCheck type="checkbox" id="Location" label="LOCATION" />
            <FormCheck type="checkbox" id="Created date" label="CREATED DATE" />
            <FormCheck type="checkbox" id="Type" label="TYPE" />

            <FormCheck
              type="checkbox"
              id="By Organisation"
              label="BY ORGANISATION"
            />
            <FormCheck
              type="checkbox"
              id="Status Changed"
              label="STATUS CHANGED"
            />
            <FormCheck type="checkbox" id="Expiry Date" label="EXPIRY DATE" />
            <FormCheck type="checkbox" id="Actions" label="ACTIONS" />
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
