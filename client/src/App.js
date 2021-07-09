import React from 'react'
import './App.css';
import LandingPage from './components/pages/LandingPage'
import NewGameSetup from './components/pages/NewGameSetup'
import DMSkillTable from './components/skills/DMSkillTable'
// import SkillV2 from './components/skills/SkillV2'
import SkillTableV2 from './components/skills/SkillTableV2'
import PlayerCardBank from './components/players/PlayerCardBank'
import RulesPage from './components/pages/RulesPage'
import { Route, Switch } from 'react-router-dom'

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
  const [players, setPlayers] = React.useState({ player1: { name: 'Player 1' }, player2: { name: 'Player 2' }, player3: { name: 'Player 3' } })
  const [skills, setSkills] = React.useState(['Running', 'Jumping', 'Crushing','Winning','Kissing','Lying','Punching','Flying','Pooping','Drawing','Reading','Coding','Singing','Whining','Praising','Driving'])
  const addPlayers = (arr) => {
    let newPlayers = { ...players };
    newPlayers.player1.name = arr[0];
    newPlayers.player2.name = arr[1];
    newPlayers.player3.name = arr[2];
    setPlayers(newPlayers)
  }
  return (
    <div className="App">
      <header className="App-header" style={{ height: '100px' }}>
        <Switch>
          <Route path='/' exact={true}>
            <LandingPage />
          </Route>
          <Route path='/rules' exact={true}>
            <RulesPage />
          </Route>
          <Route path='/setup'>
            <NewGameSetup />
          </Route>
          <Route path='/dice' exact={true}>
            <DMSkillTable skills={skills}/>
          </Route>
          <Route path='/testV2' exact={true}>
            <SkillTableV2 skills={skills}/>
          </Route>
          <Route path='/player' exact={true}>
            <PlayerCardBank />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
