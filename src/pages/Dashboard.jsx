import React, { useEffect, useRef } from 'react';
import '../styles/Dashboard.css'; // Optional: CSS for styling

let chartInstance = null;

const Dashboard = () => {
  const lineChartRef = useRef(null);

  useEffect(() => {
    if (window.Chart && lineChartRef.current) {
      if (chartInstance) {
        chartInstance.destroy(); // destroy previous chart
      }

      chartInstance = new window.Chart(lineChartRef.current, {
        type: 'line',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [
            {
              label: 'User',
              data: [200, 400, 350, 250],
              borderColor: 'green',
              tension: 0.4,
            },
            {
              label: 'Guest',
              data: [150, 300, 450, 500],
              borderColor: 'red',
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
          },
        },
      });
    }
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="cards-container">
        <div className="card green">💰 Total Revenue<br /><b>₹35,28,990</b></div>
        <div className="card yellow">💳 Total Transactions<br /><b>245</b></div>
        <div className="card pink">👍 Total Likes<br /><b>11,810</b></div>
        <div className="card blue">👥 Total Users<br /><b>892</b></div>
      </div>

      <div className="chart-container">
        <h3>Activities (May - June 2024)</h3>
        <canvas ref={lineChartRef}  width="500" height="200" />
      </div>
    </div>
  );
};

export default Dashboard;
