import { Card, CardBody, CardTitle } from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useAppSelector } from "../../../../redux/reduxHooks";

export default function FormStatus() {
  const formData = useAppSelector((state) => state.form.data);
  const data = formData.map((item) => {
    return { formTitle: item.formTitle, formStatus: item.status };
  });

  let newData = [];
  for (let i = 0; i < data.length; i++) {
    let openStatus = 0;
    let progress = 0;
    let closed = 0;

    for (let j = 0; j < data.length; j++) {
      if (data[i].formTitle === data[j].formTitle) {
        if (data[j].formStatus === "OPEN") {
          openStatus += 1;
        } else if (data[j].formStatus === "CLOSED") {
          closed += 1;
        } else if (data[j].formStatus === "IN PROGRESS") {
          progress += 1;
        }
      } else {
      }
    }

    newData.push({
      name: data[i].formTitle,
      OPEN: openStatus,
      CLOSED: closed,
      PROGRESS: progress,
    });
  }

  const uniqueForms = newData.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.name === value.name)
  );

  return (
    <Card className="border-0">
      <CardTitle className="p-4">Form Status</CardTitle>
      <CardBody>
        <BarChart
          width={500}
          height={400}
          data={uniqueForms}
          margin={{
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="name"
            angle={270}
            dy={30}
            height={100}
            fontSize={10}
          />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Bar dataKey="OPEN" stackId="a" fill="#8884d8" />
          <Bar dataKey="PROGRESS" stackId="a" fill="#82ca9d" />
          <Bar dataKey="CLOSED" stackId="a" fill="#82ca9d" />
        </BarChart>
      </CardBody>
    </Card>
  );
}
