import React, { useState, useEffect } from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ComposedChartComponent = ({ dataValue, width, height }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const processedData = dataValue.map((d) => ({
        modelYear: +d["Model Year"],
        electricRange: +d["Electric Range"],
        batteryCapacity: +d["Battery Capacity"],
      }));

      setData(processedData);
    };

    fetchData();
  }, [dataValue]);

  return (
    <ResponsiveContainer width={width} height={height}>
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
          type="number"
          dataKey="modelYear"
          label={{
            value: "Model Year",
            position: "insideBottomRight",
            offset: -10,
          }}
        />
        <YAxis
          yAxisId="left"
          dataKey="electricRange"
          label={{
            value: "Electric Range",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          dataKey="batteryCapacity"
          label={{
            value: "Battery Capacity",
            angle: -90,
            position: "insideRight",
          }}
        />
        <Tooltip />
        <Legend />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="electricRange"
          stroke="#8884d8"
          strokeWidth={2}
          dot={{ r: 4 }}
        />

        <Bar
          yAxisId="right"
          dataKey="batteryCapacity"
          barSize={20}
          fill="#82ca9d"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ComposedChartComponent;
