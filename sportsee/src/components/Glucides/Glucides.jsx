import './Glucides.css';
import { GiShinyApple } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


/**
 * Composant qui affiche la quantité de glucides consommée par l'utilisateur.
 *
 * @param {object} props - Les propriétés du composant.
 * @param {string} props.id - L'ID de l'utilisateur.
 *
 * @returns {JSX.Element} - Le composant UserGlucides.
 *
 * @example
 * <UserGlucides id="1234567890" />
 */
const UserGlucides = ({ id,fetchGlucides }) => {
  const [glucide, setGlucide] = useState(0);

  useEffect(() => {
    fetchGlucides(id) // appel à fetchGlucides avec l'ID de l'utilisateur
      .then(newGlucides => {
        setGlucide(newGlucides);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
    <div>
      <div className="contenant">
        <div className="contenanticonG">
          <GiShinyApple className="tes" />
        </div>
        <div className="test">
          <span>{glucide}kCal</span>
          <p>Glucides</p>
        </div>
      </div>
    </div>
  );
};

UserGlucides.propTypes = {
  id: PropTypes.string.isRequired,
};

export default UserGlucides;
