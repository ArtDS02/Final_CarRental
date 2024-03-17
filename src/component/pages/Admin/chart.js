import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

function ColumnChart({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map((item, index) => `Item ${index + 1}`),
        datasets: [{
          label: 'Value',
          data: data,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }, [data]);

  return <canvas ref={chartRef} />;
}

export default ColumnChart;
