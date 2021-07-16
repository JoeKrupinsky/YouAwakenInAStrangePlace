import React from "react";
import {Container, Row,  Col} from "react-bootstrap";
import PlayerCard from "./PlayerCard";

class PlayerCardBank extends React.Component {
  render(props) {
    return (
      <React.Fragment>
        <Container>
          <Row >
            <Col className="col-3">
              <PlayerCard  player={this.props.players.player1} skills={this.props.skills.slice(0,4)}/>
            </Col>
            <Col className="col-3">
              <PlayerCard  player={this.props.players.player2} skills={this.props.skills.slice(4,8)}/>
            </Col>
            <Col className="col-3">
              <PlayerCard player={this.props.players.player3} skills={this.props.skills.slice(8,12)}/>
            </Col>
          </Row>{" "}
        </Container>
      </React.Fragment>
    );
  }
}
export default PlayerCardBank;
