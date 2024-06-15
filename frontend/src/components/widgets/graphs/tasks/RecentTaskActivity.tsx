import {
  Card,
  CardBody,
  CardGroup,
  CardText,
  CardTitle,
} from "react-bootstrap";

import { useAppSelector } from "../../../../redux/reduxHooks";
import { eachWeekOfInterval } from "date-fns";

function RecentTaskActivity() {
  const taskData = useAppSelector((state) => state.task.data);

  // const data = taskData.map((item) => {
  //   return {
  //     formTitle: item.formTitle,
  //     formStatus: item.status,
  //     createdDate: item.createdDate.slice(0, 10),
  //   };
  // });
  // //change createdDate format to RRRR-MM-DD
  const newData = taskData.map((item) => {
    let date = item.createdAt.slice(0, 10);
    return date;
  });
  // @ts-ignore
  const sortData = newData.sort(function (a, b) {
    // @ts-ignore
    return new Date(a) - new Date(b);
  });
  //oldest and newest form
  const minDateRange = sortData[0];
  const maxDateRange = sortData[sortData.length - 1];
  //list of month between
  const numberOfWeeks = eachWeekOfInterval({
    start: new Date(minDateRange),
    end: new Date(maxDateRange),
  });

  const averageRaisedWeekly =
    Math.round(Number(taskData.length / numberOfWeeks.length) * 100) / 100;

  const completedForms = taskData.filter(
    (item) => item.taskStatus === "CLOSED"
  );

  const averageCompletedWeekly =
    Math.round(Number(completedForms.length / numberOfWeeks.length) * 100) /
    100;

  let taskComplitionEstimate = 0;
  if (averageCompletedWeekly > 0) {
    taskComplitionEstimate =
      Math.round(Number(1 / averageCompletedWeekly) * 100) / 100;
  }

  return (
    <>
      <Card className="border-0">
        <CardTitle>TASK RECENT ACTIVITY</CardTitle>
      </Card>
      <CardGroup>
        <Card className="border-0">
          <CardTitle style={{ fontSize: "0.8rem", margin: "12px" }}>
            AVERAGE RAISED WEEKLY
          </CardTitle>
          <CardBody
            style={{
              background: "rgb(255, 255, 102)",
              borderRadius: "20%",
              border: " 2px solid  green",
              height: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardText
              style={{
                fontSize: "4rem",
              }}
            >
              {averageRaisedWeekly}
            </CardText>
            <CardText>WEEKS</CardText>
          </CardBody>
        </Card>
        <Card className="border-0">
          <CardTitle style={{ fontSize: "0.8rem", margin: "5px" }}>
            AVERAGE COMPLETED WEEKLY
          </CardTitle>
          <CardBody
            style={{
              background: "rgb(153, 204, 255)",
              borderRadius: "20%",
              border: " 2px solid  green",
              height: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardText
              style={{
                fontSize: "4rem",
              }}
            >
              {averageCompletedWeekly}
            </CardText>
            <CardText>TASKS</CardText>
          </CardBody>
        </Card>
        <Card className="border-0">
          <CardTitle style={{ fontSize: "0.8rem", margin: "5px" }}>
            TASK COMPLITION ESTIMATE
          </CardTitle>
          <CardBody
            style={{
              background: "rgb(102, 255, 51)",
              borderRadius: "20%",
              border: " 2px solid  green",
              height: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardText
              style={{
                fontSize: "4rem",
              }}
            >
              {taskComplitionEstimate}
            </CardText>
            <CardText>WEEKS</CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </>
  );
}

export default RecentTaskActivity;
