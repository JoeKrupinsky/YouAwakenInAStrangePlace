import React from 'react'
import {Jumbotron,Button,Container,Row} from 'react-bootstrap'

function LandingPage(props){
    const startGame=()=>{
        console.log(props)
    }
    return <React.Fragment>
        
        <Container>
            <Row>
            <Jumbotron fluid style={{color:'black'}}>You Awaken In A Strange Place</Jumbotron>
            </Row>
            <Row>
            <Button variant="primary" onClick={startGame}>Start a New Adventure</Button>
            </Row>
        </Container>
    </React.Fragment>
}
export default LandingPage