import React from "react";
import {Container, Card} from "react-bootstrap";

const CardLayout = (props) => {
  return (
    <Container>
      <Card
        style={{
          color: "black",
          fontFamily: "TypeWriter",
        padding:'5%',
          minWidth: "100%",
          borderRadius: "5%",
        }}
      >
          <Card.Header><h5>YOU AWAKEN IN A STRANGE PLACE</h5></Card.Header>
        <Card.Body>{props.content}</Card.Body>
      </Card>
    </Container>
  );
};
export default CardLayout;
