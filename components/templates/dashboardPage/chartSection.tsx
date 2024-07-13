'use client'
import React, { useState } from "react";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Data } from "./chartData";
import { Bar, Line, Pie } from "react-chartjs-2";

Chart.register(CategoryScale);

function ChartSection() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.month),
    datasets: [
      {
        label: "فروش ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "#3a62ff",
        ],
        borderWidth: 0,
        borderRadius:5,
      },
    ],
  });

  return (
    <div>
      <Bar
        data={chartData}
        options={{
          plugins: {
            
          },
        }}
      />
    </div>
  );
}

export default ChartSection;
