import { Card, CardBody, CardTitle } from "react-bootstrap";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    name: "OPEN",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "IN PROGRESS",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "CLOSED",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "TOTAL",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];

const TinyBarChart = () => {
  return (
    <Card style={{maxWidth:"50%"}}>
      <CardTitle>Forms By Form Status</CardTitle>
      <CardBody>
        <BarChart width={500} height={200} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </CardBody>
    </Card>
  );
};
export default TinyBarChart;
