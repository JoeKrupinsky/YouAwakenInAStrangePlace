import React from "react";
import SkillV2 from "./SkillV2";
import {Container, Col, Row, ButtonGroup, Button} from "react-bootstrap";
import toast, {Toaster} from "react-hot-toast";
import SkillDice from "../dice/SkillDice";
class SkillTableV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSkill: "",
      buttonClicked: false,
      skills: this.props.skills,
      mappedSkills: [],
    };
  }
  componentDidMount = () => {
    this.mapSkillArr();
  };
  checkSkills = () => {
    if (this.state.skills[0] !== "One") {
      return this.state.mappedSkills;
    } else {
      console.log("NO");
    }
  };
  rollSkill = (e) => {
    let modifier = Number(e.target.id);
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let result = dice1 + dice2 + modifier;
    let resultString = `${modifier}+${dice1}+${dice2}=${result}`;
    console.log(resultString);
    return this.showResult(modifier, dice1, dice2, result);
  };
  showResult = (x, y, z, result) => {
    let response = "";
    toast.remove();
    if (result <= 6) {
      response = toast.error(
        `Uh-oh, looks like you suck at ${
          this.state.currentSkill
        }! You rolled a ${result} (${x}+${y}${z < 0 ? "-" : "+"}${Math.abs(
          z
        )})`,
        {
          duration: 3000,
          style: {
            background: "#EF3737",
            color: "white",
            minWidth: "100%",
            minHeight: "100px",
            fontFamily: "Georgia",
          },
        }
      );
    } else if (result >= 7 && result <= 9) {
      response = toast(
        `You tried ${
          this.state.currentSkill
        } and it went...fine.  You rolled a ${result} (${x}+${y}${
          z < 0 ? "-" : "+"
        }${Math.abs(z)})`,
        {
          duration: 3000,
          style: {
            background: "#46A4D8",
            color: "white",
            minWidth: "100%",
            minHeight: "100px",
            fontFamily: "Georgia",
          },
        }
      );
    } else if (result > 9) {
      response = toast.success(
        `You are awesome at ${
          this.state.currentSkill
        }!  You rolled a ${result} (${x}+${y}${z < 0 ? "-" : "+"}${Math.abs(
          z
        )})`,
        {
          duration: 3000,
          style: {
            background: "#31E443",
            color: "white",
            minWidth: "100%",
            minHeight: "100px",
            fontFamily: "Georgia",
          },
        }
      );
    } else {
      response = toast.error("Oops! Something broke...");
    }
    return response;
  };
  setSkillName = (e) => {
    this.setState((prevState) => {
      let newState = {...prevState};
      newState.currentSkill = e.target.innerHTML;
      newState.buttonClicked = true;
      return newState;
    });
  };
  mapSkillArr = () => {
    let arr = [...this.state.skills];
    let newArr = [];
    while (newArr.length < 16) {
      arr.map((skill) => {
        return newArr.push(this.mapSkill(skill));
      });
      this.setSkills(newArr);
    }
  };
  mapSkill = (name) => {
    return (
      <SkillV2
        skill={name.toUpperCase()}
        setSkillName={this.setSkillName}
        key={name}
      />
    );
  };
  setSkills = (newArr) => {
    this.setState((prevState) => {
      let newState = {...prevState};
      newState.mappedSkills = newArr;
      newState.ready = true;

      return newState;
    }, this.sendSignal);
  };
  sendSignal = () => {
    return this.props.readyUp;
  };

  render() {
    return (
      <React.Fragment>
        <Toaster />
        <Container style={{fontFamily: "Georgia",maxWidth:'80%'}}>
          {this.checkSkills()}
        </Container>
        <Row style={{marginTop:'20px'}}>
          <SkillDice currentSkill={this.state.currentSkill} />
        </Row>
        <p></p>

        <Row style={{marginBottom: "15px"}}></Row>
      </React.Fragment>
    );
  }
}
export default SkillTableV2;
