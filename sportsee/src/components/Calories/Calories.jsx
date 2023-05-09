import './Calories.css';
import { BsFire } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import {fetchCalories} from "../../api";

const UserCalories = ({ id }) => {
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

export default UserCalories;
