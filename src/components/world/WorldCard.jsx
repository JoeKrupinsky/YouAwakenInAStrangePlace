import React from 'react'
import {Col,Row,Card} from 'react-bootstrap'
export const WorldCard = (props) =>{
    return <React.Fragment>
        <Card style={{fontFamily:'EarthMomma'}}>
            <Card.Header>
                <h1>The {props.world.adjective} {props.world.location}: A {props.world.genre} adventure.</h1>
            </Card.Header>
            <Card.Body>
                <Row><h2>SOME FAKS</h2></Row>
                <Row><h4>-{props.world.statements[0].toUpperCase()}</h4></Row>
                <Row><h4>-{props.world.statements[1].toUpperCase()}</h4></Row>
                <Row><h4>-{props.world.statements[2].toUpperCase()}</h4></Row>
            </Card.Body>
        </Card>
    </React.Fragment>
}
