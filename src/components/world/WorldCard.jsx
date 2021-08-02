import React, {useState, useEffect} from "react";
import {Button, Col, Row, Card, FormControl, Container} from "react-bootstrap";
import {Formik} from "formik";
export const WorldCard = (props) => {
  const [statements, setStatements] = useState(localStorage.getItem('statements').split(',')||props.world.statements);
  const [formattedStatements, setFormattedStatements] = useState([]);
  const formatStatements = () => {
    let newArr = [];
    let counter = 0;
    statements.forEach((statement) =>
      newArr.push(
        <Row key={counter++}>
          <h4>-{statement.toUpperCase()}</h4>
        </Row>
      )
    );
    console.log;
    setFormattedStatements(newArr);
  };
  if (formattedStatements.length == 0) {
    formatStatements();
  }
  const addFact = (fact) => {
    let newStatements = statements;
    newStatements.push(fact.name);
    setStatements(newStatements);
    localStorage.setItem('statements',newStatements);
    formatStatements();
  };

  return (
    <React.Fragment>
      <Card style={{fontFamily: "TypeWriter"}}>
        <Card.Header>
          <h1>
            The {props.world.adjective} {props.world.location}: A{" "}
            {props.world.genre} adventure.
          </h1>
        </Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <h2>Facts About This World</h2>
            </Row>
            {formattedStatements}
            </Container>
            <Row style={{borderTop: "2px solid black",paddingTop:'10px'}}>
              <Col>ADD NEW FACTS</Col>
              <Col>
                <Formik
                  initialValues={{name: ""}}
                  onSubmit={(values, actions) => {
                    setTimeout(() => {
                      let valCopy = values;
                      addFact(valCopy);
                      actions.resetForm();
                    }, 1000);
                  }}
                >
                  {(props) => (
                    <form onSubmit={props.handleSubmit}>
                      <Row>
                        <Col>
                          {" "}
                          <FormControl
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.name}
                            name="name"
                          />
                          {props.errors.name && (
                            <div id="feedback">{props.errors.name}</div>
                          )}
                        </Col>
                        <Col>
                          <Button variant="primary" type="submit">
                            Submit
                          </Button>
                        </Col>
                      </Row>
                    </form>
                  )}
                </Formik>
              </Col>
            </Row>
          
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};
