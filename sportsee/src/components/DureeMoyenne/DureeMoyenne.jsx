import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import './DureeMoyenne.css';
import { fetchAverageSessions } from '../../api';

const DureeMoyenne = ({ id }) => {
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

  const convertToDayOfWeek = (name) => {
  const dayMapping = {
    "jour 1": "L",
    "jour 2": "M",
    "jour 3": "M",
    "jour 4": "J",
    "jour 5": "V",
    "jour 6": "S",
    "jour 7": "D",
  };
  return dayMapping[name] || name;
};

  const options = {
    colors: ['#ffffff'],
    chart: {
      type: 'line',
      toolbar: {
        show: false, // Désactiver les icônes de navigation
      },
    },
    grid: {
      show: false, // Ne pas afficher la grille
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: 'category',
      categories: chartData.map((data) => convertToDayOfWeek(data.name)), // Utiliser la fonction de conversion pour les noms
      labels: {
        style: {
          colors: '#ffffff',
        },
      },
      axisBorder: {
        show: false, // Ne pas afficher les bordures de l'axe
      },
      axisTicks: {
        show: false, // Ne pas afficher les marques de graduation
      },
    },
    yaxis: {
      labels: {
        show: false, // Ne pas afficher les étiquettes de l'axe y
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      enabled: false, // Désactiver la bulle d'aide
    },
    stroke: {
      curve: 'smooth',
    },
    markers: {
      size: 0,
      hover: {
        size: 8,
      },
    },
    responsive: [
      {
        breakpoint: 1200, // Définir un point de rupture pour rendre le graphique responsive
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

export default DureeMoyenne;
