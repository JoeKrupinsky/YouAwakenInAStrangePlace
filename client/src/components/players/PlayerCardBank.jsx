import React from "react";
import {Container, Row, Card} from "react-bootstrap";
import PlayerCard from "./PlayerCard";

class PlayerCardBank extends React.Component {
  render(props) {
    return (
      <React.Fragment>
        <Container>
          <Card>
            <Row>
              <PlayerCard player={this.props.players.player1} />
              <PlayerCard player={this.props.players.player2} />
              <PlayerCard player={this.props.players.player3} />
            </Row>{" "}
          </Card>
        </Container>
      </React.Fragment>
    );
  }
}
export default PlayerCardBank;
