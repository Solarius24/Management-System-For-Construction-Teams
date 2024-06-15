import { eachMonthOfInterval } from "date-fns";
import { Card, CardBody, CardTitle } from "react-bootstrap";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { useAppSelector } from "../../../../redux/reduxHooks";

export default function FormStatusByMonth() {
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
  const listOfMonths = eachMonthOfInterval({
    start: new Date(minDateRange),
    end: new Date(maxDateRange),
  });

  //check if form created data is equal to month:

  const inputData = listOfMonths.map((item) => {
    let month = item.toLocaleString("default", { month: "long" });
    let year = item.getFullYear();
    return {
      name: `${month} ${year}`,
      OPEN: "",
      CLOSED: "",
      PROGRESS: "",
    };
  });

  for (let x = 0; x < inputData.length; x++) {
    let open = 0;
    let closed = 0;
    let progress = 0;
    for (let y = 0; y < newData.length; y++) {
      let month = newData[y].createdDate.toLocaleString("default", {
        month: "long",
      });
      let year = newData[y].createdDate.getFullYear();
      if (inputData[x].name === `${month} ${year}`) {
        if (newData[y].formStatus === "OPEN") {
          open += 1;
        } else if (newData[y].formStatus === "COMPLETED AND SIGNED OFF") {
          closed += 1;
        } else if (newData[y].formStatus === "IN PROGRESS") {
          progress += 1;
        }
      }
      inputData[x].OPEN = String(open);
      inputData[x].CLOSED = String(closed);
      inputData[x].PROGRESS = String(progress);
    }
  }

  return (
    <Card className="border-0">
      <CardTitle className="p-4">Form Status By Month</CardTitle>
      <CardBody>
        <BarChart
          width={500}
          height={400}
          data={inputData}
          margin={{
            top: 0,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <YAxis />
          <Tooltip />
          <Bar dataKey="OPEN" stackId="a" fill="#8884d8" />
          <Bar dataKey="PROGRESS" stackId="a" fill="#82ca9d" />
          <Bar dataKey="CLOSED" stackId="a" fill="#82ca9d" />
          <XAxis
            dataKey="name"
            fontSize={10}
            height={80}
            tickMargin={10}
            angle={-90}
            dy={33}
          />
        </BarChart>
      </CardBody>
    </Card>
  );
}
