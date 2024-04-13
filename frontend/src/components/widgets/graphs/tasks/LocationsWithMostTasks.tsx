import { Card, CardBody, CardTitle } from "react-bootstrap";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useAppSelector } from "../../../../redux/reduxHooks";

function LocationsWithMostTasks() {
  const data = useAppSelector((state) => state.task.data);
  const location = data.map((item) => item.location);

  const groundFloor = location.filter((item) => item === "GROUND FLOOR LEVEL");
  const intermedial = location.filter((item) => item === "INTERMEDIAL LEVEL");
  const basement = location.filter((item) => item === "BASEMENT LEVEL");

  const inputData = [
    { name: "GROUND FLOOR LEVEL", tasks: groundFloor.length },
    { name: "INTERMEDIAL LEVEL", tasks: intermedial.length },
    { name: "BASEMENT LEVEL", tasks: basement.length },
  ];

  return (
    <Card>
      <CardTitle className="p-4">Locations With Most Tasks</CardTitle>
      <CardBody>
        <ComposedChart
          layout="vertical"
          width={400}
          height={400}
          data={inputData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" fontSize={12} />
          <Tooltip />
          <Legend />
          <Bar dataKey="tasks" barSize={20} fill="#413ea0" />
        </ComposedChart>
      </CardBody>
    </Card>
  );
}

export default LocationsWithMostTasks;
