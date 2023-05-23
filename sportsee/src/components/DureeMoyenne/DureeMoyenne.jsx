import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import './DureeMoyenne.css';

import PropTypes from 'prop-types';


/**
 * Composant DureeMoyenne affichant un graphique de la durée moyenne des sessions par jour de la semaine.
 * @param {Object} props - Les props passés au composant.
 * @param {string} props.id - L'ID de l'utilisateur.
 * @returns {JSX.Element} - Le composant DureeMoyenne.
 * @example
 * <DureeMoyenne id="123456"/>
 */
const DureeMoyenne = ({ id , fetchAverageSessions}) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchAverageSessions(id, 'average-sessions')
      .then((newChartData) => {
        setChartData(newChartData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);



  const options = {
    colors: ['#ffffff'],
    chart: {
      type: 'line',
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: 'category',
      categories: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
      labels: {
        style: {
          colors: '#ffffff',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    markers: {
      size: 0,
      hover: {
        size: 8,
      },
    },
    responsive: [
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 150,
            width: 190
          },
        },
      },
    ],
  };

  const series = [
    {
      name: 'Durée moyenne',
      data: chartData.map((data) => data.sessionLength),
    },
  ];

  return (
    <div className="fond">
      <div className="line">
        <Chart
          options={options}
          series={series}
          type="line"
          width="100%"
          height={150}
        />
      </div>
    </div>
  );
};

DureeMoyenne.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DureeMoyenne;
