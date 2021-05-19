import React from "react";
import { Container, Button, Row } from "react-bootstrap";
import { Formik } from "formik";

class NewGame extends React.Component {
    
    componentDidMount=()=>{
        console.log(this.props)
    }
    render(props) {
    const setPlayers = (val) =>{
        console.log(val)
        let array = [val.player1,val.player2,val.player3]
        alert(array)
    //    return  this.props.addPlayers(array)
    }
    return (
      <React.Fragment>
        <Container>
            <h1>New Game Setup</h1>
          <Formik
            initialValues={{ player1: "", player2: "", player3: "" }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                setPlayers(values)
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <Row>
                  <input
                  placeholder='Player One Name...'
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.player1}
                    style={{color:'black'}}
                    name="player1"
                  />
                  {props.errors.player1 && (
                    <div id="feedback">{props.errors.player1}</div>
                  )}
                </Row>
                <Row>
                  <input
                    type="text"
                    placeholder='Player Two Name...'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.player2}
                    style={{color:'black'}}
                    name="player2"
                  />
                  {props.errors.player2 && (
                    <div id="feedback">{props.errors.player2}</div>
                  )}
                </Row>
                <Row>
                  <input
                  placeholder='Player Three Name...'
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.player3}
                    style={{color:'black'}}
                    name="player3"
                  />
                  {props.errors.player3 && (
                    <div id="feedback">{props.errors.player3}</div>
                  )}
                </Row>
                <Row>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Row>
              </form>
            )}
          </Formik>
        </Container>
      </React.Fragment>
    );
  }
}
export default NewGame;
