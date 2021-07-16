import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import * as svc from '../../services/endService'

function ObliterationPage(props) {
    const finish = () => {
        svc.endGame();
        window.location.replace('/');
    };
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Button size='lg' variant='primary' onClick={e => {e.preventDefault();window.location.replace('/play')}} >Are you sure? You could just go back...</Button>
        </Col>
            <Col>
                <Button size='lg' variant='danger' onClick={finish}>If you REALLY want to destroy this world...</Button>
            </Col>
      </Row>
    </React.Fragment >
  );
}
export default ObliterationPage;