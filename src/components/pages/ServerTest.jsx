import React from "react";
import {Button, Row, Col} from "react-bootstrap";
import * as skillService from "../../services/skillService";
import * as playerService from "../../services/playerService";

class ServerTest extends React.Component {
  skillTest = () => {
    //skillService.getAll();
  };
  statementTest = () => {};
  playerTest = () => {
    //playerService.getAll();
    // playerService
    //   .add({name: "New data", description: "Added for new test"})
    //   .then((id) => {
    //     playerService.get({id: id})
    //     .then((data)=>{playerService.remove({"id":data.data.id})})
    //     .catch((err)=>{console.log(err)});
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    //playerService.get({id:14})
    // playerService.getAll();
    // playerService.reset();
    // playerService.getAll();
  };
  worldTest = () => {};
  bridgeTest = () => {};
  heroTest = () => {};

  render() {
    return (
      <React.Fragment>
        <Row>
          <Button variant="primary" onClick={this.skillTest}>
            WORLDS
          </Button>
          <Button variant="primary" onClick={this.statementTest}>
            STATEMENTS
          </Button>
          <Button variant="primary" onClick={this.playerTest}>
            PLAYERS
          </Button>
        </Row>
        <Row>
          <Button variant="primary" onClick={this.testMethod}>
            SKILLS
          </Button>
          <Button variant="primary" onClick={this.testMethod}>
            BRIDGE
          </Button>
          <Button variant="primary" onClick={this.testMethod}>
            HEROES
          </Button>
        </Row>
      </React.Fragment>
    );
  }
}
export default ServerTest;
