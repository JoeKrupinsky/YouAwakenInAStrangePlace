import React from "react";
import {Button, Container, Row, Card, Col} from "react-bootstrap";

function LandingPage(props) {
  return (
    <React.Fragment>
      <Container>
        <Card
          bg="light"
          style={{
            fontFamily: "MagnificentSerif",
            color: "black",
            borderRadius: "10px",
            padding: "5%",
          }}
        >
          <Card.Header>
            <Row>
              <Col></Col>
              <h1 style={{textShadow: "-4px 5px 11px black"}}>
               YOU AWAKEN IN A STRANGE PLACE
              </h1>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
              <h5> FULLY IMPORIVSED RPG FOR 3 PLAYERS AND A DM</h5>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
              <h5>DESIGNED BY JACOB ANDREWS</h5>
              <Col></Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Button variant="primary" size='lg' href="/setup">
                  START
                </Button>
              </Col>
              <Col>
                <Button variant="danger" size='lg' href="/rules">
                  CORE TENETS
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
