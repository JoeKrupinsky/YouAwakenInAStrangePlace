import axios from "axios";
import * as wSvc from "./worldService";
import * as pSvc from "./playerService";
import * as smSvc from "./statementService";
import * as kSvc from "./skillService";
import * as endService from './endService'


let gameObject = {
  world: {
    genre: "",
    adjective: "",
    location: "",
    statements: [],
  },
  players: {
    player1: {
      id: 0,
      name: "",
      description: "",
      health: "",
      resources: ""
    },
    player2: {
      id: 1,
      name: "",
      description: "",
      health: "",
      resources: ""
    },
    player3: {
      id: 2,
      name: "",
      description: "",
      health: "",
      resources: ""
    },
    skills:[]
  },
  
};
const initializeGame = async () => {
  //build game state from database
  //to be passed into GameplayPage
  await getWorld();
  await getStatements();
  await getPlayers();
  await getSkills();
  
  return gameObject;
};

const getWorld = () => {
  wSvc.getAll().then(onGetWorldSuccess).catch(onGetWorldError);
};
const onGetWorldSuccess = (response) => {
  let world = response.data[0];
  gameObject.world.genre = world.genre;
  gameObject.world.adjective = world.adjective;
  gameObject.world.location = world.location;
};
const onGetWorldError = (err) => {
  return { message: err };
};
const getStatements = (world) => {
  smSvc.getAll().then(onGetStatementsSuccess).catch(onGetStatementsError);
};
const onGetStatementsSuccess = (response) => {
  let statements = response.data;
  statements.forEach(x => {
    gameObject.world.statements.push(x.text);
  })
    ;
};
const onGetStatementsError = (err) => {
  return { message: err };
};
const getPlayers = () => {
  pSvc.getAll()
    .then(onGetPlayersSuccess)
    .catch(onGetPlayersError)
};
const onGetPlayersSuccess = (response) => {
  let playerArr = response.data;
  gameObject.players.player1 = playerArr[0];
  gameObject.players.player2 = playerArr[1];
  gameObject.players.player3 = playerArr[2];
};
const onGetPlayersError = (err) => {
  return { message: err };
};

const getSkills = () => {
  kSvc.getAll()
    .then(onGetSkillsSuccess)
    .catch(onGetSkillsError)
};
const onGetSkillsSuccess = (response) => {
  let skillArr = response.data;
  skillArr.forEach(x=>{
    gameObject.players.skills.push(x.name);
  })

};
const onGetSkillsError = (err) => {
  return { message: err };
};

const endGame =  () => {
   endService.endGame();
};

export { initializeGame }
