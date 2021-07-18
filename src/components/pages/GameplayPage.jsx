import React from "react";
import {Tabs, Tab, Button} from "react-bootstrap";
import SkillTableV2 from "../skills/SkillTableV2";
import PlayerCardBank from "../players/PlayerCardBank";
import {WorldCard} from "../world/WorldCard";
import {initializeGame} from "../../services/gameService";

const GameplayPage = (props) => {
  return (
    <React.Fragment>
      <Tabs
        defaultActiveKey="players"
        transition={false}
        id="gameplay-tabs"
        style={{color: "black"}}
      >
        <Tab eventKey="players" title="PLAYERS">
          <div style={{marginTop: "5%"}}>
            <PlayerCardBank
              players={props.info.players}
              skills={props.info.players.skills}
            />

            <h3 >OTHER SKILLS:</h3>
            <h4 style={{fontFamily: "Pixelmania"}}>
              {props.info.players.skills[12].toUpperCase()}|        |
              {props.info.players.skills[13].toUpperCase()}|        |
              {props.info.players.skills[14].toUpperCase()}|        |
              {props.info.players.skills[15].toUpperCase()}
            </h4>
          </div>
        </Tab>
        <Tab eventKey="skills" title="SKILLS">
          <div style={{marginTop: "5%"}}>
            <SkillTableV2 skills={props.info.players.skills} />
          </div>
        </Tab>

        <Tab eventKey="world" title="THE WORLD">
          <div>
            <WorldCard world={props.info.world} />
          </div>
        </Tab>

        <Tab eventKey="end" title="END">
          <p></p>
          <Button
            size="lg"
            variant="danger"
            onClick={(e) => {
              e.preventDefault();
              window.location.replace("/lastChance");
            }}
          >
            ARE YOU READY TO DESTROY THIS WORLD?
          </Button>
        </Tab>
      </Tabs>
    </React.Fragment>
  );
};
export default GameplayPage;
