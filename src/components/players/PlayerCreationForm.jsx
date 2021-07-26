import React from "react";
import {Container, Button, Row, Col, FormControl} from "react-bootstrap";
import {Formik} from "formik";

const PlayerCreationForm = (props) => (
  <div>
    <Formik
      initialValues={{
        names:['','',''],
        descriptions:['','','']
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
                  <label>PLAYER ONE IS...</label>
                </Row>
                <Row>
                  <FormControl
                    type="text"
                    style={{color: "black", margin: "5%",fontFamily:'none'}}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.names[0]}
                    name="names[0]"
                    placeholder='High Roll'
                  />
                  {props.errors.names && (
                    <div id="feedback">{props.errors.names}</div>
                  )}
                </Row>
                <Row style={{padding: "5%"}}>
                  <label>
                    DESCRIBE YOURSELF,{" "}
                    {props.values.names[0].split(" ")[0].toUpperCase()||"PLAYER ONE"}
                  </label>
                </Row>
                <Row>
                  <FormControl
                    as="textarea"
                    size="lg"
                    type="text"
                    style={{color: "black", margin: "5%",fontFamily:'none'}}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.descriptions[0]}
                    name="descriptions[0]"
                  />
                  {props.errors.descriptions && (
                    <div id="feedback">{props.errors.descriptions}</div>
                  )}
                </Row>
              </Col>
              <Col style={{border: "2px solid #8A959E", borderRadius: "10px"}}>
                <Row style={{padding: "5%"}}>
                  <label>PLAYER TWO IS...</label>
                </Row>
                <Row>
                  <FormControl
                    size="lg"
                    type="text"
                    style={{color: "black", margin: "5%",fontFamily:'none'}}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.names[1]}
                    name="names[1]"
                    placeholder='Middle Roll'
                  />
                  {props.errors.names && (
                    <div id="feedback">{props.errors.names}</div>
                  )}
                </Row>
                <Row style={{padding: "5%"}}>
                  <label>
                    DESCRIBE YOURSELF,{" "}
                    {props.values.names[1].split(" ")[0].toUpperCase()||'PLAYER TWO'}
                  </label>
                </Row>
                <Row>
                  <FormControl
                    as="textarea"
                    size="lg"
                    type="text"
                    style={{color: "black", margin: "5%",fontFamily:'none'}}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.descriptions[1]}
                    name="descriptions[1]"
                  />
                  {props.errors.descriptions && (
                    <div id="feedback">{props.errors.descriptions}</div>
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
                  <label>PLAYER THREE IS...</label>
                </Row>
                <Row>
                  <FormControl
                    type="text"
                    style={{color: "black", margin: "5%",fontFamily:'none'}}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.names[2]}
                    name="names[2]"
                    placeholder={'Low Roll'}
                  />
                  {props.errors.names && (
                    <div id="feedback">{props.errors.names}</div>
                  )}
                </Row>
                <Row style={{padding: "5%"}}>
                  <label>
                    DESCRIBE YOURSELF,{" "}
                    {props.values.names[2].split(" ")[0].toUpperCase()||"PLAYER THREE"}
                  </label>
                </Row>
                <Row>
                  <FormControl
                    as="textarea"
                    size="lg"
                    type="text"
                    style={{color: "black", margin: "5%",fontFamily:'none'}}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.descriptions[2]}
                    name="descriptions[2]"
                  />
                  {props.errors.descriptions && (
                    <div id="feedback">{props.errors.descriptions}</div>
                  )}
                </Row>
              </Col>
            </Row>

            <Row style={{marginTop:'3%'}}>
              <Col>
                <Button variant="success" type="submit">
                  NEXT...
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
