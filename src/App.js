import React from 'react'
import './App.css';
import LandingPage from './components/pages/LandingPage'
import NewGameSetup from './components/pages/NewGameSetup'
import SkillTableV2 from './components/skills/SkillTableV2'
import PlayerCardBank from './components/players/PlayerCardBank'
import CardLayout from './components/layouts/CardLayout'
import RulesPage from './components/pages/RulesPage'
import { Route, Switch } from 'react-router-dom'
import GameplayPage from './components/pages/GameplayPage';
import ServerTest from './components/pages/ServerTest';

function App() {

  // const [players, setPlayers] = React.useState({ player1: { name: 'Player 1', desc: '', skills: ['running', 'flying', 'lying', 'dying'], hp: 10, res: 0 }, player2: { name: 'Player 2', desc: '', skills: ['running2', 'flying2', 'lying2', 'dying2'], hp: 10, res: 0 }, player3: { name: 'Player 3', desc: '', skills: ['running3', 'flying3', 'lying3', 'dying3'], hp: 10, res: 0 }, DM: { name: 'DM', skills: ['running4', 'flying4', 'lying4', 'dying4'] } })
  // const [world, setWorld] = React.useState({ genre: '', adjective: '', location: '', statements: [] })
  // const [gameState, setGameState] = React.useState({ players, world })
  // const routeNewGameInfo = (id, info) => {
  //   switch (id) {
  //     case "players":
  //       addPlayers(info);
  //       break;
  //     case "world":
  //       setWorld(info);
  //       break;
  //     case "skills":
  //       addSkills(info);
  //       break;
  //     default:
  //       alert("NO ID SET");
  //       break;
  //   }

  // }
  // const addPlayers = (obj) => {
  //   let newPlayers = { ...players };
  //   newPlayers.player1.name = obj.names[0];
  //   newPlayers.player1.desc = obj.descriptions[0];
  //   newPlayers.player2.name = obj.names[1];
  //   newPlayers.player2.desc = obj.descriptions[1];
  //   newPlayers.player3.name = obj.names[2];
  //   newPlayers.player3.desc = obj.descriptions[2];
  //   setPlayers(newPlayers)
  // }
  // const addSkills = (obj) => {
  //   let arr = obj.skills;
  //   let newPlayers = { ...players };
  //   switch (obj.name) {
  //     case players.player1.name:
  //       newPlayers.player1.skills = arr;
  //       setPlayers(newPlayers);
  //       break;
  //     case players.player2.name:
  //       newPlayers.player2.skills = arr;
  //       setPlayers(newPlayers);
  //       break;
  //     case players.player3.name:
  //       newPlayers.player3.skills = arr;
  //       setPlayers(newPlayers);
  //       break;
  //     case "DM":
  //       newPlayers.DM.skills = arr;
  //       setPlayers(newPlayers);
  //       break;
  //     default:
  //       alert("NAME MISMATCH");
  //   }
  // }
  // const formatSkills = () => {
  //   let fullArr = [];
  //   fullArr.push(...players.player1.skills);
  //   fullArr.push(...players.player2.skills);
  //   fullArr.push(...players.player3.skills);
  //   fullArr.push(...players.DM.skills);
  //   return fullArr;
  // }
  const getGameState = () => {
    const newGameState = { players, world };
    console.log(newGameState);
    setGameState(newGameState);
  }
  return (
    <div className="App">
      <header className="App-header" style={{ height: '100px', backgroundColor: 'grey' }}>

        <Switch>
          <Route path='/' exact={true}>
            <LandingPage />
          </Route>
          <Route path='/rules' exact={true}>
            <RulesPage />
          </Route>
          <Route path='/setup'>
            <NewGameSetup   />
          </Route>
          <Route path='/player' exact={true}>
            <PlayerCardBank  />
          </Route>
          <Route path='/play' exact={true}>
            <CardLayout content={<GameplayPage  />} />
          </Route>
          <Route path='/testServer' exact={true}>
            <CardLayout  content={<ServerTest />}/>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
