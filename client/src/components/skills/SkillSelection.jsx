import React from "react";
import {SkillForm} from "./SkillForm";
import {Card, Row, Col} from "react-bootstrap";

class SkillSelection extends React.Component {
  render(props) {
    const passSkillInfo=(skillObj)=>{
        return this.props.submit(skillObj);
    }
    return (
      <React.Fragment>
        <Row>
          <Col>
            <SkillForm name={this.props.names[0]} submit={passSkillInfo}/>
          </Col>
          <Col>
            <SkillForm name={this.props.names[1]} submit={passSkillInfo}/>
          </Col>
          <Col>
            <SkillForm name={this.props.names[2]} submit={passSkillInfo}/>
          </Col>{" "}
          <Col >
            <SkillForm name="DM" submit={passSkillInfo}/>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default SkillSelection;
