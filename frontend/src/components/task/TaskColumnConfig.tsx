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
import { addTaskColumnToListOfColumnToDisplay } from "../../redux/slices/userSlice";

interface ColumnConfigList {
  handleClose: () => void;
  show: boolean;
  onHide: () => void;
  columnConfigList: { id: string; name: string }[];
}

const ColumnConfig = (props: ColumnConfigList) => {
  const data = useAppSelector(
    (state) => state.userData.listOfColumnsToDisplay.task
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
    return dispatch(addTaskColumnToListOfColumnToDisplay(copyData));
  }
  return (
    <Card
      className="d-flex flex-column text-white bg-dark"
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
              checked={data.includes("02Description") ? true : false}
              type="checkbox"
              id="02Description"
              label="DESCRIPTION"
            />
            <FormCheck
              checked={data.includes("03Task Type") ? true : false}
              type="checkbox"
              id="03Task Type"
              label="TASK TYPE"
            />
            <FormCheck
              checked={data.includes("04Location") ? true : false}
              type="checkbox"
              id="04Location"
              label="LOCATION"
            />
            <FormCheck
              checked={data.includes("05Status") ? true : false}
              type="checkbox"
              id="05Status"
              label="STATUS"
            />
            <FormCheck
              checked={data.includes("06Package") ? true : false}
              type="checkbox"
              id="06Package"
              label="PACKAGE"
            />
            <FormCheck
              checked={data.includes("07Target Date") ? true : false}
              type="checkbox"
              id="07Target Date"
              label="TARGET DATE"
            />

            <FormCheck
              checked={data.includes("08By Organisation") ? true : false}
              type="checkbox"
              id="08By Organisation"
              label="BY ORGANISATION"
            />
            <FormCheck
              checked={data.includes("09By User") ? true : false}
              type="checkbox"
              id="09By User"
              label="BY USER"
            />
            <FormCheck
              checked={data.includes("10Cause") ? true : false}
              type="checkbox"
              id="10Cause"
              label="CAUSE"
            />
            <FormCheck
              checked={data.includes("11Cause By") ? true : false}
              type="checkbox"
              id="11Cause By"
              label="CAUSE BY"
            />
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
};

export default ColumnConfig;
