import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/reduxHooks";
import { addFormSchedule } from "../../redux/slices/formScheduleSlice";
import { useForm } from "react-hook-form";

interface ModalAddConfig {
  show: boolean;
  title: string;
  list: {
    id: string;
    type: string;
    formTemplate: { id: string; title: string }[];
  }[];
  onHide: () => void;
  display?: React.ReactNode;
}
const ModalAddFormSchedule = (props: ModalAddConfig) => {
  const [selectFormScheduleType, setSelectFormScheduleType] = useState("");
  const [selectFormTemplate, setSelectFormTemplate] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [description, setDescription] = useState("");
  const [repeat, setRepeat] = useState("");
  const [issuedByOrganization, setIssuedByOrganization] = useState("");
  const dispatch = useAppDispatch();
  const id = Date.now();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //select form type from the list and set the id of the selected form type
  function handleSelectFormScheduleType(e: any) {
    setSelectFormScheduleType(e.target.value);
  }
  //select Form Template for selected Form Schedule Type
  function handleSelectFormTemplate(e: any) {
    setSelectFormTemplate(e.target.value);
  }

  //display list of form templates based on the selected form type (selectFormScheduleType)
  function handleSelect() {
    let filtered = props.list.filter(
      (item) => item.type === selectFormScheduleType
    );
    return (
      <div>
        <Form.Label>Select a Form Template</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={handleSelectFormTemplate}
        >
          <option value="===select---"></option>
          {filtered[0].formTemplate.map((item) => (
            <option value={item.title} key={item.id}>
              {item.title}
            </option>
          ))}
        </Form.Select>
      </div>
    );
  }

  //add new form
  function createFormScheduleHandler() {
    props.onHide();
    let data = {
      id: id,
      type: selectFormScheduleType,
      template: selectFormTemplate,
      description: description,
      location: location,
      issuedByOrganisation: issuedByOrganization,
      startDate: startDate,
      repeat: repeat,
      issuedBy: "user",
    };
    dispatch(addFormSchedule(data));
  }

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Label>Form Schedule Type</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={handleSelectFormScheduleType}
          value={selectFormScheduleType}
        >
          <option value="===select---"></option>
          {props.list.map((item) => (
            <option value={item.type} key={item.id}>
              {item.type}
            </option>
          ))}
        </Form.Select>

        {selectFormScheduleType && handleSelect()}

        {selectFormTemplate && (
          <>
            <Form.Group>
              <Form.Label column>Description</Form.Label>

              <Form.Control
                {...register("description", { required: true })}
                as="textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label column>Location</Form.Label>

              <Form.Control
                value={location}
                {...register("location", { required: true })}
                as="textarea"
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label column>Issued To Organization</Form.Label>

              <Form.Select
                {...register("issuedToOrganization", { required: true })}
                onChange={(e) => setIssuedByOrganization(e.target.value)}
                aria-label="Default select example"
              >
                <option>{issuedByOrganization}</option>
                <option value="MainContractor">Main Contractor</option>
                <option value="SubContractor">Sub Contractor</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label column>Start Date</Form.Label>

              <Form.Control
                {...register("startDate", { required: true })}
                as="input"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label column>Repeat</Form.Label>

              <Form.Select
                {...register("repeat", { required: true })}
                onChange={(e) => setRepeat(e.target.value)}
                aria-label="Default select example"
              >
                <option>{repeat}</option>
                <option value="NEVER">NEVER</option>
                <option value="WEEKLY">WEEKLY</option>
                <option value="MONTHLY">MONTHLY</option>
              </Form.Select>
            </Form.Group>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="secondary">
          CANCEL
        </Button>
        <Button onClick={createFormScheduleHandler} variant="primary">
          CREATE
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAddFormSchedule;
