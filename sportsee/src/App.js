import UserProfile from './components/UserProfile/UserProfile';
import Navbar from "./components/Navbar/Navbar";
import NavbarVertical from "./components/NavbarVertical/NavbarVertical";
import ActiviteQuotidienne from "./components/ActiviteQuotidienne/ActiviteQuotidienne";
import DureeMoyenne from "./components/DureeMoyenne/DureeMoyenne";
import SpiderWeb from "./components/SpiderWeb/SpiderWeb";
import Score from "./components/score/Score";
import './App.css';
import Calories from "./components/Calories/Calories";
import Glucides from "./components/Glucides/Glucides";
import Proteines from "./components/Proteines/Proteines";
import Lipides from "./components/Lipides/Lipides";
import {useState} from "react";

function App() {

     const [id, setId] = useState(12);
     const handleIdChange = () => {
        setId(prevId => prevId === 12 ? 18 : 12);
    };

    return (
        <div className="App">
            <div className="Nav">
                <Navbar/>
                <button onClick={handleIdChange} className="btnid">Switch ID</button>
                <NavbarVertical/>
            </div>

            <UserProfile id={id}/>
            <div className="flex reso">
                <div className="">

                        <ActiviteQuotidienne id={id}/>

                    <div className="trio">
                        <DureeMoyenne id={id}/>
                        <SpiderWeb id={id}/>
                        <Score id={id}/>
                    </div>
                </div>
                <div className="espace">
                    <Calories id={id}/>
                    <Proteines id={id}/>
                    <Glucides id={id}/>
                    <Lipides id={id}/>
                </div>
            </div>
        </div>
    );
}

export default App;
