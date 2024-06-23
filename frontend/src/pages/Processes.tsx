import { Container, Table } from "react-bootstrap";
import { useAppSelector } from "../redux/reduxHooks";
import { Link } from "react-router-dom";

const Processes = () => {
  const data = useAppSelector((state) => state.processes.data);
  console.log(data);
  return (
    <Container
      fluid
      className="overflow-auto"
      style={{ height: "80vh", marginTop: "60px" }}
    >
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center">REF</th>
            <th className="text-center">PROCESS NAME</th>
            <th className="text-center">ORGANIZATION</th>
            <th className="text-center">LAST MODIFIED</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item: any) => {
            return (
              <tr>
                <td width="20%">
                  <Link to={`/processes/detail/${item._id}`}>{item._id}</Link>
                </td>
                <td>{item.title}</td>
                <td className="text-center">{item.organizationName}</td>
                <td className="text-center">
                  {item.updatedAt.slice(0, 16).replace("T", " ")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Processes;
