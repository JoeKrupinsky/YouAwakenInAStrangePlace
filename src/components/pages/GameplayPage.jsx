import React from "react";
import { Tabs, Tab, Button } from "react-bootstrap";
import SkillTableV2 from "../skills/SkillTableV2";
import PlayerCardBank from "../players/PlayerCardBank";
import { initializeGame } from "../../services/gameService";

class GameplayPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
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
          
        ],
      },

    };
  }
componentDidMount=()=>{
  console.log(this.props.info);
} 
  
 
  render(props) {
    return (
      <React.Fragment>
        
          <Tabs
            defaultActiveKey="characters"
            transition={false}
            id="gameplay-tabs"
            style={{ color: "black" }}
          >
            <Tab eventKey="characters" title="THE CHARACTERS">
              <div style={{ marginTop: "5%" }}>
                {this.state.skillsReady && this.state.playersReady ? <SkillTableV2 skills={this.state.players.skills} readyUp={this.readySkills} /> : <h1>LOADING</h1>}
                <PlayerCardBank
                  players={this.state.players}
                  skills={this.state.players.skills}
                  readyUp={this.readyPlayers}
                />
              </div>
            </Tab>
            {this.state.skillsReady && this.state.playersReady ? (
            <Tab eventKey="world" title="THE WORLD">
              <div>
                <h1>WORLD STUFF HERE</h1>
              </div>
            </Tab>) : (
          <h1>LOADING</h1>
        )}
            <Tab eventKey="notes" title="DM NOTES"></Tab>
            <Tab eventKey="end" title="END">
              <Button
                size="lg"
                variant="danger"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.replace("/lastChance");
                }}
              >
                DESTROY THIS WORLD?
              </Button>
            </Tab>
            
          </Tabs>
        
        <Button variant="danger" onClick={this.updatePage}>
          Force Update
        </Button>
      </React.Fragment>
    );
  }
}
export default GameplayPage;
