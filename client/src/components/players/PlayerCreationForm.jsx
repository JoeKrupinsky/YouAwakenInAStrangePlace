import React from "react";
import {Container, Button, Row, Col, FormControl} from "react-bootstrap";
import {Formik} from "formik";

const PlayerCreationForm = (props) => (
  <div>
    <Formik
      initialValues={{
        playerOneName: "",
        playerOneDesc: "",
        playerTwoName: "",
        playerTwoDesc: "",
        playerThreeName: "",
        playerThreeDesc: "",
      }}
      onSubmit={(values, actions) => {
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   actions.setSubmitting(false);
        // }, 1000);
        return props.submit(values);
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Container>
            <Row>
              <Col
                style={{
                  marginRight: "5%",
                  border: "2px solid #8A959E",
                  borderRadius: "10px",
                }}
              >
                <Row style={{padding: "5%"}}>
                  <label>What is your name?</label>
                </Row>
                <Row>
                  <FormControl
                    type="text"
                    style={{color: "black", margin: "5%"}}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.playerOneName}
                    name="playerOneName"
                    placeholder='High Roll'
                  />
                  {props.errors.playerOneName && (
                    <div id="feedback">{props.errors.playerOneName}</div>
                  )}
                </Row>
                <Row style={{padding: "5%"}}>
                  <label>
                    Describe yourself,{" "}
                    {props.values.playerOneName.split(" ")[0]}
                  </label>
                </Row>
                <Row>
                  <FormControl
                    as="textarea"
                    size="lg"
                    type="text"
                    style={{color: "black", margin: "5%"}}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.playerOneDesc}
                    name="playerOneDesc"
                  />
                  {props.errors.playerOneDesc && (
                    <div id="feedback">{props.errors.playerOneDesc}</div>
                  )}
                </Row>
              </Col>
              <Col style={{border: "2px solid #8A959E", borderRadius: "10px"}}>
                <Row style={{padding: "5%"}}>
                  <label>What is your name?</label>
                </Row>
                <Row>
                  <FormControl
                    size="lg"
                    type="text"
                    style={{color: "black", margin: "5%"}}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.playerTwoName}
                    name="playerTwoName"
                    placeholder='Middle Roll'
                  />
                  {props.errors.playerTwoName && (
                    <div id="feedback">{props.errors.playerTwoName}</div>
                  )}
                </Row>
                <Row style={{padding: "5%"}}>
                  <label>
                    Describe yourself,{" "}
                    {props.values.playerTwoName.split(" ")[0]}
                  </label>
                </Row>
                <Row>
                  <FormControl
                    as="textarea"
                    size="lg"
                    type="text"
                    style={{color: "black", margin: "5%"}}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.playerTwoDesc}
                    name="playerTwoDesc"
                  />
                  {props.errors.playerTwoDesc && (
                    <div id="feedback">{props.errors.playerTwoDesc}</div>
                  )}
                </Row>
              </Col>

              <Col
                style={{
                  marginLeft: "5%",
                  border: "2px solid #8A959E",
                  borderRadius: "10px",
                }}
              >
                <Row style={{padding: "5%"}}>
                  <label>What is your name?</label>
                </Row>
                <Row>
                  <FormControl
                    type="text"
                    style={{color: "black", margin: "5%"}}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.playerThreeName}
                    name="playerThreeName"
                    placeholder={'Low Roll'}
                  />
                  {props.errors.playerThreeName && (
                    <div id="feedback">{props.errors.playerThreeName}</div>
                  )}
                </Row>
                <Row style={{padding: "5%"}}>
                  <label>
                    Describe yourself,{" "}
                    {props.values.playerThreeName.split(" ")[0]}
                  </label>
                </Row>
                <Row>
                  <FormControl
                    as="textarea"
                    size="lg"
                    type="text"
                    style={{color: "black", margin: "5%"}}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.playerThreeDesc}
                    name="playerThreeDesc"
                  />
                  {props.errors.playerThreeDesc && (
                    <div id="feedback">{props.errors.playerThreeDesc}</div>
                  )}
                </Row>
              </Col>
            </Row>

            <Row style={{marginTop:'3%'}}>
              <Col>
                <Button variant="success" type="submit">
                  Lock Players In
                </Button>
              </Col>
            </Row>
          </Container>
        </form>
      )}
    </Formik>
  </div>
);
export default PlayerCreationForm;
