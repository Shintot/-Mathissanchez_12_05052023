import {useState, useEffect} from 'react';
import './UserProfile.css';
import {fetchUserName} from "../../api";

const UserMainComponent = ({ id }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    fetchUserName(id) // appel à fetchUserName avec l'ID de l'utilisateur
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
    </div>
  );
};

export default UserMainComponent;
