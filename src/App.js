import React, { useEffect, useState } from "react";
import "./App.css";
import { dataddress } from "./utils/contants";
import * as d3 from "d3";
import Loading from "./utils/Loading";
import ComposedChartComponent from "./compoenent/ComposedChartComponent";
import BarChartComponent from "./compoenent/BarChartComponent";
import AreaChartComponent from "./compoenent/AreaChartComponent";
import LinearChartComponent from "./compoenent/LinearChartComponent";
import PieChartData from "./compoenent/PieChartData";
import ScatterChartComponent from "./compoenent/ScatterChartComponent";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      d3.csv(dataddress).then((data) => {
        setData(data.slice(20, 60));
        setLoading(false);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="App">
      <div className="container p-5">
        <h3>Vehicle Data Analysis</h3>
        <hr className="bg-secondary my-4" />
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-8">
            <BarChartComponent dataValue={data} width="100%" height={400} />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            <PieChartData dataValue={data} width="100%" height={400} />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            <ScatterChartComponent dataValue={data} width="100%" height={400} />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-8">
            <LinearChartComponent dataValue={data} width="100%" height={400} />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-9">
            <ComposedChartComponent
              dataValue={data}
              width="100%"
              height={400}
            />
          </div>
          <div className="col-12">
            <AreaChartComponent dataValue={data} width="100%" height={400} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
