import {React, useState,useEffect} from "react";
import {Button, Collapse, Card, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import PlayerCreationForm from "../players/PlayerCreationForm";
import WorldCreationForm from "../world/WorldCreationForm";
import DiceRoller from "../dice/DiceRoller";
import SkillSelection from "../skills/SkillSelection";
import * as skillSvc from "../../services/skillService";
import * as worldSvc from "../../services/worldService";
import * as stSvc from "../../services/statementService";
import * as pSvc from "../../services/playerService";
import * as endSvc from '../../services/endService';

function NewGameSetup(props) {
  const [wOpen, setWOpen] = useState(true);
  const [pOpen, setPOpen] = useState(false);
  const [sOpen, setSOpen] = useState(false);
  const [names, setNames] = useState([
    "Player One",
    "Player Two",
    "Player Three",
  ]);
  const [dataChecked,setDataChecked] = useState(false);
  useEffect(()=>{
    if(!dataChecked)
    worldSvc.getAll().then(onGetAllSuccess).catch(onGetAllError)
  })
  const onGetAllSuccess=(res)=>{
    console.log(res);
    let resData = res.data.length;
    if(resData > 0)
    {
      endSvc.endGame();
    }
    setDataChecked(true);
  }
  const onGetAllError=(err)=>{
    console.log(err);
    setDataChecked(true);
  }
  const [enableButton,setEnableButton] = useState(false);
  // const initializeGame = async () => {
  //   await props.getState();
  //   window.location.replace("/play");
  // };
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
    statements.forEach((x) => {
      formattedArr.push({worldId: newWorldId, text: x});
    });
    stSvc
      .addMulti({statements: formattedArr})
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  const onWorldAddError = (err) => {console.log(err)};

  const submitPlayers = (playerData) => {
    setPOpen(!pOpen);
    setSOpen(!sOpen);
    let formattedArr = [];
    for (let i = 0; i < playerData.names.length; i++) {
      let playerObj = {
        name: playerData.names[i],
        description: playerData.descriptions[i],
        health: 10,
        resources: 0,
      };
      formattedArr.push(playerObj);
    }
    pSvc
      .addMulti({players: formattedArr})
      .then((res) => {
        onPlayerAddSuccess(playerData.names);
      })
      .catch((err) => {
        onPlayerAddError;
      });
  };
  const onPlayerAddSuccess = (names) => {
    setNames(names);
  };
  const onPlayerAddError = (err) => {
    console.log(err);
  };
  const submitSkills = (skillObj) => {
    let pId = skillObj.player;
    let skills = skillObj.skills;
    let submitArr = [];
    skills.forEach((skill) => {
      submitArr.push({name: skill, playerId: pId});
    });
    console.log(submitArr);
    skillSvc
      .addMulti({skills: submitArr})
      .then((res) => onSkillAddSuccess(res))
      .catch((err) => onSKillAddError(err));
  };
  const onSkillAddSuccess = (res) => {
    setEnableButton(true);
  };
  const onSkillAddError = (err) => {
    console.log(err);
  };

  return (
    <Card
      bg="light"
      style={{
        color: "black",
        fontFamily: "MagnificentSerif",
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
        <h5 className="col-12" >
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
         
        >
          WHO ARE YOU?
        </h5>
        <Collapse in={pOpen}>
          <div>
            <PlayerCreationForm close={buttonCallback} submit={submitPlayers} />
          </div>
        </Collapse>
        <Row>
          <Col>
            <h5 >CHOOSE YOUR SKILLS</h5>
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
        {enableButton ? (<Link
          
          to="/loading" as={Button}>
          <Button variant="info" size="lg">
            AWAKEN...
          </Button>
        </Link>):(
          <Button disabled variant="danger" size="lg">
            NOT YET...
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
}
export default NewGameSetup;
