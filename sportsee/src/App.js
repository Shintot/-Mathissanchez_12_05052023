import {useState} from "react";
import {BrowserRouter as Router, Routes, Route, useParams, Link} from "react-router-dom";
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
import {
    fetchActivity,
    fetchCalories,
    fetchAverageSessions,
    fetchGlucides,
    fetchLipides,
    fetchProteines,
    fetchScore,
    fetchPerformanceData,
    fetchUserName
} from './api';

function App() {
    const {id} = useParams();

    // Vérifier si l'ID est valide ici (ex: vérifier dans une liste d'utilisateurs)

    // Simuler une vérification avec une condition simple
    const isValidId = id === "12" || id === "18";

    if (!isValidId) {
        return (<div>
             <Navbar/>

                    <h1 className="erreur">404</h1>
                    <p className="erreurtxt">Aucuns utilisateur trouvé</p>
                </div>);
    }

    return (
        <div className="App">
            <div className="Nav">
                <Navbar/>
                <NavbarVertical/>
            </div>
            <UserProfile id={id} fetchUserName={fetchUserName}/>
            <div className="flex reso">
                <div className="">
                    <ActiviteQuotidienne id={id} fetchActivity={fetchActivity}/>
                    <div className="trio">
                        <DureeMoyenne id={id} fetchAverageSessions={fetchAverageSessions}/>
                        <SpiderWeb id={id} fetchPerformanceData={fetchPerformanceData}/>
                        <Score id={id} fetchScore={fetchScore}/>
                    </div>
                </div>
                <div className="espace">
                    <Calories id={id} fetchCalories={fetchCalories}/>
                    <Proteines id={id} fetchProteines={fetchProteines}/>
                    <Glucides id={id} fetchGlucides={fetchGlucides}/>
                    <Lipides id={id} fetchLipides={fetchLipides}/>
                </div>
            </div>
        </div>
    );
}

function AppWrapper() {

    return (
        <Router>
            <Routes>
                <Route path="/user/:id" element={<App/>}/>
            </Routes>
        </Router>
    );
}

export default AppWrapper;
