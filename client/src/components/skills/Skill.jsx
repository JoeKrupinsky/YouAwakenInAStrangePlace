import React from "react";
import "react-dice-complete/dist/react-dice-complete.css";
import { Container, Row, Button, ButtonGroup, Card } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";

class Skill extends React.Component {
  render(props) {
    let showResult = (x, y, z, result) => {
      let response = "";
      toast.remove()
      if (result <= 6) {
        response = toast.error(
          `Uh-oh, looks like you suck at ${
            this.props.name
          }! You rolled a ${result} (${x}+${y}${z < 0 ? "-" : "+"}${Math.abs(
            z
          )})`,
          {
            duration: 3000,
            style: {
              background: "red",
              color: "white",
            },
          }
        );
      } else if (result >= 7 && result <= 9) {
        response = toast(
          `You tried ${
            this.props.name
          } and it went...fine.  You rolled a ${result} (${x}+${y}${
            z < 0 ? "-" : "+"
          }${Math.abs(z)})`,
          {
            duration: 3000,
            style: {
              background: "blue",
              color: "white",
            },
          }
        );
      } else if (result > 9) {
        response = toast.success(
          `You are awesome at ${
            this.props.name
          }!  You rolled a ${result} (${x}+${y}${z < 0 ? "-" : "+"}${Math.abs(
            z
          )})`,
          { duration: 3000,style:{
            background:'green',
            color:'white'
          }  }
        );
      } else {
        response = toast.error("Oops! Something broke...");
      }
      return response;
    };
    let rollSkill = (e) => {
      let id = e.target.id;
      let dice1 = Math.floor(Math.random() * 6) + 1;
      let dice2 = Math.floor(Math.random() * 6) + 1;
      let modifier = 0;
      switch (id) {
        case `${this.props.name}-Minus2`:
          modifier = -2;
          break;
        case `${this.props.name}-Minus1`:
          modifier = -1;
          break;
        case `${this.props.name}-Plus1`:
          modifier = 1;
          break;
        case `${this.props.name}-Plus2`:
          modifier = 2;
          break;
        default:
          break;
      }
      let result = dice1 + dice2 + modifier;
      // alert(`You rolled a ${result} (${dice1}+${dice2}+${modifier})`);
      return showResult(dice1, dice2, modifier, result);
    };

    return (
      <React.Fragment>
        <Toaster />
        <Card style={{width:'40%'}}>
          <Card.Body>
            <Container>
              <Row>
                <Button
                  disabled={true}
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    border: "1px solid black",
                    borderRadius: "5px",
                    padding: "5px",
                    width: "30%",
                  }}
                >
                  {this.props.name.toUpperCase()}
                </Button>

                <ButtonGroup style={{ marginLeft: "1em" }}>
                  <Button
                    id={this.props.name + "-Minus2"}
                    variant="danger"
                    size="lg"
                    onClick={(e) => rollSkill(e)}
                  >
                    -2
                  </Button>
                  <Button
                    id={this.props.name + "-Minus1"}
                    variant="danger"
                    size="lg"
                    onClick={(e) => rollSkill(e)}
                  >
                    -1
                  </Button>
                  <Button
                    id={this.props.name + "-Base"}
                    variant="primary"
                    size="lg"
                    onClick={(e) => rollSkill(e)}
                  >
                    Base
                  </Button>
                  <Button
                    id={this.props.name + "-Plus1"}
                    variant="success"
                    size="lg"
                    onClick={(e) => rollSkill(e)}
                  >
                    +1
                  </Button>
                  <Button
                    id={this.props.name + "-Plus2"}
                    variant="success"
                    size="lg"
                    onClick={(e) => rollSkill(e)}
                  >
                    +2
                  </Button>
                </ButtonGroup>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}
export default Skill;
