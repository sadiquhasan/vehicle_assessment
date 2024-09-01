import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ElectricVehicleAreaChart = ({dataValue, width, height}) => {
  const [data, setData] = useState([]);
  useEffect(() => processData(dataValue), [dataValue])

  const processData = (data) => {
    const registrationYears = {};

    data.forEach((item) => {
      const year = item["Model Year"] || "Unknown";
      registrationYears[year] = (registrationYears[year] || 0) + 1;
    });

    const processedData = Object.keys(registrationYears).map((year) => ({
      year: year,
      count: registrationYears[year],
    }));

    processedData.sort((a, b) => a.year - b.year);

    setData(processedData);
  };

  return (
    <ResponsiveContainer width={width} height={height}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="count" stroke="#1194d8" fill="#0084d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ElectricVehicleAreaChart;
