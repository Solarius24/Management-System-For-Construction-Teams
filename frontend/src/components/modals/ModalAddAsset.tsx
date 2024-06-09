import { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../redux/reduxHooks";
import { addAsset } from "../../redux/slices/assetsSlice";

interface ModalAddConfig {
  id?: string;
  show: boolean;
  onHide: () => void;
}
const ModalAddAsset = (props: ModalAddConfig) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm();

  const dispatch = useAppDispatch();

  function onSubmitAsset(data: any) {
    dispatch(addAsset([data, props.id]));
    props.onHide();
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>ADD ASSET</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmitAsset)}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>ASSET NAME</Form.Label>
            {errors.itemName?.type === "required" && (
              <p className="text-danger" role="alert">
                Asset Name is required
              </p>
            )}
            <Form.Control
              as="textarea"
              type="text"
              {...register("itemName", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>ASSET DESCRIPTION</Form.Label>
            {errors.itemDescription?.type === "required" && (
              <p className="text-danger" role="alert">
                Asset description is required
              </p>
            )}
            <Form.Control
              {...register("itemDescription", { required: true })}
              as="textarea"
              type="text"
              aria-invalid={errors.description ? "true" : "false"}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>NUMBER OF ITEMS</Form.Label>
            {errors.itemQuantity?.type === "required" && (
              <p className="text-danger" role="alert">
                Number of items is required
              </p>
            )}
            <Form.Control
              {...register("itemQuantity", { required: true })}
              as="input"
              type="number"
              aria-invalid={errors.description ? "true" : "false"}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>ASSET LOCATION</Form.Label>
            {errors.itemLocation?.type === "required" && (
              <p className="text-danger" role="alert">
                Asset location is required
              </p>
            )}
            <Form.Control
              {...register("itemLocation", { required: true })}
              as="textarea"
              type="text"
              aria-invalid={errors.description ? "true" : "false"}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            SAVE
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalAddAsset;
