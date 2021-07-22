import React, { useState, useEffect } from "react";
import { Button, Col, Row, Card } from "react-bootstrap";
export const WorldCard = (props) => {
  const [statements, setStatements] = useState(props.world.statements);
  const [formattedStatements, setFormattedStatements] = useState([]);
  const formatStatements = () => {
    let newArr = [];
    let counter = 0;
    statements.forEach((statement) =>
      newArr.push(
        <Row key={counter++}>
          <h5>-{statement.toUpperCase()}</h5>
        </Row>
      )
    );
    console.log;
    setFormattedStatements(newArr);
  };
  if (formattedStatements.length == 0) {
    formatStatements();
  }
  const addFact = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <React.Fragment>
      <Card style={{ fontFamily: "EarthMomma" }}>
        <Card.Header>
          <h1>
            The {props.world.adjective} {props.world.location}: A{" "}
            {props.world.genre} adventure.
          </h1>
        </Card.Header>
        <Card.Body>
          <Row>
            <h2>Facts About This World</h2>
          </Row>
          {formattedStatements}
          <Row>
           
          </Row>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};
