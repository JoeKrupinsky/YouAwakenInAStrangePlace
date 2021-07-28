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
        variant='outline-dark'
          className="col-3"
          id={this.props.skill}
          key={this.props.skill}
          onClick={this.props.setSkillName}
          style={{
            
            fontSize: ".6em",
            borderRadius:'10px',
            border: "1px solid black",
            fontFamily:'TypeWriter',
            // margin:'1%',
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
