import FormScheduleTemplate from "../components/forms/FormScheduleTemplate";
import { useAppSelector } from "../redux/reduxHooks";
import { useParams } from "react-router-dom";

const FormScheduleEdit = () => {
  const data = useAppSelector((state) => state.formSchedule.data);
  let { formRef } = useParams();
  let formScheduleData = data.filter((item) => item.id === formRef);
  console.log("formScheduleData", formScheduleData);
  return (
    <>
      <FormScheduleTemplate formScheduleData={formScheduleData} />
    </>
  );
};

export default FormScheduleEdit;
