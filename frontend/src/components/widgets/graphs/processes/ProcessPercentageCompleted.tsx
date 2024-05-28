import React from "react";
import { Card, CardBody, CardTitle } from "react-bootstrap";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { useAppSelector } from "../../../../redux/reduxHooks";

function ProcessPercentageCompleted() {
  const data = useAppSelector((state) => state.processes.data);

  //ARRAY WITH NUMBERS OF STATUS: COMPLETED WINDOWS FOR EVERY LOCATION IN EACH PROCESS
  let statusData = data.map((item) =>
    item.location.map(
      (item) =>
        Object.values(item.locationStatus).filter(
          (item) => item === "COMPLETED"
        ).length
    )
  );
  //ARRAY WITH TOTAL NUMBER OF STATUS:COMPLETED WINDOWS IN EVERY PROCESS
  let totalSum = statusData.map((item) =>
    item.reduce((acc, curr) => acc + curr)
  );

  //ARRAY WITH TOTAL NUMBER OF STATUS WINDOWS IN EVERY LOCATION FOR EVERY PROCESS
  let totalNumberOfStatusWindowsInEveryLocation = data.map((item) =>
    item.location.map((item) => Object.values(item.locationStatus).length)
  );
  console.log(totalNumberOfStatusWindowsInEveryLocation);
  //ARRAY WITH TOTAL NUMBER OF STATUS WINDOWS IN EVERY PROCESS
  let totalNumberOfStatusWindowsInOneProcess =
    totalNumberOfStatusWindowsInEveryLocation.map((item) =>
      item.reduce((acc, curr) => acc + curr)
    );

  let complitionPercentageforEachProcess = [];

  for (let i = 0; i < totalNumberOfStatusWindowsInOneProcess.length; i++) {
    complitionPercentageforEachProcess.push(
      Math.round(
        (totalSum[i] / totalNumberOfStatusWindowsInOneProcess[i]) * 100
      )
    );
  }

  let title = data.map((item) => item.title);

  let inputData = [];

  for (let i = 0; i < title.length; i++) {
    inputData.push({
      name: title[i],
      pv: complitionPercentageforEachProcess[i],
    });
  }

  return (
    <Card>
      <CardTitle className="p-4">Process Percentage Completed</CardTitle>
      <CardBody>
        <BarChart width={500} height={300} data={inputData}>
          <XAxis
            dataKey="name"
            stroke="#8884d8"
            type="category"
            fontSize={12}
          />
          <YAxis
            label={{
              value: "percentage completed %",
              angle: -90,
              position: "insideBottomLeft",
            }}
          />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="pv" fill="#82ca9d" barSize={30} />
        </BarChart>
      </CardBody>
    </Card>
  );
}

export default ProcessPercentageCompleted;
