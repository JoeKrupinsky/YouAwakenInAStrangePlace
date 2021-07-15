import {React, useState} from "react";
import {Button, Collapse, Card, Row, Col} from "react-bootstrap";
import PlayerCreationForm from "../players/PlayerCreationForm";
import WorldCreationForm from "../world/WorldCreationForm";
import DiceRoller from "../dice/DiceRoller";
import SkillSelection from "../skills/SkillSelection";

import * as skillSvc from '../../services/skillService'
import * as worldSvc from '../../services/worldService'
import * as stSvc from '../../services/statementService'

function NewGameSetup(props) {
  const [wOpen, setWOpen] = useState(true);
  const [pOpen, setPOpen] = useState(false);
  const [sOpen, setSOpen] = useState(false);
  const buttonCallback = (id) => {
    switch (id) {
      case "player":
        setPOpen();
        break;
      case "world":
        setWOpen();
        break;
      default:
        return;
    }
  };
  const passPlayerInfo = (players) => {
    setPOpen(!pOpen);
    setSOpen(!sOpen);
    alert(players)
    // return props.setInfo("players",players);
  };
  const submitWorld = (world) => {
    setWOpen(!wOpen);
    setPOpen(!pOpen);
    // return props.setInfo("world",world);
    let worldReq = {genre:world.genre,adjective:world.adjective,location:world.location};
    let statementArr = world.statements;
    worldSvc.add(worldReq).then(res=>{onWorldAddSuccess(res,statementArr)}).catch(err=>{onWorldAddError(err)});
    
  };
  const onWorldAddSuccess=(response, statements)=>{
    console.log(statements);
    let newWorldId = response.data.res[0];
    //NEXT ADD STATEMENTS WITH NEW WORLD ID
    //NEED BATCH ADD FOR STATEMENTS TABLE 
  }
  const onWorldAddError=(err)=>{}
  const passSkillInfo=(skillObj)=>{
    alert(skills)
    // return props.setInfo("skills",skillObj);
  }
  const formatNames=()=>{
    let nameArr = [];
    nameArr.push(props.players.player1.name);
    nameArr.push(props.players.player2.name);
    nameArr.push(props.players.player3.name);
    return nameArr;
  }
  return (
    <Card
      bg="light"
      style={{
        color: "black",
        fontFamily: "EarthMomma",
        fontSize: ".75em",
        minWidth: "80%",
        borderRadius: "5%",
        float: "center",
      }}
    >
      <Card.Header>
        <h3>NEW ADVENTURE SETUP</h3>
      </Card.Header>
      <Card.Body>
        <h5>ROLL FOR CREATION ORDER</h5>
        <DiceRoller />
        <h5 className="col-12" onClick={() => setWOpen(!wOpen)}>
          WHERE ARE YOU?
        </h5>
        <Collapse in={wOpen}>
          <div>
            <WorldCreationForm close={buttonCallback} submit={submitWorld} />
          </div>
        </Collapse>
        <h5
          className="col-12"
          style={{marginTop: "1%"}}
          onClick={() => setPOpen(!pOpen)}
        >
          WHO ARE YOU?
        </h5>
        <Collapse in={pOpen}>
          <div>
            <PlayerCreationForm
              close={buttonCallback}
              submit={passPlayerInfo}
            />
          </div>
        </Collapse>
        <Row>
          <Col>
            <h5 onClick={()=>setSOpen(!sOpen)}>CHOOSE YOUR SKILLS</h5>
          </Col>
        </Row>
        <Collapse in={sOpen}>
          <div>
            <SkillSelection names={formatNames()} close={buttonCallback} submit={passSkillInfo} />
          </div>
        </Collapse>
      </Card.Body>
      <Card.Footer>
        <Button size='lg' variant='success' onClick={()=>console.log("help")}>START YOUR ADVENTURE!</Button>
      </Card.Footer>
    </Card>
  );
}
export default NewGameSetup;
