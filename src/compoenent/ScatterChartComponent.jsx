import React, { useState, useEffect } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ScatterChartComponent = ({ dataValue, height, width }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const currentValue = dataValue.map((d) => ({
      modelYear: +d["Model Year"],
      electricRange: +d["Electric Range"],
      batteryCapacity: +d["Battery Capacity"],
    }));

    setData(currentValue);
  }, [dataValue]);

  return (
    <ResponsiveContainer width={width} height={height}>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid />
        <XAxis
          type="number"
          dataKey="modelYear"
          name="Model Year"
          label={{
            value: "Model Year",
            position: "insideBottomRight",
            offset: -10,
          }}
        />
        <YAxis
          type="number"
          dataKey="electricRange"
          name="Electric Range"
          label={{
            value: "Electric Range",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />

        <Scatter
          name="Electric Range vs Model Year"
          data={data}
          fill="#8884d8"
          line
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterChartComponent;
