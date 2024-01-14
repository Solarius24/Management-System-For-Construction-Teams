import FormTemplate from "../components/forms/FormTemplate";
import { useAppSelector } from "../redux/reduxHooks";
import { useParams } from "react-router-dom";

const FormScheduleEdit = () => {
  const data = useAppSelector((state) => state.form.data);
  let { formRef } = useParams();
  let formData = data.filter((item) => item.documentRef === formRef);

  return (
    <>
      <FormTemplate formRef={formRef} formData={formData} />
    </>
  );
};

export default FormScheduleEdit;
