import React from "react";
import "./App.css";
import BarChart from "./compoenent/BarChartComponent";
import LinearChart from "./compoenent/LinearChartComponent";

function App() {
  return (
    <div className="App">
      <div className="container bg-light p-5">
        <h3>Vehicle Data Analysis</h3>
        <hr className="bg-secondary my-4" />
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-4">
            <BarChart />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4">
            <BarChart />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4">
            <LinearChart />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4">
            <LinearChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
