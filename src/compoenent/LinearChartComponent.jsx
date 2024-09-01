import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LinearChartComponent = ({ dataValue, width, height }) => {
  const [data, setData] = useState([]);
  // useEffect(() => setData(dataValue), [dataValue])

  useEffect(() => {
    const formattedData = dataValue.map((row) => ({
      ...row,
      "Model Year": +row["Model Year"],
      "Electric Range": +row["Electric Range"],
    }));
    setData(formattedData);
  }, [dataValue]);

  return (
    <ResponsiveContainer width={width} height={height}>
      <BarChart
        data={data.splice(0, 20)}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Model Year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Electric Range" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default LinearChartComponent;
