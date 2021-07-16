import React from "react";
import {Tabs, Tab, Button} from "react-bootstrap";
import SkillTableV2 from "../skills/SkillTableV2";
import PlayerCardBank from "../players/PlayerCardBank";

class GameplayPage extends React.Component {
  
  componentDidMount=async ()=>{
    await this.props.initialize();
    
  }
  state = {
    ready: this.props.ready
  };
  
  componentDidUpdate(prevProps) {
    if(prevProps.ready !== this.props.ready) {
      this.setState({ready: this.props.ready});
    }
  }
  updatePage=()=>{
    return this.forceUpdate();
  }
  render(props) {
    return (
      <React.Fragment>
        {this.props.ready ? 
        <Tabs
        defaultActiveKey="characters"
        transition={false}
        id="gameplay-tabs"
        style={{color: "black"}}
      >
        <Tab eventKey="characters" title="THE CHARACTERS">
          <div style={{marginTop: "5%"}}>
            <SkillTableV2 skills={this.props.players.skills} />
            <PlayerCardBank
              players={this.props.players}
              skills={this.props.players.skills}
            />
          </div>
        </Tab>
        <Tab eventKey="world" title="THE WORLD">
          <div>
            <h1>WORLD STUFF HERE</h1>
          </div>
        </Tab>
        <Tab eventKey="notes" title="DM NOTES"></Tab>
        <Tab eventKey="end" title="END"><Button size='lg' variant='danger' onClick={e=>{e.preventDefault();window.location.replace('/lastChance')}}>DESTROY THIS WORLD?</Button></Tab>
      </Tabs>
      :
      <h1>LOADING</h1>}
      <Button variant='danger' onClick={this.updatePage}>Force Update</Button>
      </React.Fragment>
    );
  }
}
export default GameplayPage;
