import React from "react";
import {Container, Row, Col, Card} from "react-bootstrap";

function PlayerCard(props) {
  const {
    player: {name, desc, hp, skills, res},
  } = props;
   let formatRes=()=>{
    let numString = "";

    switch (props.player.res) {
      case 1:
        numString += "X|X|X|X|O";
        break;
      case 2:
        numString += "X|X|X|O|O";
        break;
      case 3:
        numString += "X|X|O|O|O";
        break;
      case 4:
        numString += "X|O|O|O|O";
        break;
      case 5:
        numString += "O|O|O|O|O";
        break;
      default:
        numString += 'X|X|X|X|X'
        break;
    }
    return numString;
  }
  return (
    <React.Fragment>
      {/* 
        Takes a Player prop that looks like this:
        {
            Name:'',
            Desc:'',
            HP:10,
            Skills:[-2,-1,+1,+2],
            Res:0
        }
        */}

      <Card
        className="col"
        style={{
          padding: "5px",
          borderRadius: "10px",
          border: "3px solid #525252",
          margin: "1px",
          fontFamily: "Pixelmania",
          color: "black",
          backgroundColor: "#f0f0f0",
        }}
      >
        <Card.Header>
          <Row>
            <Col>
              <p style={{fontSize: ".5em"}}>
                {props.player.name.toUpperCase() || "NO NAME"}
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5 style={{fontSize: ".5em", fontFamily: "Impact"}}>
                {props.player.desc || "NO DESCRIPTION"}
              </h5>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <h5>HEALTH</h5>
            </Col>
            <Col></Col>
            <Col>
              <h5>{props.player.hp} </h5>
              {/* TRACK PLAYER"S HEALTH HERE */}
            </Col>
          </Row>
          <Row>
            
            <Col style={{borderBottom:'1px solid black'}}>
              <h5 style={{float:'left'}}>SKILL</h5>
            </Col>
            <Col style={{borderBottom:'1px solid black'}}>
            <h5 style={{float:'right'}}>MODIFIER</h5>
            </Col>
          </Row>

          <Row style={{marginTop: "5px"}}>
            {/* Skills */}
            <Col>
              <Row style={{borderBottom: "1px solid white"}}>
                <Col>
                  <h5 style={{float: "left"}}>
                    {props.player.skills[0].toUpperCase()}
                  </h5>
                </Col>
              </Row>
              <Row style={{borderBottom: "1px solid white"}}>
                <Col>
                  <h5 style={{float: "left"}}>
                    {props.player.skills[1].toUpperCase()}
                  </h5>
                </Col>
                <Col></Col>
              </Row>
              <Row style={{borderBottom: "1px solid white"}}>
                <Col>
                  <h5 style={{float: "left"}}>
                    {props.player.skills[2].toUpperCase()}
                  </h5>
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col>
                  <h5 style={{float: "left"}}>
                    {props.player.skills[3].toUpperCase()}
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col>
                  <h5 style={{float: "right"}}>=2</h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5 style={{float: "right"}}>=1</h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5 style={{float: "right"}}>1</h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5 style={{float: "right"}}>2</h5>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col>
              <h5>RESOURCES:</h5>
            </Col>
          </Row>

          <Row>
            <Col>
              <h5>{formatRes()}</h5>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </React.Fragment>
  );
}
export default PlayerCard;
