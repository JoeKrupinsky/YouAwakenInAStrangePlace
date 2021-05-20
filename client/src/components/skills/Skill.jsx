import React from "react";
import ReactDice from "react-dice-complete";
import "react-dice-complete/dist/react-dice-complete.css";
import { Container, Row, Button, Table } from "react-bootstrap";

class Skill extends React.Component {
  render(props) {
    let state = { roll: 6 };
    function rollAll() {
      this.reactDice.rollAll();
    }

    function rollDoneCallback(num) {
      console.log(num);
    }
    return (
      <div>
        <Row>
          <tr>
           
            <td>
              <ReactDice
                className="col-3"
                numDice={2}
                rollDone={rollDoneCallback}
                faceColor="white"
                dotColor="black"
                rollTime={0.5}
                outline={true}
                ref={(dice) => (this.reactDice = dice)}
              />

              <Button variant="primary" size='lg' >
                {" "}
                {this.props.name}
              </Button>
            </td>

          </tr>
        </Row>
      </div>
    );
  }
}
export default Skill;
