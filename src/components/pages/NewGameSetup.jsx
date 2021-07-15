import { React, useState } from "react";
import { Button, Collapse, Card, Row, Col } from "react-bootstrap";
import PlayerCreationForm from "../players/PlayerCreationForm";
import WorldCreationForm from "../world/WorldCreationForm";
import DiceRoller from "../dice/DiceRoller";
import SkillSelection from "../skills/SkillSelection";

import * as skillSvc from "../../services/skillService";
import * as worldSvc from "../../services/worldService";
import * as stSvc from "../../services/statementService";
import * as pSvc from '../../services/playerService';

function NewGameSetup(props) {
  const [wOpen, setWOpen] = useState(true);
  const [pOpen, setPOpen] = useState(false);
  const [sOpen, setSOpen] = useState(false);
  const [names,setNames] = useState(["Player One","Player Two","Player Three"]);
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
  
  const submitWorld = (world) => {
    setWOpen(!wOpen);
    setPOpen(!pOpen);
    // return props.setInfo("world",world);
    let worldReq = {
      genre: world.genre,
      adjective: world.adjective,
      location: world.location,
    };
    let statementArr = world.statements;
    worldSvc
      .add(worldReq)
      .then((res) => {
        onWorldAddSuccess(res, statementArr);
      })
      .catch((err) => {
        onWorldAddError(err);
      });
  };
  const onWorldAddSuccess = (response, statements) => {
    
    let newWorldId = response.data.res[0];
    let formattedArr = [];
    statements.forEach(x=>{
      formattedArr.push({"worldId":newWorldId,"text":x})
    })
    stSvc.addMulti({"statements":formattedArr})
    .then((result)=>console.log(result))
    .catch(err=>console.log(err))

  };
  const onWorldAddError = (err) => {};
  
  const submitPlayers = (playerData) => {
    setPOpen(!pOpen);
    setSOpen(!sOpen);
    let formattedArr = [];
   for(let i = 0;i < playerData.names.length;i++)
   {
     let playerObj = {"name":playerData.names[i],"description":playerData.descriptions[i],"health":10,"resources":0};
    formattedArr.push(playerObj);
   }
   pSvc.addMulti({"players":formattedArr})
   .then((res)=>{onPlayerAddSuccess(playerData.names)})
   .catch((err)=>{onPlayerAddError})
  };
  const onPlayerAddSuccess=(names)=>{
    setNames(names);
  };
  const onPlayerAddError = (err) => {console.log(err)};
  const submitSkills = (skillObj) => {
    let pId = skillObj.player;
    let skills = skillObj.skills;
    let submitArr = [];
    skills.forEach(skill=>
      {submitArr.push({"name":skill,"playerId":pId})}
      )   
      console.log(submitArr);
      skillSvc.addMulti({"skills":submitArr})
      .then(res=>onSkillAddSuccess(res))
      .catch(err=>onSKillAddError(err)) 
  };
  const onSkillAddSuccess =(res)=>{console.log(res)};
  const onSkillAddError =(err)=>{console.log(err)};
  
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
          style={{ marginTop: "1%" }}
          onClick={() => setPOpen(!pOpen)}
        >
          WHO ARE YOU?
        </h5>
        <Collapse in={pOpen}>
          <div>
            <PlayerCreationForm
              close={buttonCallback}
              submit={submitPlayers}
            />
          </div>
        </Collapse>
        <Row>
          <Col>
            <h5 onClick={() => setSOpen(!sOpen)}>CHOOSE YOUR SKILLS</h5>
          </Col>
        </Row>
        <Collapse in={sOpen}>
          <div>
            <SkillSelection
              names={names}
              close={buttonCallback}
              submit={submitSkills}
            />
          </div>
        </Collapse>
      </Card.Body>
      <Card.Footer>
        <Button size="lg" variant="success" onClick={() => console.log("help")}>
          START YOUR ADVENTURE!
        </Button>
      </Card.Footer>
    </Card>
  );
}
export default NewGameSetup;
