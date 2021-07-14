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
              <PlayerCard player={this.props.players.player1} />
            </Col>
            <Col className="col-3">
              <PlayerCard player={this.props.players.player2} />
            </Col>
            <Col className="col-3">
              <PlayerCard player={this.props.players.player3} />
            </Col>
          </Row>{" "}
        </Container>
      </React.Fragment>
    );
  }
}
export default PlayerCardBank;
