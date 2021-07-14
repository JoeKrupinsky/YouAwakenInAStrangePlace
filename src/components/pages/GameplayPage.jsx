import React from "react";
import { Tabs, Tab} from "react-bootstrap";
import SkillTableV2 from "../skills/SkillTableV2";
import PlayerCardBank from '../players/PlayerCardBank'

class GameplayPage extends React.Component {
  componentDidMount = () => {
    console.log(this.props.gameInfo);
  };
  render(props) {
    return (
      <React.Fragment>

            <Tabs
              defaultActiveKey="characters"
              transition={false}
              id="gameplay-tabs"
              style={{color:'black'}}
            >
              <Tab eventKey="characters" title="THE CHARACTERS">
                <div style={{marginTop:'5%'}}>
                  <SkillTableV2 skills={this.props.skills} />
                  <PlayerCardBank players={this.props.gameInfo.players}/>
                </div>
              </Tab>
              <Tab eventKey="world" title="THE WORLD">
                <div><h1>WORLD STUFF HERE</h1></div>
              </Tab>
              <Tab eventKey="notes" title="DM NOTES"></Tab>
            </Tabs>

      </React.Fragment>
    );
  }
}
export default GameplayPage;
