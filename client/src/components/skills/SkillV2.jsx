import React from "react";
import {Button, Card, Container, Row, Col} from "react-bootstrap";

class SkillV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentSkill: ""};
  }

  render(props) {
    return (
      <React.Fragment>
        <Button
          className="col-3"
          id={this.props.skill}
          key={this.props.skill}
          onClick={this.props.setSkillName}
          style={{
            color: "black",
            fontSize: ".5em",
            backgroundColor: "rgb(164, 222, 212)",
            border: "1px solid black",
            padding: "5px 15px",
          }}
        >
          {this.props.skill}{" "}
        </Button>
      </React.Fragment>
    );
  }
}

export default SkillV2;
