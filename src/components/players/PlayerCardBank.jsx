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
              <PlayerCard  player={{name:"TEST",description:"NONE",health:3,resources:2,skills:['run','jump','fly','kick']}} />
            </Col>
            <Col className="col-3">
              <PlayerCard  player={{name:"TEST",description:"NONE",health:5,resources:3,skills:['cry','flee','die','whatever']}}/>
            </Col>
            <Col className="col-3">
              <PlayerCard player={{name:"TEST",description:"NONE",health:10,resources:4,skills:['yee','yooo','yiss','yass']}} />
            </Col>
          </Row>{" "}
        </Container>
      </React.Fragment>
    );
  }
}
export default PlayerCardBank;
