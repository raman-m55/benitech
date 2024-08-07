'use client';
import React, { useState } from 'react';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { Data } from './chartData';
import {  Line } from 'react-chartjs-2';

Chart.register(CategoryScale);

function ChartSection() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.month),
    datasets: [
      {
        label: 'فروش ',
        data: Data.map((data) => data.userGain),
        backgroundColor: ['rgba(114, 142, 252,0.3)'],
        fill:true,
        borderColor: '#3a62ff',
        borderWidth: 2,
        borderRadius: 5,
        opacity:0.1,
      },
    ],
  });

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
}

export default ChartSection;
