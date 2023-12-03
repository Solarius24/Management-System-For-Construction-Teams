import { useState, useId } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import formsList from "../../configData/formsConfig/formsList";
import { useNavigate } from "react-router-dom";

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
const ModalAddForm = (props: ModalAddConfig) => {
  const [selectFormType, setSelectFormType] = useState("");
  const [selectForm, setSelectForm] = useState("");
let formRef = Math.random()
  const navigate = useNavigate();

  //selsect form type from the list and set the id of the selected form type
  function handleSelectFormType(e: any) {
    console.log(e.target.value);
    setSelectFormType(e.target.value);
  }

  function handleSelectForm(e: any) {
    console.log(e.target.value);
    setSelectForm(e.target.value);
  }

  //display list of form templates based on the selected form type (selectFormType)
  function handleSelect() {
    let filtered = props.list.filter((item) => item.id === selectFormType);
    return (
      <div>
        <Form.Label>Form Template</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={handleSelectForm}
        >
          {filtered[0].formTemplate.map((item) => (
            <option value={item.id} key={item.id}>
              {item.title}
            </option>
          ))}
        </Form.Select>
      </div>
    );
  }

  //add new form
  function createFormHandler() {
    props.onHide();
    const filtered = formsList.filter((item) => item.id === selectFormType);
    const form = filtered[0].formTemplate.filter(
      (item) => item.id === selectForm
    )
    localStorage.setItem(`${formRef}`, JSON.stringify({ form }));
    console.log(localStorage.getItem(`${formRef}`))
    navigate(`/forms/edit/${formRef}`);
  }

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Label>Form Type</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={handleSelectFormType}
          value={selectFormType}
        >
          <option value="===select---"></option>
          {props.list.map((item) => (
            <option value={item.id} key={item.id}>
              {item.type}
            </option>
          ))}
        </Form.Select>

        {selectFormType && handleSelect()}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="secondary">
          Close
        </Button>
        <Button onClick={createFormHandler} variant="primary">
          Create Form
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAddForm;
