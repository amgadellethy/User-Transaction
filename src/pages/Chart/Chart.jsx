import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
ChartJS.register({
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
});
export default function Chart() {
  let { id } = useParams();
  console.log(id);

  const data = {
    labels: ["Day", "Day"],
    datasets: [
      {
        label: "Transaction in day",
        data: [0, id],
        backgroundColor: "#4ade80",
        borderColor: "#14532d",
        pointBorderColor: "white",
        fill: true,
        tension: 0.4,
      },
    ],
  };
  const options = {
    plugins: {
      Legend: true,
    },
  };

  return (
    <>
      <div
        style={{
          width: "80%",
          height: "80%",
          marginInline: "auto",
          padding: "10px",
        }}
      >
        <Line data={data} options={options}></Line>
      </div>
    </>
  );
}
