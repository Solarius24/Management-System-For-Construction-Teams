import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/reduxHooks";
import { addForm } from "../../redux/slices/formSlice";

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
  const dispatch = useAppDispatch();
  const id = Date.now();
  const navigate = useNavigate();

  //selsect form type from the list and set the id of the selected form type
  function handleSelectFormType(e: any) {
    setSelectFormType(e.target.value);
  }

  function handleSelectForm(e: any) {
    setSelectForm(e.target.value);
  }

  //display list of form templates based on the selected form type (selectFormType)
  function handleSelect() {
    let filtered = props.list.filter((item) => item.type === selectFormType);
    return (
      <div>
        <Form.Label>Form Template</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={handleSelectForm}
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
  function createFormHandler() {
    props.onHide();
    let data = {
      id: `${id}`,
      formTitle: `${selectForm}`,
      documentRef: `${id}`,
      createdDate: `${new Date().toLocaleString()}`,
      status: "OPEN",
      formType: `${selectFormType}`,
      details: " ",
      location: "   ",
      expiryDate: " ",
      signatureDate: "",
      signature: "",
    };
    dispatch(addForm(data));
    navigate(`/forms/edit/${id}`);
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
            <option value={item.type} key={item.id}>
              {item.type}
            </option>
          ))}
        </Form.Select>

        {selectFormType && handleSelect()}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={createFormHandler} variant="primary">
          CREATE FORM
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAddForm;
