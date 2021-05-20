import React from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import Skill from "./Skill";

class SkillTable extends React.Component {
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
    return (
      <tr>
        <Skill name={name} />
      </tr>
    );
  };
  render(props) {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col >
              <h3>Player 1</h3>
              <Table>
                  {this.state.mappedSkills[0]}
                  {this.state.mappedSkills[1]}
                  {this.state.mappedSkills[2]}
                  {this.state.mappedSkills[3]}
                  </Table>
            </Col>
            <Col>
              <h3>Player 2 Skills</h3>
              <Table name="p2-skills">

                  {this.state.mappedSkills[4]}
                  {this.state.mappedSkills[5]}
                  {this.state.mappedSkills[6]}
                  {this.state.mappedSkills[7]}

              </Table>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Player 3 Skills</h3>
              <Table name="p3-skills">
                {this.state.mappedSkills[8]}
                {this.state.mappedSkills[9]}
                {this.state.mappedSkills[10]}
                {this.state.mappedSkills[11]}
              </Table>
            </Col>
            <Col>
              <h3>Player 4 Skills</h3>
              <Table name="gm-skills">
                {this.state.mappedSkills[12]}
                {this.state.mappedSkills[13]}
                {this.state.mappedSkills[14]}
                {this.state.mappedSkills[15]}
              </Table>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
export default SkillTable;
