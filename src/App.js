import React, { useState } from "react";
import "./App.css";
import LandingPage from "./components/pages/LandingPage";
import NewGameSetup from "./components/pages/NewGameSetup";
import CardLayout from "./components/layouts/CardLayout";
import RulesPage from "./components/pages/RulesPage";
import { Route, Switch } from "react-router-dom";
import GameplayPage from "./components/pages/GameplayPage";
import LoadingPage from './components/pages/LoadingPage'

import ObliterationPage from "./components/pages/ObliterationPage.jsx";

function App() {
  const [gameInfo,setGameInfo]=useState({
    "loaded": false,
    "world": {
        "genre": "GENRE",
        "adjective": "ADJECTIVE",
        "location": "LOCATION",
        "statements": [
            "STATEMENT PLACEHOLDER",
        ]
    },
    "players": {
        "player1": {
            "id": 1,
            "name": "PLAYER 1",
            "description": "PLAYER 1 DESCRIPTION",
            "health": 10,
            "resources": 0
        },
        "player2": {
            "id": 2,
            "name": "PLAYER 2",
            "description": "PLAYER 2 DESCRIPTION",
            "health": 10,
            "resources": 0
        },
        "player3": {
            "id": 3,
            "name": "PLAYER 3",
            "description": "PLAYER 3 DESCRIPTION",
            "health": 10,
            "resources": 0
        },
        "skills": [
            '1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'
        ]
    }
});
  const [readyState,setReadyState]=useState(false);
  const infoLoaded=(data)=>{
    setGameInfo(data);
    setReadyState(true); 
  }
  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundColor: "grey",maxHeight:'80%' }}
      >
        <Switch>
          <Route path="/" exact={true}>
            <LandingPage />
          </Route>
          <Route path="/rules" exact={true}>
          <CardLayout content={<RulesPage />} />
          </Route>
          <Route path="/setup">
            <NewGameSetup />
          </Route>
          <Route path="/loading" exact={true}>
            <CardLayout content={<LoadingPage submit={infoLoaded}/>} />
          </Route>
          <Route path="/play" exact={true}>
            <CardLayout content={<GameplayPage info={gameInfo} ready={readyState} />} />
          </Route>

          <Route path="/lastChance" exact={true}>
            <CardLayout content={<ObliterationPage />} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
