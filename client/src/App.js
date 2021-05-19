import React from 'react'
import './App.css';
import LandingPage from './components/pages/LandingPage'
import NewGame from './components/pages/NewGame'
import {Route,Switch} from 'react-router-dom'


function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
  const [players,setPlayers] = React.useState([])

  const addPlayers=(arr)=>{
    setPlayers(arr);
    alert(arr)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path='/' exact={true}>
            <LandingPage/>
          </Route>
          <Route path='/new'>
            <NewGame test='test' add={addPlayers}/>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
