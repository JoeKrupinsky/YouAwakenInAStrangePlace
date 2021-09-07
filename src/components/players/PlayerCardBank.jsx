import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PlayerCard from "./PlayerCard";

class PlayerCardBank extends React.Component {
  render(props) {
    return (
      <React.Fragment >
        {this.props.players.player1.name == "Player One" ? (
          <h1>LOADING</h1>
        ) : (
          <Container style={{fontFamily:'Typewriter'}}>
            <Row>
              <PlayerCard
                player={this.props.players.player1}
                health={Number(localStorage.getItem(`${this.props.players.player1.name} health`))||this.props.players.player1.health}
                res={Number(localStorage.getItem(`${this.props.players.player1.name} resources`))||this.props.players.player1.resources}
                skills={this.props.skills.slice(0, 4)}
              />
            </Row>
            <Row>
              <PlayerCard
                player={this.props.players.player2}
                health={Number(localStorage.getItem(`${this.props.players.player2.name} health`))||this.props.players.player2.health}
                res={Number(localStorage.getItem(`${this.props.players.player2.name} resources`))||this.props.players.player2.resources}
                skills={this.props.skills.slice(4, 8)}
              />
            </Row>
            <Row>
              <PlayerCard
                player={this.props.players.player3}
                health={Number(localStorage.getItem(`${this.props.players.player3.name} health`))||this.props.players.player3.health}
                res={Number(localStorage.getItem(`${this.props.players.player3.name} resources`))||this.props.players.player3.resources}
                skills={this.props.skills.slice(8, 12)}
              />
            </Row>{" "}
            <Row>
              
              <Col>
                <h2 >COMMON SKILLS</h2>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              
              <Col>
                <h4>{this.props.skills[12].toUpperCase()}</h4>
              </Col>
              <Col>
                <h4>{this.props.skills[13].toUpperCase()}</h4>
              </Col>
              <Col>
                <h4>{this.props.skills[14].toUpperCase()}</h4>
              </Col>
              <Col>
                <h4>{this.props.skills[15].toUpperCase()}</h4>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        )}
      </React.Fragment>
    );
  }
}
export default PlayerCardBank;
