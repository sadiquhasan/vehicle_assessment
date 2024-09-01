import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import * as d3 from "d3";

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
}) => {
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

const PieChartData = ({ dataValue, width, height }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const processedData = d3
      .rollups(
        dataValue,
        (v) => v.length,
        (d) => d["Make"]
      )
      .map(([name, value]) => ({ name, value }));

    setData(processedData);
    console.log("processedData", processedData);
  }, []);
  return (
    <ResponsiveContainer width={width} height={height}>
      <PieChart width={"100%"} height={"100%"}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ ...props }) =>
            renderCustomizedLabel({ ...props, name: data[props.index].name })
          }
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartData;
