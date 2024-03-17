// @ts-nocheck
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { fetchForms } from "../../redux/slices/formSlice";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { Link } from "react-router-dom";
import BasicSpinner from "../BasicSpinner";

const FormItemList = (props) => {
  const [selectedItem, setSelectedItem] = useState([]);
  const data = useAppSelector((state) => state.form.data);
  const listOfColumnsToDisplay = useAppSelector(
    (state) => state.userData.listOfColumnsToDisplay.form
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchForms());
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
            {/* 
            <th id="ref">
              <a href=" ">Ref</a>
            </th>
            <th id="title">
              <a href=" ">Title</a>
            </th>
            <th id="status">
              <a href=" ">Status</a>
            </th>
            <th id="location">
              <a href=" ">Location</a>
            </th>

            <th id="createdDate">
              <span></span>
              <a href=" ">Created</a>
            </th>
            <th id="type">
              <a href=" ">Type</a>
            </th>
            <th id="byUser">
              <a href=" ">By User</a>
            </th>
            <th id="byOrganisation">
              <a href=" ">By Organisation</a>
            </th>
            <th id="statusChanged">
              <a href=" ">Status Changed</a>
            </th>
            <th id="expiryDate">
              <a href=" ">Expiry Date</a>
            </th>
            <th id="actions">
              <a href=" ">Actions</a>
            </th> */}
          </tr>
        </thead>
        {!data && <BasicSpinner />}
        <tbody className="s">
          {data.map((item) => (
            <>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    id={item.documentRef}
                    onChange={handleCheckboxChange}
                  />
                  <label>&nbsp;</label>
                </td>
                {listOfColumnsToDisplay.includes("01Ref") && (
                  <td id="ref">
                    <Link to={`/forms/edit/${item.documentRef}`}>
                      {item.documentRef}
                    </Link>
                  </td>
                )}
                {listOfColumnsToDisplay.includes("02Title") && (
                  <td id="title">{item.formTitle}</td>
                )}
                {listOfColumnsToDisplay.includes("03Status") && (
                  <td id="status">{item.status}</td>
                )}
                {listOfColumnsToDisplay.includes("04Location") && (
                  <td id="location">{item.location}</td>
                )}
                {listOfColumnsToDisplay.includes("05Created date") && (
                  <td id="createdDate">{item.createdDate}</td>
                )}
                {listOfColumnsToDisplay.includes("06Type") && (
                  <td id="type">{item.formType}</td>
                )}
                {listOfColumnsToDisplay.includes("07By User") && (
                  <td id="byUser"></td>
                )}
                {listOfColumnsToDisplay.includes("08By Organisation") && (
                  <td id="byOrganisation"></td>
                )}
                {listOfColumnsToDisplay.includes("09Status Changed") && (
                  <td id="statusChanged"></td>
                )}
                {listOfColumnsToDisplay.includes("10Expiry Date") && (
                  <td id="expiryDate"></td>
                )}
                {listOfColumnsToDisplay.includes("11Actions") && (
                  <td id="actions"></td>
                )}

                {/* <td id="title">{item.formTitle}</td>
                <td id="status">{item.status}</td>
                <td id="location">{item.location}</td>
                <td id="createdDate">{item.createdDate}</td>
                <td id="type">{item.formType}</td>
                <td id="byUser"></td>
                <td id="byOrganisation"></td>
                <td id="statusChanged"></td>
                <td id="expiryDate"></td>
                <td id="actions"></td> */}
              </tr>
              <div></div>
            </>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default FormItemList;
