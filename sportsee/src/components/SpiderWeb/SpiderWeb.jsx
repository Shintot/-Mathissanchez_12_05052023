import React, {useEffect, useState} from 'react';
import Chart from 'react-apexcharts';
import './SpiderWeb.css';
import PropTypes from 'prop-types';
import Translations from './translation';


/**
 * Composant SpiderWeb affichant un graphique de type radar avec les données de performance pour un utilisateur donné.
 * @param {number} id - L'ID de l'utilisateur pour lequel afficher les données de performance.
 * @param fetchPerformanceData
 * @return {JSX.Element} Composant React pour le graphique de performance en radar.
 */
const SpiderWeb = ({id, fetchPerformanceData}) => {
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
        colors: ['#ff0000'],
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
            categories: chartData.map(item => Translations.translate(item.subject)),
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
                <Chart options={options} series={series} type="radar" width="100%" height="260rem"/>
            </div>
        </div>
    );
};

SpiderWeb.propTypes = {
    id: PropTypes.string.isRequired,
};

export default SpiderWeb;
