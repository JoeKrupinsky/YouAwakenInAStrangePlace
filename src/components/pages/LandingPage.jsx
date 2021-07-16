import React from "react";
import {Button, Container, Row, Card, Col} from "react-bootstrap";

function LandingPage(props) {
  // const startGame=()=>{
  //     console.log(props)
  // }
  return (
    <React.Fragment>
      <Container>
        <Card
          bg="light"
          style={{
            fontFamily: "EarthMomma",
            color: "black",
            borderRadius: "10px",
            padding: "5%",
          }}
        >
          <Card.Header>
            <Row>
              <Col></Col>
              <h1 style={{textShadow: "-4px 5px 11px black"}}>
                You Awaken In A Strange Place
              </h1>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
              <h5> Fully Improvised RPG for 4 Players</h5>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
              <h5>Designed by Jacob Andrews</h5>
              <Col></Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Button variant="primary" href="/setup">
                  Start A New Adventure
                </Button>
              </Col>
              <Col>
                <Button variant="success" href="/play">
                  Continue an Adventure?
                </Button>
              </Col>
              <Col>
                <Button variant="danger" href="/rules">
                  The Rules
                </Button>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col></Col>
              <Col></Col>
              <Col></Col>
            </Row>
          </Card.Footer>
        </Card>
        <p style={{fontSize: ".3em",float:'right'}}>App Design by Joe Krupinsky</p>
      </Container>
    </React.Fragment>
  );
}
export default LandingPage;
