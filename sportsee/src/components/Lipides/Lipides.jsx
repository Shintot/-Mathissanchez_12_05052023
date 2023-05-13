import PropTypes from 'prop-types';
import './Lipides.css';
import { FaHamburger } from "react-icons/fa";
import { useEffect, useState } from 'react';


/**
 * Affiche le nombre de lipides consommés par l'utilisateur.
 * @param {object} props - Les propriétés du composant.
 * @param {number} props.id - L'identifiant de l'utilisateur.
 * @return {JSX.Element} - Le composant UserCalories.
 */
const UserCalories = ({ id, fetchLipides }) => {
    const [lipidesCount, setLipidesCount] = useState('');

     useEffect(() => {
    fetchLipides(id) // appel à fetchLipides avec l'ID de l'utilisateur
      .then(newLipides => {
        setLipidesCount(newLipides);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

    return (
        <div>
            <div className="contenant">
                <div className="contenanticon"><FaHamburger className="aas" /></div>
                <div className="test">
                    <span>{lipidesCount}g</span>
                    <p>Lipides</p>
                </div>
            </div>
        </div>
    );
};

UserCalories.propTypes = {
  id: PropTypes.number.isRequired,
};

export default UserCalories;