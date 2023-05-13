import './Calories.css';
import { BsFire } from 'react-icons/bs';
import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';


/**
 * Composant qui affiche le nombre de calories consommées par un utilisateur.
 * @param {string} id - L'identifiant de l'utilisateur.
 * @param fetchCalories
 * @returns {JSX.Element} - Le composant UserCalories.
 */
const UserCalories = ({ id , fetchCalories}) => {
  const [calories, setCalories] = useState('');

  useEffect(() => {
    fetchCalories(id) // appel à fetchCalories avec l'ID de l'utilisateur
      .then(newCalories => {
        setCalories(newCalories);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
    <div>
      <div className="contenant">
        <div className="contenanticon">
          <BsFire className="icon" />
        </div>
        <div className="test">
          <span>{calories}kCal</span>
          <p>Calories</p>
        </div>
      </div>
    </div>
  );
};

UserCalories.propTypes = {
  id: PropTypes.number.isRequired,
};

export default UserCalories;
