import { Button, Container, Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { useParams } from "react-router-dom";
import ModalProcessesAddLocation from "../../components/modals/ModalProcessesAddLocation";
import { useState } from "react";
import { updateLocationStatus } from "../../redux/slices/processSlice";

function ProcessDashboard() {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.processes.data);
  //DEEP COPY OF DATA ARRAY
  let location = JSON.parse(JSON.stringify(data[0].location));
  let { processRef } = useParams();
  const process = data.filter((item) => item._id === processRef);

  function handleModalShow() {
    setModalShow(true);
  }

  function handleUpdateStatus() {
    dispatch(updateLocationStatus([location, process[0]._id]));
  }

  function updateStatus(a: number, b: number, e: any) {
    location[a].locationStatus[b] = e.target.value;

    switch (e.target.value) {
      case "NOT STARTED":
        return (e.target.style.background = "lightblue");
      case "CHECK IN PROGRESS":
        return (e.target.style.background = "yellow");
      case "NCR OPEN":
        return (e.target.style.background = "salmon");
      case "COMPLETED":
        return (e.target.style.background = "lightgreen");
      default:
        return (e.target.style.background = "lightgrey");
    }
  }

  return (
    <div className="bg-light">
      <Container fluid style={{ marginTop: "30px" }}>
        <Button variant="primary" className="m-3" onClick={handleModalShow}>
          ADD LOCATION
        </Button>
        <Button variant="primary" onClick={handleUpdateStatus}>
          SAVE
        </Button>
        {process.length > 0 ? (
          <div className="h1 text-center">{process[0].title}</div>
        ) : (
          <div>NO DATA FOUND</div>
        )}
        <Table striped bordered hover>
          <thead>
            <tr style={{ fontSize: "0.8rem" }}>
              <th style={{ verticalAlign: "top" }}>LOCATION</th>

              {process.length > 0 &&
                process[0].columns.map((item, index) => {
                  return (
                    <th
                      style={{ width: "12%", verticalAlign: "top" }}
                      key={index}
                      id={item.slice(0, 3)}
                    >
                      {item}
                    </th>
                  );
                })}
            </tr>
          </thead>

          <tbody>
            {process.length > 0 &&
              process[0].location.map((item: any, indexA) => {
                return (
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      {item.locationName}
                    </td>
                    {Object.values(item.locationStatus).map((status, index) => {
                      return (
                        <td>
                          <select
                            defaultValue={String(status)}
                            onChange={(e) => updateStatus(indexA, index, e)}
                            className="form-select "
                            aria-label="Default select example"
                            style={{
                              background: `${
                                status === "NOT STARTED"
                                  ? "lightblue"
                                  : status === "CHECK IN PROGRESS"
                                  ? "yellow"
                                  : status === "NCR OPEN"
                                  ? "salmon"
                                  : status === "COMPLETED"
                                  ? "lightgreen"
                                  : status === "NOT APPLICABLE"
                                  ? "lightgrey"
                                  : "white"
                              }`,
                              fontSize: "0.65rem",
                              fontWeight: "bold",
                            }}
                          >
                            <option
                              style={{ background: "lightblue" }}
                              value="NOT STARTED"
                            >
                              NOT STARTED
                            </option>
                            <option
                              style={{ background: "yellow" }}
                              value="CHECK IN PROGRESS"
                            >
                              CHECK IN PROGRESS
                            </option>
                            <option
                              style={{ background: "salmon" }}
                              value="NCR OPEN"
                            >
                              NCR OPEN
                            </option>
                            <option
                              style={{ background: "lightgreen" }}
                              value="COMPLETED"
                            >
                              COMPLETED
                            </option>
                            <option
                              style={{ background: "lightgrey" }}
                              value="NOT APPLICABLE"
                            >
                              NOT APPLICABLE
                            </option>
                          </select>
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
        docId={process.length > 0 && process[0]._id}
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={"ADD TAB"}
      />
    </div>
  );
}

export default ProcessDashboard;
