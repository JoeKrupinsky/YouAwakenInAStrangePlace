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
  const [players, setPlayers] = React.useState({ player1: { name: 'Player 1',desc:'',skills:["Running","Jumping","Climbing","Sneaking"] }, player2: { name: 'Player 2',desc:'',skills:["Running","Jumping","Climbing","Sneaking"] }, player3: { name: 'Player 3',desc:'',skills:["Running","Jumping","Climbing","Sneaking"] },DM:{name:'DM',desc:'n/a',skills:["Running","Jumping","Climbing","Sneaking"]} })

  const routeNewGameInfo = (id,info) => {
    switch(id){
      case "players":
        addPlayers(info);
        break;
      case "world":
        addWorldInfo(info);
        break;
      case "skills":
        addSkills(info);
        break;
      default:
        alert("NO ID SET");
        break;
    }

  }
  const addWorldInfo = (worldObj) => {
    console.log(worldObj);
  }
  const addPlayers = (obj) => {
    let newPlayers = { ...players };
    newPlayers.player1.name = obj.names[0];
    newPlayers.player1.desc = obj.descriptions[0];
    newPlayers.player2.name = obj.names[1];
    newPlayers.player2.desc = obj.descriptions[1];
    newPlayers.player3.name = obj.names[2];
    newPlayers.player3.desc = obj.descriptions[2];
    setPlayers(newPlayers)
  }
  const addSkills = (obj) => {
    console.log("ADD")
    alert("addSkillsFired");
    let arr = obj.skills;
    let newPlayers = {...players};
    switch(obj.name){
      case players.player1.name:
        newPlayers.player1.skills = arr;
        console.log(newPlayers.player1)
        setPlayers(newPlayers);
        break;
      case players.player2.name:
        newPlayers.player2.skills = arr;
        console.log(newPlayers.player2)
        setPlayers(newPlayers);
        break;
      case players.player3.name:
        newPlayers.player3.skills = arr;
        console.log(newPlayers.player3)
        setPlayers(newPlayers);
        break;
      case "DM":
        newPlayers.DM.skills = arr;
        console.log(`${obj.name} skills set to ${newPlayers.DM.skills}`)
        setPlayers(newPlayers);
        break;
      default:
        alert("NAME MISMATCH");
    }
  }
  const formatSkills=()=>{
    let fullArr = [];
    fullArr.push(...players.player1.skills);
    fullArr.push(...players.player2.skills);
    fullArr.push(...players.player3.skills);
    fullArr.push(...players.DM.skills);
    return fullArr;
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
            <NewGameSetup setInfo={routeNewGameInfo} players={players}/>
          </Route>
          <Route path='/testV2' exact={true}>
            <SkillTableV2 skills={formatSkills()}/>
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
