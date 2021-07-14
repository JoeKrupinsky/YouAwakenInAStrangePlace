import React from "react";
import {Button} from "react-bootstrap";

class SkillV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentSkill: ""};
  }

  render(props) {
    return (
      <React.Fragment>
        <Button
        variant='light'
          className="col-3"
          id={this.props.skill}
          key={this.props.skill}
          onClick={this.props.setSkillName}
          style={{
            color: "black",
            fontSize: ".5em",
            borderRadius:'0px',
            border: "1px solid black",
            padding: "15px 10px"
          }}
        >
          {this.props.skill}{" "}
        </Button>
      </React.Fragment>
    );
  }
}

export default SkillV2;
