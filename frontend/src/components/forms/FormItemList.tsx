// @ts-nocheck
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { fetchForms } from "../../redux/slices/formSlice";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { Link } from "react-router-dom";

const FormItemList = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const data = useAppSelector((state) => state.form.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchForms());
  }, [dispatch]);

  function handleCheckboxChange(e) {
    const value = e.target.id;
    console.log(value);
    if (e.target.checked) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== value));
    }
  }
  console.log(selectedItems);

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
              <a href=" ">Title</a>
            </th>
            <th>
              <a href=" ">Status</a>
            </th>
            <th>
              <a href=" ">Location</a>
            </th>

            <th>
              <span></span>
              <a href=" ">Created</a>
            </th>
            <th>
              <a href=" ">Type</a>
            </th>
            <th>
              <a href=" ">By User</a>
            </th>
            <th>
              <a href=" ">By Organisation</a>
            </th>
            <th>
              <a href=" ">Status Changed</a>
            </th>
            <th>
              <a href=" ">Expiry Date</a>
            </th>
            <th>
              <a href=" ">Actions</a>
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
                    id={item.documentRef}
                    onChange={handleCheckboxChange}
                  />
                  <label>&nbsp;</label>
                </td>
                <td id="ref">
                  <Link to={`/forms/edit/${item.documentRef}`}>
                    {item.documentRef}
                  </Link>
                </td>
                <td id="title">{item.formTitle}</td>
                <td id="status">{item.status}</td>
                <td id="location">{item.location}</td>
                <td id="createdDate">{item.createdDate}</td>
                <td id="type">{item.formType}</td>
                <td id="createdBy"></td>
                <td id="organizationName"></td>
                <td id="statusChangedDate"></td>
                <td id="expiryDate"></td>
                <td id="action"></td>
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
