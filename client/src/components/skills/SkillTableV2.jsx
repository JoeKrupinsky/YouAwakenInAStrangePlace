import React from "react";
import SkillV2 from './SkillV2';
import {Container,Col,Row,ButtonGroup,Button,Jumbotron} from 'react-bootstrap';
import toast, { Toaster } from "react-hot-toast";
class SkillTableV2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentSkill:'SKILL CHECK',
            buttonClicked:false,
            mappedSkills:[]
        }
    }
    componentDidMount=()=>{
      if(this.state.mappedSkills.length > 0)
      {
        return;
      }
      else
      {
        this.mapSkillArr();
      }
    }
    rollSkill = (e) => {
        let modifier = Number(e.target.id);
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;
        let result = dice1+dice2+modifier;
        let resultString = `${modifier}+${dice1}+${dice2}=${result}`;
        console.log(resultString)
        return this.showResult(modifier,dice1,dice2,result);
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
                minWidth:"100%",
                minHeight:"100px"
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
                minWidth:"100%",
                minHeight:"100px"
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
                minWidth:"100%",
                minHeight:"100px"
              },
            }
          );
        } else {
          response = toast.error("Oops! Something broke...");
        }
        return response;
      };
      setSkillName=(e)=>{
       
        this.setState((prevState)=>{
            let newState = {...prevState};
            newState.currentSkill = e.target.innerHTML;
            newState.buttonClicked = true;
            return newState;
        })
    }
    mapSkillArr = () => {
      let arr = [...this.props.skills];
      let newArr = [];
      arr.map((skill) => {
        return newArr.push(this.mapSkill(skill));
      });
      this.setState((prevState) => {
        let newState = { ...prevState };
        newState.mappedSkills = newArr;
        return newState;
      });
    };
    mapSkill = (name) => {
      return (       
          <SkillV2  skill={name.toUpperCase()} setSkillName={this.setSkillName} key={name}/>
      );
    };

    render(){
        
        return <React.Fragment>
            <Toaster  />
            <Jumbotron style={{minWidth:"60%",color:"black",fontSize:"2em"}}>
                
               SKILL BANK
                
            </Jumbotron>
            <Container style={{fontFamily:"Pixelmania"}}>
                
                <Row>
                  {this.state.mappedSkills.length > 0 ?
                  this.state.mappedSkills:
                  <p>Skills are loading</p>  
                }
                </Row>
                
                
                
            </Container>
            <p></p>
            <Button variant='white' style={{color:"white",fontSize:'1em'}}>{`${this.state.currentSkill}: `}</Button>
            <Row style={{marginBottom:"15px"}}>
              
                    <ButtonGroup onClick={this.rollSkill} style={{fontSize:'1.5em'}}>
               
               <Button   variant="danger" id="-2" style={{fontSize:'1em'}}>-2</Button>
               <Button   variant='danger' id="-1" style={{fontSize:'1em'}}>-1</Button>
               <Button   variant='primary' id="0" style={{fontSize:'1em'}}>0</Button>
               <Button   variant='success' id="1" style={{fontSize:'1em'}}>1</Button>
               <Button   variant='success' id='2' style={{fontSize:'1em'}}>2</Button>
               
           </ButtonGroup></Row>
        </React.Fragment>;
    }
}
export default SkillTableV2