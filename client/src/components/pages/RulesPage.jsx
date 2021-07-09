import React from 'react'
import {Card,Row,Col} from 'react-bootstrap'

class RulesPage extends React.PureComponent
{
    render()
    {
        return <React.Fragment>
            <Card style={{color:'black',fontFamily:'Georgia'}}>
                <Card.Body>
                    <Row><Col><h3>This app is designed to be used in conjuction with the <b>You Awaken in a Strange Place</b> pdf, found <a href='https://tummy-boy.itch.io/you-awaken-in-a-strange-place' target='_blank'>HERE</a>.</h3></Col></Row>
                    <Row>
                        <Col>
                        <h3>If you enjoy the game, please support it by donating!</h3>
                        </Col>
                    </Row>

                    
                </Card.Body>
            </Card>
        </React.Fragment>;
    }
}
export default RulesPage