import React, {useEffect, useState} from "react";
import {Tabs, Tab, Button, Jumbotron, Row, Col} from "react-bootstrap";
import SkillTableV2 from "../skills/SkillTableV2";
import PlayerCardBank from "../players/PlayerCardBank";
import {WorldCard} from "../world/WorldCard";
import {initializeGame} from "../../services/gameService";

const GameplayPage = (props) => {
  // const [ready,setReady] = useState(props.ready);
  //  useEffect(()=>{
  //    if(!ready)
  //      window.location.replace('/loading');

  //  })
  return (
    <React.Fragment>
      {props.info.loaded ? (
        <Tabs
          defaultActiveKey="players"
          transition={false}
          id="gameplay-tabs"
          style={{color: "black", fontFamily: "TypeWriter"}}
        >
          <Tab eventKey="players" title="PLAYERS">
            <div style={{marginTop: "5%"}}>
              <PlayerCardBank
                players={props.info.players}
                skills={props.info.players.skills}
              />
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
      ) : (
        <Jumbotron style={{fontFamily: "Typewriter"}}>
          Game data is missing. Please click here to reload.
          <Row style={{marginTop:'10%'}}>
            <Col> <Button
              variant="danger"
              size='lg'
              onClick={(e) => window.location.replace("/loading")}
            >
              Reload Game Data
            </Button></Col>
            {" "}
           
          </Row>
        </Jumbotron>
      )}
    </React.Fragment>
  );
};
export default GameplayPage;
