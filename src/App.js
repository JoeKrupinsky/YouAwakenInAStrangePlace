import React,{useState} from "react";
import "./App.css";
import LandingPage from "./components/pages/LandingPage";
import NewGameSetup from "./components/pages/NewGameSetup";
import SkillTableV2 from "./components/skills/SkillTableV2";
import PlayerCardBank from "./components/players/PlayerCardBank";
import CardLayout from "./components/layouts/CardLayout";
import RulesPage from "./components/pages/RulesPage";
import { Route, Switch } from "react-router-dom";
import GameplayPage from "./components/pages/GameplayPage";
import ServerTest from "./components/pages/ServerTest";
import { initializeGame } from "./services/gameService";
import ObliterationPage from "./components/pages/ObliterationPage";

function App() {
  const [gameState, setGameState] = useState(
    false);
  const [isReady,setIsReady] = useState(false);
  // const getGameState =  async () => {
  //   let gameState =  await initializeGame();
  //   await setGameState(gameState);
    
  //     setIsReady(true);
    
  // };
  

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
          <Route path="/player" exact={true}>
            <PlayerCardBank />
          </Route>
          <Route path="/play" exact={true}>
            <CardLayout content={<GameplayPage />} />
          </Route>
          <Route path="/testServer" exact={true}>
            <CardLayout content={<ServerTest />} />
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
