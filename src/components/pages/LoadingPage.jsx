import React from "react";
import {initializeGame} from "../../services/gameService";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import SkillV2 from "../skills/SkillV2";

class LoadingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loaded: false};
  }
  componentDidMount = () => {
    this.getGameInfo();
  };

  getGameInfo =  async () => {
     await initializeGame()
      .then(this.onGetStateSuccess)
      .catch(this.onGetStateError)
    console.log(this.state)
    return this.props.submit(this.state);
  };

  onGetStateSuccess = (response) => {
    this.setState((prevState) => {
      let newState = {...prevState};
      newState = response;
      newState.loaded = true;
      return newState;
    })
  };
  onGetStateError = (err) => {
    console.log(err);
  };
  
  render() {
    return (
      <React.Fragment>
        <h1>Loading...</h1>
        <h3>Please do not turn off or dismantle your computer.</h3>
        {this.state.loaded ? (
          <Link to="/play" as={Button}>
            <Button variant="success" size="lg">
              BEGIN{" "}
            </Button>
          </Link>
        ) : (
          <Button
            variant="danger"
            size="lg"
            disabled={true}
          >
            NOT YET...
          </Button>
        )}
      </React.Fragment>
    );
  }
}
export default LoadingPage;
