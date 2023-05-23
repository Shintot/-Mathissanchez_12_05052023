import PropTypes from 'prop-types';
import './Proteines.css';
import {GiMeal} from "react-icons/gi";
import { useEffect, useState } from 'react';



/**
 * Composant UserProteines affichant les informations sur les protéines consommées par l'utilisateur.
 *
 * @param {object} props - Les propriétés du composant.
 * @param {number} props.id - L'identifiant de l'utilisateur.
 *
 * @returns {JSX.Element} - Le composant UserProteines.
 *
 * @example
 * <UserProteines id={1} />
 */
const UserProteines = ({ id ,fetchProteines}) => {
  const [proteines, setProteines] = useState(0);

  useEffect(() => {
    fetchProteines(id) // appel à fetchProteines avec l'ID de l'utilisateur
      .then(newProteines => {
        setProteines(newProteines);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
    <div>
      <div className="contenant">
          <div className="contenanticon"><GiMeal className="t"/></div>
          <div className="test">
              <span>{proteines}g</span>
              <p>Proteines</p>
          </div>
      </div>
    </div>
  );
};

UserProteines.propTypes = {
  id: PropTypes.string.isRequired,
};

export default UserProteines;