import React, {useState} from "react";
import {Row, Col, Card, ButtonGroup, Button} from "react-bootstrap";

function PlayerCard(props) {
  //Set initial values for health and resources if not in localstorage
  //Otherwise, get values from localstorage
  const [health, setHealth] = useState(
    
      Number(localStorage.getItem(`${props.player.name} health`)) || props.player.health
  );
  const [resources, setResources] = useState(   
      Number(localStorage.getItem(`${props.player.name} resources`||props.player.resources))
  );

  const resourceHandler = (e) => {
    let [pId, bId] = e.target.id.split("-");
    let newRes;
    let newHealth;
    //Button handlers for health and resources
    switch (bId) {
      case "rPlus":
        newRes = resources + 1;
        localStorage.setItem(`${props.player.name} resources`, newRes);
        setResources(newRes);
        break;
      case "rMinus":
        newRes = resources - 1;
        localStorage.setItem(`${props.player.name} resources`, newRes);
        setResources(newRes);
        break;
      case "hPlus":
        newHealth = health + 1;
        localStorage.setItem(`${props.player.name} health`, newHealth);
        setHealth(newHealth);
        break;
      case "hMinus":
        newHealth = health - 1;
        localStorage.setItem(`${props.player.name} health`, newHealth);
        setHealth(newHealth);
        break;
      default:
        console.log("Invalid Button id passed");
        break;
    }
  };
  return (
    <React.Fragment>
      <Card
        className="col-10"
        style={{
          borderRadius: "10px",
          border: "3px solid #525252",
          fontFamily: "Typewriter",
          margin: "5px",
          color: "black",
          backgroundColor: health <= 0 ? "#EF7171" : "#f0f0f0",
        }}
      >
        <Card.Header>
          <Row>
            <Col>
              <p
                title={props.player.description}
                style={{fontSize: ".75em", paddingTop: "3%"}}
              >
                {props.player.name.toUpperCase() || "NO NAME"}
              </p>
            </Col>
            <Col style={{borderLeft: "2px solid gray", paddingLeft: "5%"}}>
              <Row>
                <Col>
                  {" "}
                  <p
                    style={{
                      fontSize: ".5em",
                      color: "black",
                    }}
                  >
                    Health{" "}
                    {localStorage.getItem(
                      `${props.player.name} health` 
                    )|| health}
                  </p>
                </Col>
                <Col>
                  <Button
                    size="md"
                    onClick={resourceHandler}
                    variant="outline-success"
                    id={`${props.player.id}-hPlus`}
                    disabled={health==10}
                  >
                    HEAL
                  </Button>
                </Col>
                <Col>
                  {" "}
                  <Button
                    size="md"
                    onClick={resourceHandler}
                    variant="outline-danger"
                    id={`${props.player.id}-hMinus`}
                    disabled={health==0}
                  >
                    HURT
                  </Button>
                </Col>
              </Row>
            </Col>

            <Col style={{borderLeft: "2px solid gray", paddingLeft: "5%"}}>
              <Row>
                <Col>
                  {" "}
                  <p
                    style={{
                      fontSize: ".5em",

                      color: "black",
                    }}
                  >
                    Resources{" "}
                    {localStorage.getItem(
                      `${props.player.name} resources` 
                    )|| resources}
                  </p>
                </Col>
                <Col>
                  <Button
                    size="md"
                    onClick={resourceHandler}
                    variant="outline-success"
                    id={`${props.player.id}-rPlus`}
                    disabled={resources==5}
                  >
                    FIND
                  </Button>
                </Col>
                <Col>
                  {" "}
                  <Button
                    size="md"
                    onClick={resourceHandler}
                    variant="outline-danger"
                    id={`${props.player.id}-rMinus`}
                    disabled={resources==0}
                  >
                    USE
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Row style={{marginTop: "5px"}}>
            {/* Skills */}
            <Col>
              <Row style={{borderBottom: "2px dashed grey"}}>
                <Col>
                  <h4>
                    {props.skills[0]
                      ? `${props.skills[0].toUpperCase()} + 2`
                      : ""}
                  </h4>
                </Col>

                <Col>
                  <h4>
                    {props.skills[1]
                      ? `${props.skills[1].toUpperCase()} + 1`
                      : ""}
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4>
                    {props.skills[3]
                      ? `${props.skills[3].toUpperCase()} - 2`
                      : ""}
                  </h4>
                </Col>

                <Col>
                  <h4>
                    {props.skills[2]
                      ? `${props.skills[2].toUpperCase()} - 1`
                      : ""}
                  </h4>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
export default PlayerCard;
