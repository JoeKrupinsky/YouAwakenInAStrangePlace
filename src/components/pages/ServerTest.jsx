import React from "react";
import {Button, Row, Col} from "react-bootstrap";
import * as skillService from "../../services/skillService";
import * as playerService from "../../services/playerService";
import * as wSvc from "../../services/worldService";

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
  worldTest = () => {
    // wSvc
    //   .add({genre: "horror", adjective: "spooky", location: "ghost ship"})
    //   .then((res) => {
    //      this.onWorldAddSuccess(res);
    //   })
    //   .catch((err) => {       
    //      this.onWorldAddError(err);
    //   });
    wSvc.getAll();   
  };
  // onWorldAddSuccess = (response) => {
  //   console.log(response);
  //   let newId = response.data.res[0];
  //   wSvc.get({id:newId}).then(res=>this.onWorldGetSuccess(res)).catch(err=>{this.onWorldGetError(err)});
  // }  
  // onWorldAddError=(err)=>{
  //   console.log(err);
  // }
  // onWorldGetSuccess=(response)=>{
  //   console.log(response);
  //   let newId = response.data[0].id;
  //   wSvc.remove({id:newId}).then(response=>{wSvc.get({id:newId}).then(r=>wSvc.reset())});
  // };
  // onWorldGetError=(err)=>{
  //   console.log(err)
  // };
  bridgeTest = () => {};
  heroTest = () => {};

  render() {
    return (
      <React.Fragment>
        <Row>
          <Button variant="primary" onClick={this.worldTest}>
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
          <Button variant="primary" onClick={this.skillTest}>
            SKILLS
          </Button>
          <Button variant="primary" onClick={this.bridgeTest}>
            BRIDGE
          </Button>
          <Button variant="primary" onClick={this.heroTest}>
            HEROES
          </Button>
        </Row>
      </React.Fragment>
    );
  }
}
export default ServerTest;
