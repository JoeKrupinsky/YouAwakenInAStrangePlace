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
    {
      world: {
        genre: "",
        adjective: "",
        location: "",
        statements: [],
      },
      players: {
        player1: {
          id: 0,
          name: "Player One",
          description: "placeholder One",
          health: 10,
          resources: 0,
        },
        player2: {
          id: 1,
          name: "PLayer 2",
          description: "Placeholder 2",
          health: 10,
          resources: 0,
        },
        player3: {
          id: 2,
          name: "Player 3",
          description: "Placeholder 3",
          health: 10,
          resources: 0,
        },
        skills: [
          "One",
          "Two",
          "Three",
          "Four",
          "Five",
          "Six",
          "Seven",
          "Eight",
          "Nine",
          "Ten",
          "Eleven",
          "Twelve",
          "Thirteen",
          "Fourteen",
          "Fifteen",
          "Sixteen",
        ],
      }
    });
  const [isReady,setIsReady] = useState(false);
  const getGameState =  async () => {
    let gameState =  await initializeGame();
    await setGameState(gameState);
    
      setIsReady(true);
    
  };
  

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
            <NewGameSetup getState={getGameState}/>
          </Route>
          <Route path="/player" exact={true}>
            <PlayerCardBank />
          </Route>
          <Route path="/play" exact={true}>
            <CardLayout content={<GameplayPage ready={isReady} players={gameState.players} skills={gameState.players.skills} world={gameState.world} initialize={getGameState}/>} />
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
