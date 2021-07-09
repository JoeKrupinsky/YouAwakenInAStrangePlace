import React from "react";
import {Container, Row,Card} from "react-bootstrap";
import PlayerCard from "./PlayerCard";

class PlayerCardBank extends React.Component {
  render() {
    return <React.Fragment>
        <Container>
            <Card><Row>
              
                <PlayerCard player={{name:"Jesus Christ",desc:"This is a description",hp:'08',skills:["testing","debugging",'crying','quitting'],res:0}}/>
                <PlayerCard player={{name:"Aquaman",desc:"This is a description",hp:'03',skills:["testing","debugging",'crying','quitting'],res:3}}/>
                <PlayerCard player={{name:"Karen",desc:"This is a description",hp:'10',skills:["testing","debugging",'crying','quitting'],res:5}}/>
               
            </Row> </Card>
        </Container>
    </React.Fragment>;
  }
}
export default PlayerCardBank;
