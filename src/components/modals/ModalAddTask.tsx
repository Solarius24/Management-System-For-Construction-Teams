import { useState } from "react";
import { Button, Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import createTask from "../../configData/tasksConfig/createTask";

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
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedForm, setSelectedForm] = useState("");

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Label>Task Type</Form.Label>
        <Form.Select aria-label="Default select example" value={selectedValue}>
          {props.list.map((item) => (
            <option value={item.name} key={item.id}>
              {item.name}
            </option>
          ))}
        </Form.Select>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Location</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>--select---</option>
            {createTask.location.map((item:any) => (
              <option
                value={item}
                // onChange={() => setTask(item.name)}
                // key={item.id}
              >
                {item}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Status</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>--select---</option>
            {createTask.status.map((item:any) => (
              <option
                value={item}
                // onChange={() => setTask(item.name)}
                // key={item.id}
              >
                {item}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Status Change Comments</Form.Label>
          <Form.Control as="textarea" type="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Package</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>--select---</option>
            {createTask.package.map((item:any) => (
              <option
                value={item}
                // onChange={() => setTask(item.name)}
                // key={item.id}
              >
                {item}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Target Date</Form.Label>
          <FormControl type="date"></FormControl>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Issued To Organisation</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>--select---</option>
            {createTask.issuedToOrganisation.map((item:any) => (
              <option
                value={item}
                // onChange={() => setTask(item.name)}
                // key={item.id}
              >
                {item}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Issued By User</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>--select---</option>
            {createTask.issuedByUser.map((item:any) => (
              <option
                value={item}
                // onChange={() => setTask(item.name)}
                // key={item.id}
              >
                {item}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Cause</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>--select---</option>
            {createTask.cause.map((item:string) => (
              <option
                value={item}
                // onChange={() => setTask(item.name)}
                // key={item.id}
              >
                {item}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Caused By</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>--select---</option>
            {createTask.causedBy.map((item:string) => (
              <option
                value={item}
                // onChange={() => setTask(item.name)}
                // key={item.id}
              >
                {item}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <InputGroup className="mb-3">
          <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          <InputGroup.Text>Save As Library Task</InputGroup.Text>
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="secondary">
          Close
        </Button>
        <Button onClick={props.onHide} variant="primary">
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAddTask;
