import {React, useState} from "react";
import {Button, Collapse, Card, Row,Col} from "react-bootstrap";
import PlayerCreationForm from "../players/PlayerCreationForm";
import WorldCreationForm from "../world/WorldCreationForm";
import DiceRoller from "../dice/DiceRoller";

function NewGameSetup(props) {
  const [pOpen, setPOpen] = useState(false);
  const [wOpen, setWOpen] = useState(true);
  const buttonCallback=(id)=>{
    switch(id){
      case 'player':
        setPOpen();
        break;
      case 'world':
        setWOpen();
        break;
        default:
          return;
    }
  }
  const goToSkillSelection=()=>{
    console.log("Function fired")
  }
  const passPlayerInfo=(players)=>{
    setPOpen(!pOpen);
    console.log(players);
  }
  const passWorldInfo=(world)=>{
    setWOpen(!wOpen);
    setPOpen(!pOpen);
    console.log(world);
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
            <WorldCreationForm close={buttonCallback} submit={passWorldInfo}/>
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
            <PlayerCreationForm close={buttonCallback} submit={passPlayerInfo}/>
          </div>
        </Collapse>
      </Card.Body>
      <Row style={{marginBottom:'1%'}}>
        <Col></Col>
        <Button onClick={goToSkillSelection}>NEXT STEP: CHOOSE YOUR SKILLS</Button>
        <Col></Col>
      </Row>
    </Card>
  );
}
export default NewGameSetup;
