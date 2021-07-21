import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PlayerCard from "./PlayerCard";

class PlayerCardBank extends React.Component {
  render(props) {
    return (
      <React.Fragment>
        {this.props.players.player1.name == "Player One" ? (
          <h1>LOADING</h1>
        ) : (
          <Container>
            <Row>
              <PlayerCard
                player={this.props.players.player1}
                skills={this.props.skills.slice(0, 4)}
              />
            </Row>
            <Row>
              <PlayerCard
                player={this.props.players.player2}
                skills={this.props.skills.slice(4, 8)}
              />
            </Row>
            <Row>
              <PlayerCard
                player={this.props.players.player3}
                skills={this.props.skills.slice(8, 12)}
              />
            </Row>{" "}
            <Row>
              
              <Col>
                <h2 style={{fontFamily:'EarthMomma'}}>Common Skills</h2>
              </Col>
              <Col></Col>
            </Row>
            <Row style={{fontFamily:'PixelMania'}}>
              
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
