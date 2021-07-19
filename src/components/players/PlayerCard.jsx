import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

function PlayerCard(props) {
  let formatRes = () => {
    let numString = "";

    switch (props.player.resources) {
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
        numString += "X|X|X|X|X";
        break;
    }
    return numString;
  };
  const resourceHandler = (e) => {
    let [pId, bId] = e.target.id.split("-");

    switch (bId) {
      case "rPlus":
        console.log("Add Resource");
        break;
      case "rMinus":
        console.log("Subtract Resource");
        break;
      case "hPlus":
        console.log("Add Health");
        break;
      case "hMinus":
        console.log("Subtract Health");
        break;
      default:
        console.log("Invalid Button id passed");
        break;
    }
  };
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
        className="col-10"
        style={{
          borderRadius: "10px",
          border: "3px solid #525252",
          fontFamily: "EarthMomma",
          color: "black",
          backgroundColor: "#f0f0f0",
        }}
      >
        <Card.Header>
          <Row>
            <Col>
              <p style={{ fontSize: "1em",fontFamily:'Pixelmania' }}>
                {props.player.name.toUpperCase() || "NO NAME"}
              </p>
            </Col>
            <Col>
              <Row>
                <p style={{ fontSize: ".5em" }}>HP: {props.player.health} </p>
              </Row>
              <Row>
                <p style={{ fontSize: ".5em" }}>
                  RES: {props.player.resources}{" "}
                </p>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5 style={{ fontSize: ".5em", fontFamily: "arial" }}>
                {props.player.description}
              </h5>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Row style={{ borderBottom: "2px solid black" }}>
            <Col>
              <p style={{ fontSize: ".4em" }}>HP</p>
            </Col>

            <Col>
              <p style={{ fontSize: ".5em" }}>{props.player.health} </p>
            </Col>

            {/* TRACK PLAYER"S HEALTH HERE */}
          </Row>

          <Row style={{ marginTop: "5px" }}>
            {/* Skills */}
            <Col>
              <Row style={{ borderBottom: "1px dashed grey" }}>
                <Col>
                  <h5>
                    {props.skills[0]
                      ? `${props.skills[0].toUpperCase()} + 2`
                      : ""}
                  </h5>
                </Col>

                <Col>
                  <h5>
                    {props.skills[1]
                      ? `${props.skills[1].toUpperCase()} + 1`
                      : ""}
                  </h5>
                </Col>
              </Row>
              <Row style={{ borderBottom: "1px dashed grey" }}>
                <Col>
                  <h5>
                    {props.skills[2]
                      ? `${props.skills[2].toUpperCase()} - 1`
                      : ""}
                  </h5>
                </Col>

                <Col>
                  <h5>
                    {props.skills[3]
                      ? `${props.skills[0].toUpperCase()} - 2`
                      : ""}
                  </h5>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
        {/* <Card.Footer>
          <Row>
            <Col>
              <p style={{ fontSize: ".5em" }}>RESOURCES:</p>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button
                variant="dark"
                size="sm"
                id={`${props.player.id}-rPlus`}
                onClick={resourceHandler}
              >
                +
              </Button>
            </Col>

            <h5>{formatRes()}</h5>
            <Col>
              <Button
                variant="light"
                size="sm"
                id={`${props.player.id}-rMinus`}
                onClick={resourceHandler}
              >
                -
              </Button>
            </Col>
          </Row>
        </Card.Footer> */}
      </Card>
    </React.Fragment>
  );
}
export default PlayerCard;
