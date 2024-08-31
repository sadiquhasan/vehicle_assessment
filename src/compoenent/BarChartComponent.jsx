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
import {dataddress} from '../utils/contants';

const BarChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    d3.csv(dataddress)
      .then((csvData) => {
        const formattedData = csvData.map((row) => ({
          ...row,
          "Model Year": +row["Model Year"],
          "Electric Range": +row["Electric Range"],
        }));
        setData(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching the CSV data:", error);
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data.splice(0,20)}
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
