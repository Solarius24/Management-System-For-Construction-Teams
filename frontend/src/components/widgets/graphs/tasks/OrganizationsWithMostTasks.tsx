import React from "react";
import { Card, CardBody, CardTitle, Tooltip } from "react-bootstrap";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  XAxis,
  YAxis,
} from "recharts";
import { useAppSelector } from "../../../../redux/reduxHooks";

function OrganizationsWithMostTasks() {
  const data = useAppSelector((state) => state.task.data);
  const organizationList = data.map((item) => item.issuedToOrganisation);

  const mainContractorTasks = organizationList.filter(
    (item) => item === "Main Contractor"
  );
  const subContractorTasks = organizationList.filter(
    (item) => item === "Subcontractor"
  );

  const inputData = [
    { name: "MAIN CONTRACTOR", tasks: mainContractorTasks.length },
    { name: "SUB CONTRACTOR", tasks: subContractorTasks.length },
  ];

  return (
    <Card>
      <CardTitle className="p-4">Locations With Most Tasks</CardTitle>
      <CardBody>
        <ComposedChart
          layout="vertical"
          width={500}
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
          <YAxis dataKey="name" type="category" fontSize={8} />
          <Tooltip />
          <Legend />
          <Bar dataKey="tasks" barSize={20} fill="#413ea0" />
        </ComposedChart>
      </CardBody>
    </Card>
  );
}

export default OrganizationsWithMostTasks;
