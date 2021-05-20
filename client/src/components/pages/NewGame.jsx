import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Formik } from "formik";

class NewGame extends React.Component {
    
    componentDidMount=()=>{
        console.log(this.props)
    }
    
    render(props) {
    const setPlayers = (val) =>{
        console.log(val)
        let array = [val.player1,val.player2,val.player3]
       this.props.add(array)
    }
    return (
      <React.Fragment>
          <Container>
          <h1 style={{backgroundColor:'white',color:'black',borderRadius:'5px'}} >Enter Character Names</h1>
          <Row style={{border:'1px solid black',borderRadius:'5px',backgroundColor:'white',color:'black'}}>
          {this.props.players.map((player,index)=>
          {        
            return <Col md='4' key={'player-'+index}>{player}</Col>
          })}
          </Row>
          </Container>
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
                <label htmlFor='player1' style={{fontSize:'0.5em'}}>Player 1 Character Name</label>
                <Row>
                  
                  <input
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
                <label htmlFor='player2' style={{fontSize:'0.5em'}}>Player 2 Character Name</label>
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
                <label htmlFor='player3' style={{fontSize:'0.5em'}}>Player 3 Character Name</label>
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
