import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import Dcard from "./Dcard";
import Homepage from "../Homepage/Homepage";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

function Dashboard() {
  return (
    <>
      <Homepage />
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800" style={{ marginLeft: "5px" }}>
          Dashboard
        </h1>
      </div>
      <div className="row">
        <Dcard title="Total Earnings" price="$80,000" color="primary" />
        <Dcard title="Total Equipments" price="60" color="success" />
        <Dcard title="Total Users" price="440" color="info" />
        <Dcard title="Online Users" price="120" color="warning" />
      </div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Doughnut
                data={{
                  labels: ["Red", "Blue", "Yellow"],
                  datasets: [
                    {
                      label: "My First Dataset",
                      data: [300, 50, 100],
                      backgroundColor: [
                        "rgb(255, 99, 132)",
                        "rgb(54, 162, 235)",
                        "rgb(255, 205, 86)",
                      ],
                      hoverOffset: 4,
                    },
                  ],
                }}
              />
            </div>
            <div className="col-lg-8">
              <Line
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "top",
                    },
                    title: {
                      display: true,
                      text: "Chart.js Line Chart",
                    },
                  },
                }}
                data={{
                  labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                  ],
                  datasets: [
                    {
                      label: "My First Dataset",
                      data: [65, 59, 80, 81, 56, 55, 40],
                      fill: false,
                      borderColor: "rgb(75, 192, 192)",
                      tension: 0.1,
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
