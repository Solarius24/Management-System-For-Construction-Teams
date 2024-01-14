import { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { fetchFormsSchedule } from "../../redux/slices/formScheduleSlice";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { Link } from "react-router-dom";

const FormScheduleList = () => {
  const data = useAppSelector((state) => state.formSchedule.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFormsSchedule());
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
                  {" "}
                  <input type="checkbox" />
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
