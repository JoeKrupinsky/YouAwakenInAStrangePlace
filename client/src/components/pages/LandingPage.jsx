import React from 'react'
import {Jumbotron,Button,Container,Row} from 'react-bootstrap'

function LandingPage(props){
    // const startGame=()=>{
    //     console.log(props)
    // }
    return <React.Fragment>
        <Row>
            <Jumbotron fluid style={{color:'black'}}>You Awaken In A Strange Place</Jumbotron>
            </Row>
        <Container>
            
            <Row>
            <Button variant="primary" href="/new">Start a New Adventure</Button>
            </Row>
        </Container>
    </React.Fragment>
}
export default LandingPage