import React from "react";
import {Formik} from "formik";
import {Container, Row, Col, FormControl, Button} from "react-bootstrap";

const WorldCreationForm = (props) => (
  <div>
    <Formik
      initialValues={{
        genre: "",
        adjective: "",
        location: "",
        statements:[]
      }}
      onSubmit={(values, actions) => {
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
                  <label>Genre</label>
                </Row>
                <Row>
                  <FormControl
                    type="text"
                    style={{color: "black", margin: "5%"}}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.genre}
                    name="genre"
                    placeholder='High Roll'
                  />
                  {props.errors.genre && (
                    <div id="feedback">{props.errors.genre}</div>
                  )}
                </Row>
               
              </Col>
              <Col style={{border: "2px solid #8A959E", borderRadius: "10px"}}>
                <Row style={{padding: "5%"}}>
                  <label>Adjective</label>
                </Row>
                <Row>
                  <FormControl
                    size="lg"
                    type="text"
                    style={{color: "black", margin: "5%"}}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.adjective}
                    name="adjective"
                    placeholder='Middle Roll'
                  />
                  {props.errors.adjective && (
                    <div id="feedback">{props.errors.adjective}</div>
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
                  <label>Location</label>
                </Row>
                <Row>
                  <FormControl
                    type="text"
                    style={{color: "black", margin: "5%"}}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.location}
                    name="location"
                    placeholder='Low Roll'
                  />
                  {props.errors.location && (
                    <div id="feedback">{props.errors.location}</div>
                  )}
                </Row>
              </Col>
            </Row>
            <Row style={{marginTop:'1%'}}>
                <Col></Col>
              <h4>Please make a statement about the world</h4>
              <Col></Col>
            </Row>
            <Row>
              <Col
                style={{
                  marginRight: "5%",
                  border: "2px solid #8A959E",
                  borderRadius: "10px",
                }}
              >
                <Row style={{padding: "5%"}}>
                  <label>Statement #1</label>
                </Row>
                <Row>
                  <FormControl
                  as='textarea'
                    type="text"
                    style={{color: "black", margin: "1%"}}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.statements[0]}
                    name="statements[0]"
                  />
                  {props.errors.statements && (
                    <div id="feedback">{props.errors.statements}</div>
                  )}
                </Row>
               
              </Col>
              <Col style={{border: "2px solid #8A959E", borderRadius: "10px"}}>
                <Row style={{padding: "5%"}}>
                  <label>Statement #2</label>
                </Row>
                <Row>
                  <FormControl
                    as='textarea'
                    type="text"
                    style={{color: "black", margin: "1%"}}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.statements[1]}
                    name="statements[1]"
                  />
                  {props.errors.statements && (
                    <div id="feedback">{props.errors.statements}</div>
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
                  <label>Statement #3</label>
                </Row>
                <Row>
                  <FormControl
                  as='textarea'
                    type="text"
                    style={{color: "black", margin: "1%"}}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.statements[2]}
                    name="statements[2]"
                  />
                  {props.errors.statements && (
                    <div id="feedback">{props.errors.statements}</div>
                  )}
                </Row>
              </Col>
            </Row>
            <Row style={{marginTop: "3%"}}>
              <Col>
                <Button variant="success" type="submit">
                  Lock World In
                </Button>
              </Col>
            </Row>
          </Container>
        </form>
      )}
    </Formik>
  </div>
);
export default WorldCreationForm;
