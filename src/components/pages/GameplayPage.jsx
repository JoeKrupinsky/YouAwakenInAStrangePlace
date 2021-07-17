import React from "react";
import {Tabs, Tab, Button} from "react-bootstrap";
import SkillTableV2 from "../skills/SkillTableV2";
import PlayerCardBank from "../players/PlayerCardBank";
import {initializeGame} from "../../services/gameService";

class GameplayPage extends React.Component {
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
              <SkillTableV2 skills={this.props.info.players.skills} />

              <PlayerCardBank
                players={this.props.info.players}
                skills={this.props.info.players.skills}
              />
            </div>
          </Tab>

          <Tab eventKey="world" title="THE WORLD">
            <div>
              <h1>WORLD STUFF HERE</h1>
            </div>
          </Tab>
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
      </React.Fragment>
    );
  }
}
export default GameplayPage;
