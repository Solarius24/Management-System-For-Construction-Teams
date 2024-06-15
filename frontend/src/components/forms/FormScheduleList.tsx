// @ts-nocheck
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { fetchFormsSchedule } from "../../redux/slices/formScheduleSlice";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { Link } from "react-router-dom";

const FormScheduleList = (props) => {
  const [selectedItem, setSelectedItem] = useState([]);
  const formScheduleData = useAppSelector((state) => state.formSchedule.data);
  let data = [];

  function newFilter(item) {
    let filterValues = Object.values(props.filter);
    let itemValues = Object.values(item);
    return filterValues.every((v) => itemValues.includes(v));
  }

  if (Object.keys(props.filter).length > 0) {
    data = formScheduleData.filter(newFilter);
  } else {
    data = formScheduleData;
  }
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFormsSchedule());
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
            <th className="align-content-center">
              <input type="checkbox" />
            </th>

            <th className="text-center align-content-center">Ref</th>
            <th className="text-center align-content-center">Type</th>
            <th className="text-center align-content-center">Template</th>
            <th className="text-center align-content-center">Description</th>
            <th className="text-center align-content-center">Location</th>
            <th className="text-center align-content-center">
              Issued By Organization
            </th>
            <th className="text-center align-content-center">Start Date</th>
            <th className="text-center align-content-center">Repeat</th>
            <th className="text-center align-content-center">Created By</th>
          </tr>
        </thead>
        <tbody className="s">
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  id={item.id}
                  onChange={handleCheckboxChange}
                />
                <label>&nbsp;</label>
              </td>
              <td id="ref">
                <Link to={`/forms-schedule/edit/${item.id}`}>{item.id}</Link>
              </td>
              <td id="type">{item.type}</td>
              <td id="template">{item.template}</td>
              <td id="description">{item.description}</td>
              <td id="location">{item.location}</td>
              <td id="issuedByOrganisation">{item.issuedByOrganisation}</td>
              <td id="startDate">{item.startDate}</td>
              <td id="repeat">{item.repeat}</td>
              <td id="issuedBy">{item.issuedBy}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default FormScheduleList;
