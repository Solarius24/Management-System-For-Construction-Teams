import {
  Card,
  CardBody,
  CardGroup,
  CardText,
  CardTitle,
} from "react-bootstrap";
import { useAppSelector } from "../../../../redux/reduxHooks";
import { eachWeekOfInterval } from "date-fns";

function FormsRecentActivity() {
  const formData = useAppSelector((state) => state.form.data);
  const data = formData.map((item) => {
    return {
      formTitle: item.formTitle,
      formStatus: item.status,
      createdDate: item.createdDate.slice(0, 10),
    };
  });
  //change createdDate format to RRRR-MM-DD
  const newData = data.map((item) => {
    let day = item.createdDate.slice(0, 2);
    let month = item.createdDate.slice(3, 5);
    let year = item.createdDate.slice(6, 10);
    return {
      formTitle: item.formTitle,
      formStatus: item.formStatus,
      createdDate: new Date(`${year}-${month}-${day}`),
    };
  });
  //sort forms from oldest to newest
  const sortData = newData.sort(function (a, b) {
    // @ts-ignore
    return new Date(a.createdDate) - new Date(b.createdDate);
  });
  //oldest and newest form
  const minDateRange = sortData[0].createdDate;
  const maxDateRange = sortData[sortData.length - 1].createdDate;
  //list of month between
  const numberOfWeeks = eachWeekOfInterval({
    start: new Date(minDateRange),
    end: new Date(maxDateRange),
  });

  const averageRaisedWeekly =
    Math.round(Number(data.length / numberOfWeeks.length) * 100) / 100;

  const completedForms = data.filter((item) => item.formStatus === "CLOSED");

  const averageCompletedWeekly =
    Math.round(Number(completedForms.length / numberOfWeeks.length) * 100) /
    100;

  const formComplitionEstimate =
    Math.round(Number(1 / averageCompletedWeekly) * 100) / 100;

  return (
    <>
      <Card>
        <CardTitle>FORMS RECENT ACTIVITY</CardTitle>
      </Card>
      <CardGroup>
        <Card>
          <CardTitle style={{ fontSize: "0.8rem", margin: "12px" }}>
            AVERAGE RAISED WEEKLY
          </CardTitle>
          <CardBody
            style={{
              background: "yellow",
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
        <Card>
          <CardTitle style={{ fontSize: "0.8rem", margin: "5px" }}>
            AVERAGE COMPLETED WEEKLY
          </CardTitle>
          <CardBody
            style={{
              background: "lightgreen",
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
            <CardText>FORMS</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardTitle style={{ fontSize: "0.8rem", margin: "5px" }}>
            FORM COMPLITION ESTIMATE
          </CardTitle>
          <CardBody
            style={{
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
              {formComplitionEstimate}
            </CardText>
            <CardText>WEEKS</CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </>
  );
}

export default FormsRecentActivity;
