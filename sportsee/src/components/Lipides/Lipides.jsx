import './Lipides.css'
import { FaHamburger } from "react-icons/fa";
import { useEffect, useState } from 'react';
import {fetchLipides} from "../../api";

const UserCalories = ({ id }) => {
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

export default UserCalories;
