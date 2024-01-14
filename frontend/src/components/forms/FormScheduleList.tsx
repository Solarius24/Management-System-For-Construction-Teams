import { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { fetchForms } from "../../redux/slices/formSlice";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { Link } from "react-router-dom";

const FormItemList = () => {
  const data = useAppSelector((state) => state.form.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchForms());
  }, [dispatch]);

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
              <a href=" ">Issued To Organization</a>
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
                <td></td>
                <td id="ref">
                  <Link to={`/forms/edit/${item.documentRef}`}>
                    {item.documentRef}
                  </Link>
                </td>
                <td id="title">{item.type}</td>
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
