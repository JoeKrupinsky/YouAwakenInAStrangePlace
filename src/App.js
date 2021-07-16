import React, { useState } from "react";
import "./App.css";
import LandingPage from "./components/pages/LandingPage";
import NewGameSetup from "./components/pages/NewGameSetup";
import CardLayout from "./components/layouts/CardLayout";
import RulesPage from "./components/pages/RulesPage";
import { Route, Switch } from "react-router-dom";
import GameplayPage from "./components/pages/GameplayPage";
import LoadingPage from './components/pages/LoadingPage'

import ObliterationPage from "./components/pages/ObliterationPage";

function App() {
  const [gameInfo,setGameInfo]=useState({});
  const infoLoaded=(data)=>{
    setGameInfo(data);
  }
  return (
    <div className="App">
      <header
        className="App-header"
        style={{ height: "100px", backgroundColor: "grey" }}
      >
        <Switch>
          <Route path="/" exact={true}>
            <LandingPage />
          </Route>
          <Route path="/rules" exact={true}>
            <RulesPage />
          </Route>
          <Route path="/setup">
            <NewGameSetup />
          </Route>
          <Route path="/loading" exact={true}>
            <CardLayout content={<LoadingPage submit={infoLoaded}/>} />
          </Route>
          <Route path="/play" exact={true}>
            <CardLayout content={<GameplayPage info={gameInfo}/>} />
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
