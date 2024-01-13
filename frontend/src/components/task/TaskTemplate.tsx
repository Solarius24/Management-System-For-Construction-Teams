import { useState } from "react";
import { Button, Card, Container, Form, FormControl, FormLabel} from "react-bootstrap";
import createTask from "../../configData/tasksConfig/createTask";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../redux/reduxHooks";
import { updateTask} from "../../redux/slices/taskSlice";
import taskList from "../../configData/tasksConfig/tasksList";
import { useNavigate } from "react-router-dom";

interface TaskTemplateData {
  taskData:{
    id:string;
    taskRef: string;
    cause: string;
    causedBy: string;
    description: string;
    issuedByUser: string;
    issuedToOrganisation: string;
    location: string;
    package: string;
    status: string;
    statusChangeComments: string;
    targetDate: string;
    taskType: string;
  }[]


}
const TaskTemplate = (props: TaskTemplateData) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate()


  function onSubmitTask(data:any) {
    data.id = props.taskData[0].id
    dispatch(updateTask(data));
    navigate("/tasks")

  }

  return (
    <Container style={{marginTop:"60px"}} {...props} aria-labelledby="contained-modal-title-vcenter">
        <Card.Title id="contained-modal-title-vcenter">
         EDIT TASK
        </Card.Title>
      <Card.Body>
      <Form onSubmit={handleSubmit(onSubmitTask)}>
          <FormLabel>Task Ref Number: {props.taskData[0].taskRef}  </FormLabel>
        <Form.Group>
        <Form.Label>Task Type</Form.Label>
        {errors.taskType?.type === 'required' && <p className="text-danger" role="alert">Task type is required</p>}
          <Form.Select
            aria-label="Default select example"
            defaultValue={props.taskData[0].taskType}
            // value={taskType}
            {...register("taskType", { required: true })}
            // onChange={(e) => setTaskType(e.target.value)}
          >
             <option></option>
            {taskList.map((item) => (
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Description</Form.Label>
            {errors.description?.type === 'required' && <p className="text-danger" role="alert">Description is required</p>}
            <Form.Control
            defaultValue={props.taskData[0].description}
              {...register("description", { required: true })}
              as="textarea"
              type="text"
              aria-invalid={errors.description ? "true" : "false"} 
              // value={description}
              // onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Location</Form.Label>
            {errors.location?.type === 'required' && <p className="text-danger" role="alert">Location is required</p>}
            <Form.Select
              aria-label="Default select example"
              defaultValue={props.taskData[0].location}
              {...register("location", { required: true })}
              // value={location}
              // onChange={(e) => setLocation(e.target.value)}
            >
              <option></option>
              {createTask.location.map((item: any) => (
                <option value={item}>{item}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Status</Form.Label>
            {errors.status?.type === 'required' && <p className="text-danger" role="alert">Status is required</p>}
            <Form.Select
            defaultValue={props.taskData[0].status}
              aria-label="Default select example"
              {...register("status", { required: true })}
              // value={status}
              // onChange={(e) => setStatus(e.target.value)}
            >
                      {createTask.status.map((item: any) => (
                <option value={item}>{item}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Status Change Comments</Form.Label>
            {errors.statusChangeComments?.type === 'required' && <p className="text-danger" role="alert">Status Change Comments is required</p>}
            <Form.Control
            defaultValue={props.taskData[0].statusChangeComments}
              as="textarea"
              type="text"
              {...register("statusChangeComments", { required: true })}
              // value={statusChangeComments}
              // onChange={(e) => setStatusChangeComments(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Package</Form.Label>
            {errors.package?.type === 'required' && <p className="text-danger" role="alert">Package is required</p>}
            <Form.Select
            defaultValue={props.taskData[0].package}
              aria-label="Default select example"
              {...register("package", { required: true })}
              // value={contractPackage}
              // onChange={(e) => setConstractPackage(e.target.value)}
            >
              <option></option>
              {createTask.package.map((item: any) => (
                <option value={item}>{item}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Target Date</Form.Label>
            {errors.targetDate?.type === 'required' && <p className="text-danger" role="alert">Target date is required</p>}
            <FormControl
            defaultValue={props.taskData[0].targetDate}
              type="date"
              {...register("targetDate", { required:true })}
              // value={targetDate}
              // onChange={(e) => setTargetDate(e.target.value)}
            ></FormControl>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Issued To Organisation</Form.Label>
            {errors.issuedToOrganisation?.type === 'required' && <p className="text-danger" role="alert">Issued To Organisation is required</p>}
            <Form.Select
            defaultValue={props.taskData[0].issuedToOrganisation}
              aria-label="Default select example"
              {...register("issuedToOrganisation", { required: true })}
              // value={issuedToOrganisation}
              // onChange={(e) => setIssuedToOrganisation(e.target.value)}
            >
              <option></option>
              {createTask.issuedToOrganisation.map((item: any) => (
                <option value={item}>{item}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Issued By User</Form.Label>
            {errors.issuedByUser?.type === 'required' && <p className="text-danger" role="alert">Issued By User is required</p>}
            <Form.Select
            defaultValue={props.taskData[0].issuedByUser}
              aria-label="Default select example"
              {...register("issuedByUser", { required: true })}
              // value={issuedByUser}
              // onChange={(e) => setIssuedByUser(e.target.value)}
            >
              <option></option>
              {createTask.issuedByUser.map((item: any) => (
                <option value={item}>{item}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Cause</Form.Label>
            {errors.cause?.type === 'required' && <p className="text-danger" role="alert">Cause is required</p>}
            <Form.Select
            defaultValue={props.taskData[0].cause}
              aria-label="Default select example"
              {...register("cause", { required: true })}
              // value={cause}
              // onChange={(e) => setCause(e.target.value)}
            >
              <option></option>
              {createTask.cause.map((item: string) => (
                <option value={item}>{item}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Caused By</Form.Label>
            {errors.causedBy?.type === 'required' && <p className="text-danger" role="alert">Caused by is required</p>}
            <Form.Select
            defaultValue={props.taskData[0].causedBy}
              aria-label="Default select example"
              {...register("causedBy", { required: true })}
              // value={causedBy}
              // onChange={(e) => setCausedBy(e.target.value)}
            >
              <option></option>
              {createTask.causedBy.map((item: string) => (
                <option value={item}>{item}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Save changes
          </Button>
        </Form>
      </Card.Body>
    </Container>
  );
};

export default TaskTemplate;
