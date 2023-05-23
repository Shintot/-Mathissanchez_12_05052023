import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types'; // Importer PropTypes depuis 'prop-types'
import './ActiviteQuotidienne.css';
import DataTransform from './DataTransform';


/**
 * Composant pour afficher l'activité quotidienne d'un utilisateur sous forme de graphique.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.id - L'ID de l'utilisateur.
 *
 * @example
 * <ActiviteQuotidienne id="123456789"/>
 *
 * @returns {JSX.Element} Composant pour afficher l'activité quotidienne.
 */
const ActiviteQuotidienne = ({ id , fetchActivity}) => {
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
        borderRadius: 3,
      },
    },
    dataLabels: {
          enabled: false
        },
    stroke: {
          show: true,
          width: 3,
          colors: ['transparent']
        },
    xaxis: {
    categories: DataTransform.transformData(chartData.map(data => data.name)),
  },
    yaxis: {
      opposite: true,
    },
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false
    },
    colors: ['#EB0018', '#000000'],
    legend: {
      position: 'top',
      horizontalAlign: 'right',
    },
    responsive: [
      {
        breakpoint: 1200,
        options: {
         plotOptions: {
        bar: {
          columnWidth: '30%',
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

ActiviteQuotidienne.propTypes = {
  id: PropTypes.string.isRequired, // Ajouter un propTypes pour l'ID en tant que chaîne de caractères requise
};

export default ActiviteQuotidienne;
