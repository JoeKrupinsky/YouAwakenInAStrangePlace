import React from "react";
import {
  CardGroup,
} from "react-bootstrap";
import Skill from "./Skill";

class DMSkillTable extends React.Component {
  state = {
    skillArr: this.props.skills,
    mappedSkills: [],
  };
  componentDidMount = () => {
    this.mapSkillArr(this.state.skillArr);
  };

  mapSkillArr = () => {
    let arr = [...this.state.skillArr];
    let newArr = [];
    arr.map((skill) => {
      return newArr.push(this.mapSkill(skill));
    });
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.mappedSkills = newArr;
      return newState;
    });
  };

  mapSkill = (name) => {
    return <Skill name={name} />;
  };
  render(props) {
    return (
      <React.Fragment style={{width:"80%"}}>
        <CardGroup style={{ marginBottom: "10px", backgroundColor: "gray" }}>
          <h2 style={{ color: "white", fontFamily: "Georgia"}}>Player 1</h2>
          {this.state.mappedSkills[0]}

          {this.state.mappedSkills[1]}

          {this.state.mappedSkills[2]}
          {this.state.mappedSkills[3]}
        </CardGroup>

        <CardGroup style={{ marginBottom: "10px", backgroundColor: "blue" }}>
          <h2 style={{ color: "white", fontFamily: "Georgia" }}>Player 2</h2>
          {this.state.mappedSkills[4]}
          {this.state.mappedSkills[5]}
          {this.state.mappedSkills[6]}
          {this.state.mappedSkills[7]}
        </CardGroup>
        <CardGroup style={{ marginBottom: "10px", backgroundColor: "green" }}>
          <h2 style={{ color: "white", fontFamily: "Georgia" }}>Player 3</h2>
          {this.state.mappedSkills[8]}
          {this.state.mappedSkills[9]}
          {this.state.mappedSkills[10]}
          {this.state.mappedSkills[11]}
        </CardGroup>

        <CardGroup style={{ marginBottom: "10px", backgroundColor: "red" }}>
          <h2 style={{ color: "white", fontFamily: "Georgia" }}>Player 4</h2>
          {this.state.mappedSkills[12]}
          {this.state.mappedSkills[13]}
          {this.state.mappedSkills[14]}
          {this.state.mappedSkills[15]}
        </CardGroup>
      </React.Fragment>
    );
  }
}
export default DMSkillTable;
