import React from "react";
import {SkillForm} from "./SkillForm";
import {Row, Col} from "react-bootstrap";
import * as pSvc from "../../services/playerService";

class SkillSelection extends React.Component {
  
  render(props) {
    
    const passSkillInfo = (skillObj) => {
      return this.props.submit(skillObj);
    };
    
    //WANT TO CHANGE THIS TO HAVE JUST ONE SUBMIT BUTTON
    return (
      <React.Fragment>
        <Row>
          <Col>
            <SkillForm
              name={this.props.names[0]}
              submit={passSkillInfo}
              id={0}
            />
          </Col>
          <Col>
            <SkillForm
              name={this.props.names[1]}
              submit={passSkillInfo}
              id={1}
            />
          </Col>
          <Col>
            <SkillForm
              name={this.props.names[2]}
              submit={passSkillInfo}
              id={2}
            />
          </Col>{" "}
          <Col>
            <SkillForm name="DM" submit={passSkillInfo} id={4} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default SkillSelection;
