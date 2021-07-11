import React from "react";
import {Container, Card} from "react-bootstrap";

const CardLayout = (props) => {
  return (
    <Container>
      <Card
        style={{
          color: "black",
          fontFamily: "EarthMomma",
        padding:'5%',
          minWidth: "100%",
          borderRadius: "5%",
        }}
      >
          <Card.Header></Card.Header>
        <Card.Body>{props.content}</Card.Body>
      </Card>
    </Container>
  );
};
export default CardLayout;
