import './Proteines.css'
import {GiMeal} from "react-icons/gi";
import { useEffect, useState } from 'react';
import {fetchProteines} from "../../api";

const UserProteines = ({ id }) => {
  const [proteines, setProteines] = useState(0);

  useEffect(() => {
    fetchProteines(id ) // appel à fetchProteines avec l'ID de l'utilisateur
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

export default UserProteines;
