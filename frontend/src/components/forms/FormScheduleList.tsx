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

  // function filterData(item) {
  //   const filter = props.filter;
  //   if (filter.status && filter.status === item.status) {
  //     return true;
  //   }
  //   if (filter.location && filter.location === item.location) {
  //     return true;
  //   }
  //   if (filter.ref && filter.ref === item.id) {
  //     return true;
  //   }
  // }
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
            <th>
              <input type="checkbox" />
              <label>&nbsp;</label>
            </th>

            <th>
              <a href=" ">Ref</a>
            </th>
            <th>
              <a href=" ">Type</a>
            </th>
            <th>
              <a href=" ">Template</a>
            </th>
            <th>
              <a href=" ">Descrition</a>
            </th>

            <th>
              <span></span>
              <a href=" ">Location</a>
            </th>
            <th>
              <a href=" ">Issued By Organisation</a>
            </th>
            <th>
              <a href=" ">Start Date</a>
            </th>
            <th>
              <a href=" ">Repeat</a>
            </th>
            <th>
              <a href=" ">Created By</a>
            </th>
          </tr>
        </thead>
        <tbody className="s">
          {data.map((item) => (
            <>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    id={item.id}
                    onChange={handleCheckboxChange}
                  />
                  <label>&nbsp;</label>
                </td>
                <td id="ref">
                  <Link to={`/forms_schedule/edit/${item.id}`}>{item.id}</Link>
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
              <div></div>
            </>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default FormScheduleList;
