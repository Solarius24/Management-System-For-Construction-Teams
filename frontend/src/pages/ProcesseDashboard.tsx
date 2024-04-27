import { Button, Container, Table } from "react-bootstrap";
import { useAppSelector } from "../redux/reduxHooks";
import { useParams } from "react-router-dom";
import ModalProcessesAddLocation from "../components/modals/ModalProcessesAddLocation";
import { useState } from "react";

function ProcesseDashboard() {
  const [modalShow, setModalShow] = useState(false);
  const data = useAppSelector((state) => state.processes.data);

  let { processRef } = useParams();

  const process = data.filter((item) => item._id === processRef);

  function handleModalShow() {
    setModalShow(true);
  }

  return (
    <>
      <Container fluid style={{ marginTop: "60px" }}>
        <div>{process[0].title}</div>
        <Button variant="primary" onClick={handleModalShow}>
          ADD LOCATION
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr style={{ fontSize: "0.9rem" }}>
              <th>Location</th>

              {process[0].columns.map((item, index) => {
                return (
                  <th key={index} id="item">
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody></tbody>
        </Table>
      </Container>

      <ModalProcessesAddLocation
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={"ADD TAB"}
      />
    </>
  );
}

export default ProcesseDashboard;
