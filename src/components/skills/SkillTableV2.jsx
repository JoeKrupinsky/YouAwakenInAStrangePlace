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

  render() {
    return (
      <React.Fragment>
        <Toaster />
        <Container style={{fontFamily: "EarthMomma",maxWidth:'80%'}}>
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
