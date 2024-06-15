// @ts-nocheck
import { useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import { useAppSelector } from "../../redux/reduxHooks";
import { Link } from "react-router-dom";

const FormItemList = (props) => {
  const [selectedItem, setSelectedItem] = useState([]);
  const formData = useAppSelector((state) => state.form.data);
  const listOfColumnsToDisplay = useAppSelector(
    (state) => state.userData.listOfColumnsToDisplay.form
  );
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
    data = formData.filter(newFilter);
  } else {
    data = formData;
  }

  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(fetchForms());
  // }, [dispatch]);

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
          <tr style={{ fontSize: "0.9rem" }}>
            <th className="align-content-center">
              <input type="checkbox" />
            </th>

            {listOfColumnsToDisplay.map((item) => {
              return (
                <th
                  key={item}
                  id="item"
                  className="text-center align-content-center"
                >
                  {item.substring(2)}
                </th>
              );
            })}
          </tr>
        </thead>
        {!data && <Spinner />}
        <tbody>
          {data.map((item) => (
            <tr key={item.id} style={{ fontSize: "0.9rem" }}>
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
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default FormItemList;
