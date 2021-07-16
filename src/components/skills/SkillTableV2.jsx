import React from "react";
import SkillV2 from "./SkillV2";
import { Container, Col, Row, ButtonGroup, Button } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
class SkillTableV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSkill: "",
      buttonClicked: false,
      ready: false,
      skills:this.props.skills,
      mappedSkills: [
      ],
    };
  }
  componentDidMount = () => {
    
    this.mapSkillArr();
  };
 checkSkills = () => {
   
   if(this.state.skills[0]!=="One")
   {
     return (this.state.mappedSkills)
   }
   else
   {
     console.log("NO")
   }
 }
  rollSkill = (e) => {
    let modifier = Number(e.target.id);
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let result = dice1 + dice2 + modifier;
    let resultString = `${modifier}+${dice1}+${dice2}=${result}`;
    console.log(resultString);
    return this.showResult(modifier, dice1, dice2, result);
  };
  showResult = (x, y, z, result) => {
    let response = "";
    toast.remove();
    if (result <= 6) {
      response = toast.error(
        `Uh-oh, looks like you suck at ${
          this.state.currentSkill
        }! You rolled a ${result} (${x}+${y}${z < 0 ? "-" : "+"}${Math.abs(
          z
        )})`,
        {
          duration: 3000,
          style: {
            background: "#EF3737",
            color: "white",
            minWidth: "100%",
            minHeight: "100px",
          },
        }
      );
    } else if (result >= 7 && result <= 9) {
      response = toast(
        `You tried ${
          this.state.currentSkill
        } and it went...fine.  You rolled a ${result} (${x}+${y}${
          z < 0 ? "-" : "+"
        }${Math.abs(z)})`,
        {
          duration: 3000,
          style: {
            background: "#46A4D8",
            color: "white",
            minWidth: "100%",
            minHeight: "100px",
          },
        }
      );
    } else if (result > 9) {
      response = toast.success(
        `You are awesome at ${
          this.state.currentSkill
        }!  You rolled a ${result} (${x}+${y}${z < 0 ? "-" : "+"}${Math.abs(
          z
        )})`,
        {
          duration: 3000,
          style: {
            background: "#31E443",
            color: "white",
            minWidth: "100%",
            minHeight: "100px",
          },
        }
      );
    } else {
      response = toast.error("Oops! Something broke...");
    }
    return response;
  };
  //blah
  setSkillName = (e) => {
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.currentSkill = e.target.innerHTML;
      newState.buttonClicked = true;
      return newState;
    });
  };
  mapSkillArr =  () => {
    let arr = [...this.state.skills];
    let newArr = [];
     arr.map((skill) => {
      return newArr.push(this.mapSkill(skill));
    })
    this.setSkills(newArr);
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
  setSkills = (newArr) => {
    
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.mappedSkills = newArr;
      newState.ready = true;

      return newState;
    },this.sendSignal);
  }
  sendSignal=()=>{
    return this.props.readyUp;
  }

  render() {
    return (
      <React.Fragment>
        <Toaster />
        <Container style={{ fontFamily: "EarthMomma" }}>
          <Row>
            <Col>{ this.checkSkills()}</Col>          
            <Col>
              <Row>
                <h3
                  style={{
                    color: "back",
                    fontFamily: "EarthMomma",
                    fontSize: "1.5eem",
                  }}
                >{`SKILL:`}</h3>
              </Row>
              <Row>
                <h2>
                  {this.state.currentSkill == ""
                    ? "NO SKILL SELECTED"
                    : this.state.currentSkill}
                </h2>
              </Row>
              <Row style={{ marginTop: "5%" }}>
                <ButtonGroup
                  onClick={this.rollSkill}
                  style={{ border: "3px solid black", padding: "1%" }}
                >
                  <Button variant="dark" size="lg" id="-2">
                    -2
                  </Button>
                  <Button variant="dark" size="lg" id="-1">
                    -1
                  </Button>
                  <Button variant="light" size="lg" id="0">
                    0
                  </Button>
                  <Button variant="dark" size="lg" id="1">
                    +1
                  </Button>
                  <Button variant="dark" size="lg" id="2">
                    +2
                  </Button>
                </ButtonGroup>
              </Row>
            </Col>
          </Row>
        </Container>
        <p></p>

        <Row style={{ marginBottom: "15px" }}></Row>
      </React.Fragment>
    );
  }
}
export default SkillTableV2;
