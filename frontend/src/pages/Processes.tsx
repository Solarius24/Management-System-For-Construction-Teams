import { Container, Table } from "react-bootstrap";
import { useAppSelector } from "../redux/reduxHooks";
import { Link } from "react-router-dom";

const Processes = () => {
  const data = useAppSelector((state) => state.processes.data);
  return (
    <Container
      fluid
      className="overflow-auto"
      style={{ height: "80vh", marginTop: "60px" }}
    >
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <a href=" ">REF</a>
            </th>
            <th>
              <a href=" ">PROCESS NAME</a>
            </th>
            <th>
              <a href=" ">ORGANIZATION</a>
            </th>
            <th>
              <a href=" ">LAST MODIFIED</a>
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item: any) => {
            return (
              <tr>
                <td>
                  <Link to={`/processes/detail/${item._id}`}>{item._id}</Link>
                </td>
                <td>{item.title}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Processes;
