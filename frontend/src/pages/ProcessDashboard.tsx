import { Button, Container, Form, Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks";
import { useParams } from "react-router-dom";
import ModalProcessesAddLocation from "../components/modals/ModalProcessesAddLocation";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { updateLocationStatus } from "../redux/slices/processSlice";

function ProcessDashboard() {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.processes.data);
  //DEEP COPY OF DATA ARRAY
  let location = JSON.parse(JSON.stringify(data[0].location));
  // let location = data[0].location;
  // let location = [
  //   {
  //     locationStatus: {
  //       0: "NOT STARTED",
  //       1: "NOT STARTED",
  //       2: "NOT STARTED",
  //       3: "NOT STARTED",
  //       4: "NOT STARTED",
  //       5: "NOT STARTED",
  //       6: "NOT STARTED",
  //     },
  //   },
  //   {
  //     locationStatus: {
  //       0: "NOT STARTED",
  //       1: "NOT STARTED",
  //       2: "NOT STARTED",
  //       3: "NOT STARTED",
  //       4: "NOT STARTED",
  //       5: "NOT STARTED",
  //       6: "NOT STARTED",
  //     },
  //   },
  //   {
  //     locationStatus: {
  //       0: "NOT STARTED",
  //       1: "NOT STARTED",
  //       2: "NOT STARTED",
  //       3: "NOT STARTED",
  //       4: "NOT STARTED",
  //       5: "NOT STARTED",
  //       6: "NOT STARTED",
  //     },
  //   },
  //   {
  //     locationStatus: {
  //       0: "NOT STARTED",
  //       1: "NOT STARTED",
  //       2: "NOT STARTED",
  //       3: "NOT STARTED",
  //       4: "NOT STARTED",
  //       5: "NOT STARTED",
  //       6: "NOT STARTED",
  //     },
  //   },
  // ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log("data", data);

  let { processRef } = useParams();

  const process = data.filter((item) => item._id === processRef);

  function handleModalShow() {
    setModalShow(true);
  }

  function handleUpdateStatus() {
    dispatch(updateLocationStatus([location, process[0]._id]));
  }

  function update(a: number, b: number, e: any) {
    location[a].locationStatus[b] = e.target.value;
  }

  return (
    <>
      <Form style={{ marginTop: "60px" }} onSubmit={handleSubmit(onSubmit)}>
        <div>{process[0].title}</div>
        <Button variant="primary" onClick={handleModalShow}>
          ADD LOCATION
        </Button>
        <Button variant="primary" type="submit" onClick={handleUpdateStatus}>
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
            {process[0].location.map((item: any, indexA) => {
              return (
                <tr>
                  <td>{item.locationName}</td>
                  {Object.values(item.locationStatus).map((x, index) => {
                    return (
                      <td>
                        <Form.Group>
                          <Form.Select
                            defaultValue={String(x)}
                            // {...register(String(index), { required: true })}
                            onChange={(e) => update(indexA, index, e)}
                          >
                            {/* <option>{x}</option> */}
                            <option value="NOT STARTED">NOT STARTED</option>
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
      </Form>

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
