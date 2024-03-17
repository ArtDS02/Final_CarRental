import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../../../css/adminIndex.css';

// Component ChartWidget để hiển thị tiêu đề và biểu đồ cột
function ChartWidget({ title, amount }) {
  return (
    <div className="col-md-6 col-xl-3 mb-3">
      <div className="widget-rounded-circle card">
        <div style={{borderRadius:"10px"}} className="card-body">
          <div className="row align-items-center">
            <div className="col-6">
              <i className="fa-solid fa-chart-simple fa-xl"></i>
            </div>
            <div className="col-6">
              <div className="text-end">
                <h3 className="text-dark mt-1">
                  {' '}
                  <span data-plugin="counterup">
                    {amount.toLocaleString()}
                  </span>
                </h3>
                <p className="text-muted mb-1 text-truncate">{title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component RevenueWidget chứa hai biểu đồ cột
function RevenueWidget() {
  // Ref để truy cập vào phần tử canvas của biểu đồ
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // Effect để vẽ biểu đồ cột khi component được render hoặc dữ liệu thay đổi
  useEffect(() => {
    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }

    // Dữ liệu ngẫu nhiên cho biểu đồ
    const data = [42.02, 32.059, 35.20, 50.273];

    // Tạo biểu đồ cột
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [{
          label: 'Value',
          data: data,
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Hủy biểu đồ khi component bị hủy
    return () => {
      chartInstance.current.destroy();
    };
  }, []);

  return (
    <div className="content-admin">
      <div style={{maxWidth:"100%", paddingLeft:"20px"}} className="row">
        <ChartWidget title="Total income" amount={50.273} />
        <ChartWidget title="Total request" amount={3} />
        <ChartWidget title="Count User" amount={3} />
        <ChartWidget title="Count Product" amount={9} />
      </div>
      {/* Thẻ canvas để vẽ biểu đồ */}
      <canvas style={{backgroundColor:"white", maxHeight:"580px", maxWidth:"99%"}} ref={chartRef}></canvas>
    </div>
  );
}

export default RevenueWidget;
