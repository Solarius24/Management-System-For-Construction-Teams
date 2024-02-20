import { Card, CardBody, CardTitle } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { PieChart, Pie, Cell, Legend } from "recharts";

// const data = [
//   { name: "OPEN", value: 400 },
//   { name: "IN PROGRESS", value: 300 },
//   { name: "CLOSED AND SIGNED OFF", value: 300 },
// ];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const PieChartWithCustomLabels = (props: any) => {
  const data = props.data;
  return (
    <Card>
      <CardTitle>{props.widgetName}</CardTitle>
      <CardBody>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={250}
            cy={250}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={140}
            fill="#8884d8"
            dataKey="value"
          >
            {data &&
              data.map((entry: any, index: number) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
          </Pie>
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="top"
            align="right"
          />
        </PieChart>
      </CardBody>
    </Card>
  );
};

export default PieChartWithCustomLabels;
