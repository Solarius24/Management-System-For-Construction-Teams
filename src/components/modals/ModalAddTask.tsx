import { useState } from "react";
import { Button, Form, FormControl, FormLabel, InputGroup, Modal } from "react-bootstrap";
import createTask from "../../configData/tasksConfig/createTask";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../redux/reduxHooks";
import { updateTask,addTask } from "../../redux/slices/taskSlice";

interface ModalAddConfig {
  show: boolean;
  title: string;
  list: {
    id: string;
    name: string;
  }[];
  onHide: () => void;
  display?: React.ReactNode;
}
const ModalAddTask = (props: ModalAddConfig) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [taskType, setTaskType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [causedBy, setCausedBy] = useState("");
  const [statusChangeComments, setStatusChangeComments] = useState("");
  const [contractPackage, setConstractPackage] = useState("");
  const [cause, setCause] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [issuedToOrganisation, setIssuedToOrganisation] = useState("");
  const [issuedByUser, setIssuedByUser] = useState("");
  const dispatch = useAppDispatch();
  const id = Date.now()

  function onSubmitTask(data: any) {
    dispatch(addTask(data));
    props.onHide()
  }

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         ADD NEW TASK
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmitTask)}>
          <FormLabel>Task Ref Number:</FormLabel>
          <FormControl value = {id} {...register("taskRefNumber", {required:true})} disabled/>
          <Form.Label>Task Type</Form.Label>
          <Form.Select
            {...register("taskType", { required: true })}
            aria-label="Default select example"
            value={taskType}
            onChange={(e) => setTaskType(e.target.value)}
          >
            {props.list.map((item) => (
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            ))}
          </Form.Select>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              {...register("description", { required: true })}
              as="textarea"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Location</Form.Label>
            <Form.Select
              {...register("location", { required: true })}
              aria-label="Default select example"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option>--select---</option>
              {createTask.location.map((item: any) => (
                <option value={item}>{item}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Status</Form.Label>
            <Form.Select
              aria-label="Default select example"
              {...register("status", { required: true })}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>--select---</option>
              {createTask.status.map((item: any) => (
                <option value={item}>{item}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Status Change Comments</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              {...register("statusChangeComments", { required: true })}
              value={statusChangeComments}
              onChange={(e) => setStatusChangeComments(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Package</Form.Label>
            <Form.Select
              aria-label="Default select example"
              {...register("package", { required: true })}
              value={contractPackage}
              onChange={(e) => setConstractPackage(e.target.value)}
            >
              <option>--select---</option>
              {createTask.package.map((item: any) => (
                <option value={item}>{item}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Target Date</Form.Label>
            <FormControl
              type="date"
              {...register("targetDate", { required: true })}
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
            ></FormControl>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Issued To Organisation</Form.Label>
            <Form.Select
              aria-label="Default select example"
              {...register("issuedToOrganisation", { required: true })}
              value={issuedToOrganisation}
              onChange={(e) => setIssuedToOrganisation(e.target.value)}
            >
              <option>--select---</option>
              {createTask.issuedToOrganisation.map((item: any) => (
                <option value={item}>{item}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Issued By User</Form.Label>
            <Form.Select
              aria-label="Default select example"
              {...register("issuedByUser", { required: true })}
              value={issuedByUser}
              onChange={(e) => setIssuedByUser(e.target.value)}
            >
              <option>--select---</option>
              {createTask.issuedByUser.map((item: any) => (
                <option value={item}>{item}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Cause</Form.Label>
            <Form.Select
              aria-label="Default select example"
              {...register("cause", { required: true })}
              value={cause}
              onChange={(e) => setCause(e.target.value)}
            >
              <option>--select---</option>
              {createTask.cause.map((item: string) => (
                <option value={item}>{item}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Caused By</Form.Label>
            <Form.Select
              aria-label="Default select example"
              {...register("cousedBy", { required: true })}
              value={causedBy}
              onChange={(e) => setCausedBy(e.target.value)}
            >
              <option>--select---</option>
              {createTask.causedBy.map((item: string) => (
                <option value={item}>{item}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <InputGroup.Text>Save As Library Task</InputGroup.Text>
          </InputGroup>

          <Button onClick={props.onHide} variant="secondary">
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalAddTask;
