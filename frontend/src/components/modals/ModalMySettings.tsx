import { Button, Form, Modal } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  forename?: string;
  surname?: string;
  loginName: string;
  organisation: string;
  email: string;
  jobTitle: string;
  telephone: string;
};

const ModalMySettings = (props: any) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          My Settings
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Forename</Form.Label>

            <Form.Control
              {...register("forename", { required: false })}
              as="input"
              type="text"
              aria-invalid={errors.forename ? "true" : "false"}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Surname</Form.Label>

            <Form.Control
              {...register("surname", { required: false })}
              as="input"
              type="text"
              aria-invalid={errors.forename ? "true" : "false"}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Login Name</Form.Label>

            <Form.Control
              {...register("loginName", { required: false })}
              as="input"
              type="text"
              aria-invalid={errors.loginName ? "true" : "false"}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Organisation</Form.Label>

            <Form.Control
              {...register("organisation", { required: false })}
              as="input"
              type="text"
              aria-invalid={errors.organisation ? "true" : "false"}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              {...register("email", { required: false })}
              as="input"
              type="text"
              aria-invalid={errors.email ? "true" : "false"}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Job Title</Form.Label>

            <Form.Control
              {...register("jobTitle", { required: false })}
              as="input"
              type="text"
              aria-invalid={errors.jobTitle ? "true" : "false"}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Mobile Phone</Form.Label>

            <Form.Control
              {...register("telephone", { required: false })}
              as="input"
              type="text"
              aria-invalid={errors.telephone ? "true" : "false"}
            />
          </Form.Group>

          <Button variant="primary">Save</Button>
          <Button onClick={props.onHide} variant="secondary" type="submit">
            Cancel
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalMySettings;
