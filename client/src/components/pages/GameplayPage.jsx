import React from "react";
import {Card} from "react-bootstrap";

class GameplayPage extends React.Component {
  componentDidMount=()=>{
    console.log(this.props.gameInfo);
  }
  render(props) {
    return <React.Fragment>HELLO</React.Fragment>;
  }
}
export default GameplayPage;
