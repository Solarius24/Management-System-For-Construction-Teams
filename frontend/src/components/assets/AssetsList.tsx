import { Container, Table } from "react-bootstrap";

const AssetsList = () => {
  return (
    <Container fluid style={{ height: "80vh" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                data-columnname="rowSelection"
                id="select-all-task-grid"
                className="ng-untouched ng-pristine ng-valid"
              />
            </th>
            <th>
              <a href=" ">DESCRIPTION</a>
            </th>
            <th>
              <a href=" ">LOCATION</a>
            </th>

            <th>
              <a href=" ">CREATED BY</a>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr id="task-grid-row-0">
            <td>
              <input type="checkbox" id="task-grid-row-0-input" />
              <label htmlFor="task-grid-row-0-input">&nbsp;</label>
            </td>
            <td id="Description">
              <span></span>
            </td>

            <td id="Location">
              <span></span>
            </td>

            <td id="Created">
              <span></span>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default AssetsList;
