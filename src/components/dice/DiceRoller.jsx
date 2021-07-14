import React from "react";
import {Col, Row} from "react-bootstrap";
import ReactDice from "react-dice-complete";
import "react-dice-complete/dist/react-dice-complete.css";

class DiceRoller extends React.PureComponent {
  rollDoneCallback=(dice)=>{
      console.log(dice)
  }
    render() {
    return (
      <React.Fragment>
        <Row>
          <Col>
          <h5>Youngest Player</h5>
            <div>
              <ReactDice
              faceColor='white'
              dotColor='black'
              outline='black'
              defaultRoll={6}
              rollTime={.5}
                numDice={2}
                rollDone={this.rollDoneCallback}
                ref={(dice) => (this.reactDice = dice)}
              />
            </div>
          </Col>
          <Col>
          <h5>Middle Player</h5>
            <div>
              <ReactDice
              faceColor='white'
              dotColor='black'
              outline='black'
              defaultRoll={6}
              rollTime={.5}
                numDice={2}
                rollDone={this.rollDoneCallback}
                ref={(dice) => (this.reactDice = dice)}
              />
            </div>
          </Col>
          <Col>
          <h5>Oldest Player</h5>
            <div>
              <ReactDice
              faceColor='white'
              dotColor='black'
              outline='black'
              defaultRoll={6}
              rollTime={.5}
                numDice={2}
                rollDone={this.rollDoneCallback}
                ref={(dice) => (this.reactDice = dice)}
              />
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default DiceRoller;
