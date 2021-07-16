import React from "react";
import {Tabs, Tab, Button} from "react-bootstrap";
import SkillTableV2 from "../skills/SkillTableV2";
import PlayerCardBank from "../players/PlayerCardBank";

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
      },
      current: false,
    };
  }
  componentDidMount = () => {
    if (!this.state.current) {
      this.props
        .gameInfo()
        .then((response) => {
          this.setState((prevState) => {
            let newState = {...prevState};
            newState = response;
            newState.current = true;
            return newState;
          });
        })
        .catch();
    }
  };
  render(props) {
    return (
      <React.Fragment>
        <Tabs
          defaultActiveKey="characters"
          transition={false}
          id="gameplay-tabs"
          style={{color: "black"}}
        >
          <Tab eventKey="characters" title="THE CHARACTERS">
            <div style={{marginTop: "5%"}}>
              <SkillTableV2 skills={this.state.players.skills} />
              <PlayerCardBank
                players={this.state.players}
                skills={this.state.players.skills}
              />
            </div>
          </Tab>
          <Tab eventKey="world" title="THE WORLD">
            <div>
              <h1>WORLD STUFF HERE</h1>
            </div>
          </Tab>
          <Tab eventKey="notes" title="DM NOTES"></Tab>
          <Tab eventKey="end" title="END"><Button size='lg' variant='danger' onClick={e=>{e.preventDefault();window.location.replace('/lastChance')}}>DESTROY THIS WORLD?</Button></Tab>
        </Tabs>
      </React.Fragment>
    );
  }
}
export default GameplayPage;
