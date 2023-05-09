import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { fetchActivity } from '../../api';
import './ActiviteQuotidienne.css';

const ActiviteQuotidienne = ({ id }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchActivity(id, 'activity') // appel à fetchActivity avec l'ID de l'utilisateur
      .then(newChartData => {
        setChartData(newChartData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const options = {
    chart: {
      type: 'bar',
      height: 450,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '20%',
         barWidth: '60%',
      },
    },
    xaxis: {
      categories: chartData.map(data => data.name),
    },
    yaxis: {
      opposite: true,
    },
    tooltip: {
      enabled: true,
    },
    colors: ['#EB0018', '#000000'],
    legend: {
      position: 'top',
      horizontalAlign: 'right',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: '100%',
            height: 450,
          },
          xaxis: {
            labels: {
              show: false,
            },
          },
          yaxis: {
            labels: {
              show: false,
            },
          },
        },
      },
    ],
  };

  const series = [
    {
      name: 'Calories',
      data: chartData.map(data => data.calories),
    },
    {
      name: 'Poids',
      data: chartData.map(data => data.poid),
    },
  ];

  return (

      <div className="Act">
        <p className="activite">Activité quotidienne</p>
        <div id="chart" className="chart-container">
          <Chart
            options={options}
            series={series}
            type="bar"
            height="250rem"
            width="100%"
          />
        </div>
      </div>

  );
};

export default ActiviteQuotidienne;
