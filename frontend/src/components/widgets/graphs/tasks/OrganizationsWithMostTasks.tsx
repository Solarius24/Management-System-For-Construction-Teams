import React from "react";
import { Card, CardBody, CardTitle } from "react-bootstrap";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
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
      <CardTitle className="p-4">Organization With Most Tasks</CardTitle>
      <CardBody>
        <BarChart
          layout="vertical"
          width={400}
          height={400}
          data={inputData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 30,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" fontSize={12} />
          <Tooltip />
          <Legend />
          <Bar dataKey="tasks" barSize={20} fill="#413ea0" />
        </BarChart>
      </CardBody>
    </Card>
  );
}

export default OrganizationsWithMostTasks;
