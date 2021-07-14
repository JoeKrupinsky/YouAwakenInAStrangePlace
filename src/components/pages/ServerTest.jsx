import React from "react";
import {Button} from "react-bootstrap";
import {add, get, getAll, reset} from "../../services/skillService";

class ServerTest extends React.Component {
  testMethod = () => {

  }
  render() {
    return (
      <Button variant="primary" onClick={this.testMethod}>
        TEST YOUR SHIT HERE
      </Button>
    );
  }
}
export default ServerTest;
