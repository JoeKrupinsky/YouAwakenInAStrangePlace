import React from "react";
import {Card, Row, Col, Button} from "react-bootstrap";

class RulesPage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Card style={{color: "black", fontFamily: "Typewriter"}}>
          <Card.Header>
            <h1>CORE TENETS</h1>
          </Card.Header>
          <Card.Body style={{paddingLeft: "3%"}}>
            <Row>
              <h2>
                1. Everyone comes to the game <b>unprepared</b>.
              </h2>
            </Row>
            <Row>
              <h2>
                2. Anything <b>said</b> about the world is <b>true</b> about the
                world.
              </h2>
            </Row>
            <Row>
              <h2>
                3. The game must be finished in <b>one session</b>.
              </h2>
            </Row>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col>
                <h5>
                  This app is designed to be used in conjuction with the{" "}
                  <b>You Awaken in a Strange Place</b> pdf found{" "}
                  <a
                    href="https://tummy-boy.itch.io/you-awaken-in-a-strange-place"
                    target="_blank"
                    rel="noreferrer"
                  >
                    HERE
                  </a>
                  .
                </h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>If you enjoy the game, please support it by donating!</h5>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
        <Row>
          <Col>
            <Button
              variant="primary"
              size="sm"
              onClick={(e) => window.location.replace("/")}
            >
              GO BACK
            </Button>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default RulesPage;
