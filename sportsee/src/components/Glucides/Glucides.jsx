
import './Glucides.css'
import {GiShinyApple} from "react-icons/gi";
import { useEffect, useState } from 'react';
import {fetchGlucides} from "../../api";

const UserCalories = ({ id }) => {
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
            <div className="contenanticonG"><GiShinyApple className="tes" /></div>
            <div className="test">
                <span>{glucide}kCal</span>
                <p>Glucides</p>
            </div>
        </div>
    </div>
);

};

export default UserCalories;
