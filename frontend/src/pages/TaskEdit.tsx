import TaskTemplate from "../components/task/TaskTemplate";
import { useAppSelector } from "../redux/reduxHooks";
import { useParams } from "react-router-dom";

const TaskEdit = () => {
  const data = useAppSelector((state) => state.task.data);
  let { taskRef } = useParams();
  let taskData = data.filter((item) => item.taskRef === taskRef);
  return (
    <>
      <TaskTemplate taskData={taskData} />
    </>
  );
};
export default TaskEdit;
