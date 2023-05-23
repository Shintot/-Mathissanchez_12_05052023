import React, {useEffect, useState} from 'react';
import Chart from 'react-apexcharts';

import './Score.css'
import PropTypes from "prop-types";

/**
 * Composant qui affiche un graphique en forme de barre radiale représentant le score de l'utilisateur.
 *
 * @component
 * @param {object} props - Les propriétés du composant.
 * @param {number} props.id - L'identifiant de l'utilisateur.
 * @returns {JSX.Element} - Le composant BasicRadialBarChart.
 *
 * @example
 * <BasicRadialBarChart id={123} />
 */
const BasicRadialBarChart = ({ id,fetchScore}) => {
    const [score, setScore] = useState(0);
    useEffect(() => {
        fetchScore(id) // appel à fetchScoreData avec l'ID de l'utilisateur
            .then(newScore => {
                setScore(newScore * 100); // Convertir la valeur en pourcentage
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    const options = {
        chart: {
            height: 350,
            type: 'radialBar',
        },
        colors: ['#eb0018'],
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%',
                },
                dataLabels: {
                    name: {
                        offsetY: 20,
                        show: true,
                    },
                    value: {
                        offsetY: -20,
                        fontSize: '24px',
                        fontWeight: 'bold',
                    },
                    total: {
                        show: true,
                        fontSize: '12px',
                        fontWeight: 'normal',
                        label: 'de votre objectif',
                    },
                },
            },
        },
        responsive: [
            {
                breakpoint: 1200,
                options: {
                    chart: {
                        height: 200,

                    },
                    plotOptions: {
                        radialBar: {
                            dataLabels: {
                                name: {
                                    fontSize: '16px',
                                },
                                value: {
                                    fontSize: '16px',
                                },
                                total: {
                                    fontSize: '10px',
                                },
                            },
                        },
                    },
                },
            },
        ],
    };

    const series = [score];

    return (
        <div className="score">
            <div id="chart">
                <Chart options={options} series={series} type="radialBar" height={250}/>
            </div>
        </div>
    );
};

BasicRadialBarChart.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BasicRadialBarChart;