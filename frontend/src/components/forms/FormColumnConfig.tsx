import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormCheck,
  FormGroup,
} from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { addFormColumnToListOfColumnToDisplay } from "../../redux/slices/userSlice";

interface ColumnConfigList {
  handleClose: () => void;
  show: boolean;
  onHide: () => void;
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
    return dispatch(addFormColumnToListOfColumnToDisplay(copyData));
  }
  return (
    <Card
      className="d-flex flex-column text-white bg-dark ove"
      style={{ width: "15rem" }}
    >
      <CardTitle className="d-flex justify-content-between m-2">
        <div className="fs-6">COLUMN CONFIGURATION</div>
        <Button onClick={props.onHide}>CLOSE</Button>
      </CardTitle>
      <CardBody className="p-2">
        <Form
          className="nav nav-pills flex-column mb-auto"
          style={{ height: "100%" }}
        >
          <FormGroup onChange={addColumn}>
            <FormCheck
              checked={data.includes("01Ref") ? true : false}
              type="checkbox"
              id="01Ref"
              label="REF"
            />
            <FormCheck
              checked={data.includes("02Title") ? true : false}
              type="checkbox"
              id="02Title"
              label="TITLE"
            />
            <FormCheck
              checked={data.includes("03Status") ? true : false}
              type="checkbox"
              id="03Status"
              label="STATUS"
            />
            <FormCheck
              checked={data.includes("04Location") ? true : false}
              type="checkbox"
              id="04Location"
              label="LOCATION"
            />
            <FormCheck
              checked={data.includes("05Created date") ? true : false}
              type="checkbox"
              id="05Created date"
              label="CREATED DATE"
            />
            <FormCheck
              checked={data.includes("06Type") ? true : false}
              type="checkbox"
              id="06Type"
              label="TYPE"
            />
            <FormCheck
              checked={data.includes("07By User") ? true : false}
              type="checkbox"
              id="07By User"
              label="BY USER"
            />

            <FormCheck
              checked={data.includes("08By Organisation") ? true : false}
              type="checkbox"
              id="08By Organisation"
              label="BY ORGANISATION"
            />
            <FormCheck
              checked={data.includes("09Status Changed") ? true : false}
              type="checkbox"
              id="09Status Changed"
              label="STATUS CHANGED"
            />
            <FormCheck
              checked={data.includes("10Expiry Date") ? true : false}
              type="checkbox"
              id="10Expiry Date"
              label="EXPIRY DATE"
            />
            <FormCheck
              checked={data.includes("11Actions") ? true : false}
              type="checkbox"
              id="11Actions"
              label="ACTIONS"
            />
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
};

export default ColumnConfig;
