//@ts-nocheck
import { Button, Container, Form, Table } from "react-bootstrap";
import { useAppSelector } from "../redux/reduxHooks";
import { useParams } from "react-router-dom";
import ModalProcessesAddLocation from "../components/modals/ModalProcessesAddLocation";
import { useState } from "react";

function ProcessDashboard() {
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
        <Button variant="primary" onClick={handleModalShow}>
          SAVE
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr style={{ fontSize: "0.9rem" }}>
              <th>Location</th>

              {process[0].columns.map((item, index) => {
                return (
                  <th key={index} id={item.slice(0, 3)}>
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {process[0].location.map((item: any) => {
              return (
                <tr>
                  <td>{item.locationName}</td>
                  {Object.values(item.locationStatus).map((x) => {
                    return (
                      <td>
                        <Form.Group>
                          <Form.Select
                            defaultValue={x}
                            // {...register("status", { required: true })}
                            // onChange={(e) => setStatus(e.target.value)}
                            // aria-label="Default select example"
                          >
                            {/* <option>{x}</option> */}
                            <option value="OPEN">NOT STARTED</option>
                            <option value="CHECK IN PROGRESS">
                              CHECK IN PROGRESS
                            </option>
                            <option value="NCR OPEN">NCR OPEN</option>
                            <option value="COMPLETED">COMPLETED</option>
                            <option value="NOT APPLICABLE">
                              NOT APPLICABLE
                            </option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>

      <ModalProcessesAddLocation
        docId={process[0]._id}
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={"ADD TAB"}
      />
    </>
  );
}

export default ProcessDashboard;
