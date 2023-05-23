import { useState, useEffect } from 'react';
import './UserProfile.css';
import PropTypes from 'prop-types';


/**
 * Composant qui affiche le nom de l'utilisateur.
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.id - L'identifiant de l'utilisateur.
 * @returns {JSX.Element} - Le composant UserMainComponent.
 */
const UserMainComponent = ({ id,fetchUserName }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    fetchUserName(id)
      .then(name => {
        setName(name);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
    <div>
      <h1 className="bonjour">Bonjour <span className="name">{name}</span></h1>
      <p className="bravo">Bravo ! </p>
    </div>
  );
};

UserMainComponent.propTypes = {
  id: PropTypes.string.isRequired,
};

export default UserMainComponent;