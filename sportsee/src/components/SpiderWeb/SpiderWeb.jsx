import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import './SpiderWeb.css';
import { fetchPerformanceData } from '../../api';

const SpiderWeb = ({ id }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchPerformanceData(id, 'performance')
      .then(newChartData => {
        setChartData(newChartData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const series = [
    {
      name: 'Performance',
      data: chartData.map(item => item.A),
    },
  ];

  const options = {
    chart: {
      type: 'radar',
      toolbar: {
      show: false, // Désactiver la barre d'outils
    },
    },
    title: {
      text: undefined, // Vous pouvez ajouter un titre ici si vous en avez besoin
    },
    xaxis: {
      categories: chartData.map(item => item.subject),
    },
    yaxis: {
      min: 0,
      max: 250,
      tickAmount: 5,
    },
    responsive: [
      {
        breakpoint: 1200,
        options: {
          chart: {
            width: '100%',
            height: '260rem',
          },
        },
      },
    ],
  };

  return (
    <div className="spider">
      <div className="pos">
        <Chart options={options} series={series} type="radar" width="100%" height="260rem" />
</div>
    </div>
  );
};

export default SpiderWeb;
