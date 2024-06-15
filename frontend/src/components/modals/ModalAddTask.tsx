import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Form,
  FormControl,
  FormLabel,
  InputGroup,
  Modal,
} from "react-bootstrap";
import createTask from "../task/tasksConfig/createTask";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../redux/reduxHooks";
import { updateTask, addTask } from "../../redux/slices/taskSlice";

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
  const dispatch = useAppDispatch();
  const id = String(Date.now());

  function onSubmitTask(data: any) {
    data.id = id;
    data.taskRef = id;
    dispatch(addTask(data));
    props.onHide();
  }

  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>ADD TASK</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmitTask)}>
          <FormLabel>Task Ref Number: {id} </FormLabel>
          <Form.Group>
            <Form.Label>Task Type</Form.Label>
            {errors.taskType?.type === "required" && (
              <p className="text-danger" role="alert">
                Task type is required
              </p>
            )}
            <Form.Select
              aria-label="Default select example"
              {...register("taskType", { required: true })}
            >
              <option></option>
              {props.list.map((item) => (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Description</Form.Label>
            {errors.description?.type === "required" && (
              <p className="text-danger" role="alert">
                Description is required
              </p>
            )}
            <Form.Control
              {...register("description", { required: true })}
              as="textarea"
              type="text"
              aria-invalid={errors.description ? "true" : "false"}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Location</Form.Label>
            {errors.location?.type === "required" && (
              <p className="text-danger" role="alert">
                Location is required
              </p>
            )}
            <Form.Select
              {...register("location", { required: true })}
              aria-label="Default select example"
            >
              <option></option>
              <option value="GROUND FLOOR LEVEL">GROUND FLOOR LEVEL</option>
              <option value="INTERMEDIATE LEVEL">INTERMEDIATE LEVEL</option>
              <option value="BASEMENT LEVEL">BASEMENT LEVEL</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Status</Form.Label>
            {errors.status?.type === "required" && (
              <p className="text-danger" role="alert">
                Status is required
              </p>
            )}
            <Form.Select
              disabled
              aria-label="Default select example"
              {...register("taskStatus")}
            >
              <option value="OPEN">OPEN</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Status Change Comments</Form.Label>
            {errors.statusChangeComments?.type === "required" && (
              <p className="text-danger" role="alert">
                Status Change Comments is required
              </p>
            )}
            <Form.Control
              as="textarea"
              type="text"
              {...register("statusChangeComments", { required: true })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Package</Form.Label>
            {errors.package?.type === "required" && (
              <p className="text-danger" role="alert">
                Package is required
              </p>
            )}
            <Form.Select
              aria-label="Default select example"
              {...register("contractPackage", { required: true })}
            >
              <option></option>
              {createTask.contractPackage.map((item: any) => (
                <option value={item}>{item}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Target Date</Form.Label>
            {errors.targetDate?.type === "required" && (
              <p className="text-danger" role="alert">
                Target date is required
              </p>
            )}
            <FormControl
              type="date"
              {...register("targetDate", { required: true })}
            ></FormControl>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Issued To Organisation</Form.Label>
            {errors.issuedToOrganisation?.type === "required" && (
              <p className="text-danger" role="alert">
                Issued To Organisation is required
              </p>
            )}
            <Form.Select
              aria-label="Default select example"
              {...register("issuedToOrganisation", { required: true })}
            >
              <option></option>
              {createTask.issuedToOrganisation.map((item: any) => (
                <option value={item}>{item}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Issued By User</Form.Label>
            {errors.issuedByUser?.type === "required" && (
              <p className="text-danger" role="alert">
                Issued By User is required
              </p>
            )}
            <Form.Select
              aria-label="Default select example"
              {...register("issuedByUser", { required: true })}
            >
              <option></option>
              {createTask.issuedByUser.map((item: any) => (
                <option value={item}>{item}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Cause</Form.Label>
            {errors.cause?.type === "required" && (
              <p className="text-danger" role="alert">
                Cause is required
              </p>
            )}
            <Form.Select
              aria-label="Default select example"
              {...register("cause", { required: true })}
            >
              <option></option>
              {createTask.cause.map((item: string) => (
                <option value={item}>{item}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Caused By</Form.Label>
            {errors.causedBy?.type === "required" && (
              <p className="text-danger" role="alert">
                Caused by is required
              </p>
            )}
            <Form.Select
              aria-label="Default select example"
              {...register("causedBy", { required: true })}
            >
              <option></option>
              {createTask.causedBy.map((item: string) => (
                <option value={item}>{item}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <div className=" d-flex justify-content-end gap-3">
            <Button onClick={props.onHide} variant="secondary">
              CLOSE
            </Button>
            <Button variant="primary" type="submit">
              SAVE
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalAddTask;
