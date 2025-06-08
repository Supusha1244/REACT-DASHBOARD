import React, { useEffect, useRef } from 'react';

const Charts = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'Users',
          data: [400, 300, 500, 600],
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.4
        }]
      }
    });
  }, []);

  return (
    <div className="page">
      <h1>User Growth</h1>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Charts;
