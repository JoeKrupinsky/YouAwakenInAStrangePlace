import React from "react";
import { initializeGame } from "../../services/gameService";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SkillV2 from "../skills/SkillV2";

class LoadingPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { loaded: false, mappedSkills: [] };
  }
  componentDidMount = () => {
    this.getGameInfo();
  };
  getGameInfo = async () => {
    await initializeGame()
      .then(this.onGetStateSuccess)
      .catch(this.onGetStateError);
    await this.mapSkillArr();
    return this.props.submit(this.state);
  };
  onGetStateSuccess = (response) => {
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState = response;
      return newState;
    });
  };
  onGetStateError = (err) => {
    console.log(err);
  };
  mapSkillArr = () => {
    let arr = [...this.state.players.skills];
    let newArr = [];
    arr.map((skill) => {
      return newArr.push(this.mapSkill(skill));
    }, this.setSkills(newArr));
  };
  mapSkill = (name) => {
    return (
      <SkillV2
        skill={name.toUpperCase()}
        setSkillName={this.setSkillName}
        key={name}
      />
    );
  };
  beginGame = () => {
    window.location.replace("/play");
  };
  setSkills = (newArr) => {
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.mappedSkills = newArr;

      return newState;
    }, this.onMapSuccess);
  };
  onMapSuccess = () => {
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.loaded = true;
      return newState;
    });
  };
  onMapError = (err) => {
    console.log(err);
  };
  render() {
    return (
      <React.Fragment>
        <h1>Loading...</h1>
        <h3>Please do not turn off or dismantle your computer.</h3>
        {this.state.loaded ? (
          <Link to="/play" as={Button}>
            <Button variant="success" size="lg">BEGIN</Button>
          </Link>
        ) : (
          <Button
            variant="danger"
            size="lg"
            disabled={true}
            onClick={this.beginGame}
          >
            NOT YET...
          </Button>
        )}
      </React.Fragment>
    );
  }
}
export default LoadingPage;
