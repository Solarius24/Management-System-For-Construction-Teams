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

            <th>
              <a href=" ">Ref</a>
            </th>
            <th>
              <a href=" ">Description</a>
            </th>
            <th>
              <a href=" ">Task Type</a>
            </th>
            <th>
              <a href=" ">Location</a>
            </th>

            <th>
              <span></span>
              <a href=" ">Status</a>
            </th>
            <th>
              <a href=" ">Package</a>
            </th>
            <th>
              <a href=" ">Target Date</a>
            </th>
            <th>
              <a href=" ">By Organisation</a>
            </th>
            <th>
              <a href=" ">By User</a>
            </th>
            <th>
              <a href=" ">Cause</a>
            </th>
            <th>
              <a href=" ">Cause By</a>
            </th>
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
                <td id="ref">
                  <Link to={`/tasks/edit/${item.taskRef}`}>{item.taskRef}</Link>
                </td>
                <td id="description">{item.description}</td>
                <td id="taskType">{item.taskType}</td>
                <td id="location">{item.location}</td>
                <td id="status">{item.taskStatus}</td>
                <td id="package">{item.contractPackage}</td>
                <td id="targetDate">{item.targetDate}</td>
                <td id="issuedToOrgaznization">{item.issuedToOrganisation}</td>
                <td id="issuedByUser">{item.issuedByUser}</td>
                <td id="cause">{item.cause}</td>
                <td id="causedBy">{item.causedBy}</td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TasksList;
