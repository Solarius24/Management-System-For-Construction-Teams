// @ts-nocheck
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { fetchTasks } from "../../redux/slices/taskSlice";
import BasicSpiner from "../BasicSpinner";

const TasksList = (props) => {
  const [selectedItem, setSelectedItem] = useState([]);
  const data = useAppSelector((state) => state.task.data);
  const listOfColumnsToDisplay = useAppSelector(
    (state) => state.userData.listOfColumnsToDisplay.task
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  function handleCheckboxChange(e) {
    const value = e.target.id;
    if (e.target.checked) {
      setSelectedItem([...selectedItem, value]);
    } else {
      setSelectedItem(selectedItem.filter((item) => item !== value));
    }
  }
  props.setSelectedItems(selectedItem);

  return (
    <Container fluid>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
              <label>&nbsp;</label>
            </th>
            {listOfColumnsToDisplay.map((item) => {
              return (
                <th id="item">
                  <a href=" ">{item.substring(2)}</a>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody className="s">
          {!data && <BasicSpiner />}
          {data.map((item) => (
            <>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    id={item.taskRef}
                    onChange={handleCheckboxChange}
                  />
                  <label>&nbsp;</label>
                </td>
                {listOfColumnsToDisplay.includes("01Ref") && (
                  <td id="ref">
                    <Link to={`/forms/edit/${item.documentRef}`}>
                      {item.taskRef}
                    </Link>
                  </td>
                )}
                {listOfColumnsToDisplay.includes("02Description") && (
                  <td id="description">{item.description}</td>
                )}
                {listOfColumnsToDisplay.includes("03Task Type") && (
                  <td id="task type">{item.taskType}</td>
                )}
                {listOfColumnsToDisplay.includes("04Location") && (
                  <td id="location">{item.location}</td>
                )}
                {listOfColumnsToDisplay.includes("05Status") && (
                  <td id="status">{item.taskStatus}</td>
                )}
                {listOfColumnsToDisplay.includes("06Package") && (
                  <td id="package">{item.contractPackage}</td>
                )}
                {listOfColumnsToDisplay.includes("07Target Date") && (
                  <td id="target date">{item.targetDate}</td>
                )}
                {listOfColumnsToDisplay.includes("08By Organisation") && (
                  <td id="byOrganisation">{item.issuedToOrganisation}</td>
                )}
                {listOfColumnsToDisplay.includes("09By User") && (
                  <td id="byUser">{item.issuedByUser}</td>
                )}
                {listOfColumnsToDisplay.includes("10Cause") && (
                  <td id="cause">{item.cause}</td>
                )}
                {listOfColumnsToDisplay.includes("11Cause By") && (
                  <td id="cause by">{item.causedBy}</td>
                )}
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TasksList;
