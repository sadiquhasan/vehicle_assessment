import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartComponent = ({ dataValue, width, height }) => {
  const [data, setData] = useState([]);
  useEffect(() => setData(dataValue), [dataValue])

  useEffect(() => {
    const formattedData = data.map((row) => ({
      ...row,
      "Model Year": +row["Model Year"],
      "Electric Range": +row["Electric Range"],
    }));
    setData(formattedData);
  }, []);

  return (
  
    <ResponsiveContainer width={width} height={height}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Make" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Electric Range" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
