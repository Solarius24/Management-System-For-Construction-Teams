import { Container, Table } from "react-bootstrap";

const Processes = () => {
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
          <tr>
            <td>
              <a href=" ">51848</a>
            </td>
            <td>CONCRETE WORKS TRACKER</td>
            <td>eXPANDED</td>
            <td>17/20/21</td>
          </tr>
          <tr>
            <td>
              <a href=" ">51841</a>
            </td>
            <td>Waterproof Ext Faces of HH & CB Tracker - HS2OOC</td>
            <td>eXPANDED</td>
            <td>17/20/21</td>
          </tr>
          <tr>
            <td>
              <a href=" ">51840</a>
            </td>
            <td>
              Waterproofing UG Roof Slabs & SBS InstallationTracker - HS2OOC
            </td>
            <td>eXPANDED</td>
            <td>17/20/21</td>
          </tr>
          <tr>
            <td>
              <a href=" ">51842</a>
            </td>
            <td>UTX Concrete Works Tracker with Waterproofing - HS200C</td>
            <td>eXPANDED</td>
            <td>17/20/21</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Processes;
