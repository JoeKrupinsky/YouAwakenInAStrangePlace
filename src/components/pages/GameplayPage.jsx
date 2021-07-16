import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import SkillTableV2 from "../skills/SkillTableV2";
import PlayerCardBank from "../players/PlayerCardBank";

class GameplayPage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      "world":{
        "genre":'',
        'adjective':'',
        'location':'',
        'statements':['','','']
      },
      "players":{
        'player1':{'name':'','description':'','health':'','resources':''},
        'player2':{'name':'','description':'','health':'','resources':''},
        'player3':{'name':'','description':'','health':'','resources':''}
      },
      'skills':[''],
      'current':false
    };
  }
  componentDidMount = () => {
    if(!this.state.current){
      alert('new game!')
    }
  };
  render(props) {
    return (
      <React.Fragment>
        <Tabs
          defaultActiveKey="characters"
          transition={false}
          id="gameplay-tabs"
          style={{ color: "black" }}
        >
          <Tab eventKey="characters" title="THE CHARACTERS">
            <div style={{ marginTop: "5%" }}>
              <SkillTableV2
                skills={[
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                ]}
              />
              <PlayerCardBank />
            </div>
          </Tab>
          <Tab eventKey="world" title="THE WORLD">
            <div>
              <h1>WORLD STUFF HERE</h1>
            </div>
          </Tab>
          <Tab eventKey="notes" title="DM NOTES"></Tab>
        </Tabs>
      </React.Fragment>
    );
  }
}
export default GameplayPage;
