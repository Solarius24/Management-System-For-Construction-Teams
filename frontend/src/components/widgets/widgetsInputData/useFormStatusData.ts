import { useAppSelector } from "../../../redux/reduxHooks";

//FORM STATUS DATA
export const useFormStatusData = () => {
  const formData = useAppSelector((state) => state.form.data);
  const statusDataOpen = formData.filter((item: any) => item.status === "OPEN");
  const statusDataInProgress = formData.filter(
    (item: any) => item.status === "IN PROGRESS"
  );
  const statusDataCompleted = formData.filter(
    (item: any) => item.status === "COMPLETED AND SIGNED OFF"
  );
  const statusData = [
    { name: "OPEN", value: statusDataOpen.length },
    { name: "IN PROGRESS", value: statusDataInProgress.length },
    { name: "CLOSED", value: statusDataCompleted.length },
  ];
  return statusData;
};
