import React from "react";
import { SkillForm } from "./SkillForm";
import { Row, Col } from "react-bootstrap";
import * as pSvc from "../../services/playerService";

class SkillSelection extends React.Component {
  componentDidMount = () => {
    pSvc
      .getAll()
      .then((res) => {this.onPlayerGetSuccess})
      .catch((err) => {this.onPlayerGetError});
  };
  onPlayerGetSuccess = (response) => {
    debugger;
    console.log(response);
  };
  onPlayerGetError = (err) => {
    debugger;
    console.log(err);
  };
  render(props) {
    
    const passSkillInfo = (skillObj) => {
      return this.props.submit(skillObj);
    };

    return (
      <React.Fragment>
        <Row>
          <Col>
            <SkillForm name={this.props.names[0]} submit={passSkillInfo} />
          </Col>
          <Col>
            <SkillForm name={this.props.names[1]} submit={passSkillInfo} />
          </Col>
          <Col>
            <SkillForm name={this.props.names[2]} submit={passSkillInfo} />
          </Col>{" "}
          <Col>
            <SkillForm name="DM" submit={passSkillInfo} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default SkillSelection;
