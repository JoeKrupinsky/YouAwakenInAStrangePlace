import {render} from "@testing-library/react";
import React, {useState} from "react";
import {Col, Row, Button, ButtonGroup, Container} from "react-bootstrap";
import ReactDice from "react-dice-complete";
import "react-dice-complete/dist/react-dice-complete.css";

class SkillDice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      modifier: 0,
      resultColor: "black",
    };
  }
  rollDoneCallback = (dice) => {
    console.log(dice);
    this.setState((prevState) => {
      let newState = {...prevState};
      let newNum = Number(dice) + Number(this.state.modifier);
      let newColor;
      if (newNum <= 6) {
        newColor = "red";
      } else if (newNum > 6 && newNum <= 9) {
        newColor = "blue";
      } else {
        newColor = "green";
      }
      newState.result = newNum;
      newState.resultColor = newColor;
      return newState;
    });
  };
  setModifier = (val) => {
    this.setState({modifier: val});
  };
  getResultColor = () => {};
  render(props) {
    return (
      <React.Fragment>
        <Container style={{fontFamily: "TypeWriter"}}>
          <Row></Row>
          <Row>
            <Col></Col>
            <Row>
              <Col>
                <Button
                  size="sm"
                  variant="success"
                  onClick={(e) => {
                    this.setModifier(-2);
                  }}
                >
                  -2
                </Button>
              </Col>
              <Col>
                <Button
                  size="sm"
                  variant="success"
                  onClick={(e) => {
                    this.setModifier(-1);
                  }}
                >
                  -1
                </Button>
              </Col>
              <Col>
                <Button
                  size="sm"
                  variant="success"
                  onClick={(e) => {
                    this.setModifier(0);
                  }}
                >
                  0
                </Button>
              </Col>
              <Col>
                <Button
                  size="sm"
                  variant="success"
                  onClick={(e) => {
                    this.setModifier(1);
                  }}
                >
                  +1
                </Button>
              </Col>
              <Col>
                <Button
                  size="sm"
                  variant="success"
                  onClick={(e) => {
                    this.setModifier(2);
                  }}
                >
                  +2
                </Button>
              </Col>
            </Row>
            <Col></Col>
          </Row>
          <Row>--------------------------------------------</Row>
          <Row>
            <Col>
              <h3>
                CHECK: {this.props.currentSkill}{" "}
                {this.state.modifier >= 0 ? "+" : ""} {this.state.modifier}{" "}
              </h3>
            </Col>
            <Col>
              <div>
                <ReactDice
                  faceColor="white"
                  dotColor="black"
                  outline="black"
                  dieSize={60}
                  defaultRoll={6}
                  rollTime={1}
                  numDice={2}
                  rollDone={this.rollDoneCallback}
                  ref={(dice) => (this.reactDice = dice)}
                />
              </div>
            </Col>
            <Col>
              {this.state.result == 0 ? (
                <h3>Result:</h3>
              ) : (
                <h3 style={{color: this.state.resultColor}}>
                  Result: {this.state.result}
                </h3>
              )}
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <h4 style={{color: "red"}}>Under 7: Failure |</h4>
            <h4 style={{color: "blue"}}>| 7 to 9: Mixed Success |</h4>{" "}
            <h4 style={{color: "green"}}>| 10 or Higher: Success</h4>
            <Col></Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
export default SkillDice;
