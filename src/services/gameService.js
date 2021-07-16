import axios from "axios";
import * as wSvc from "./worldService";
import * as pSvc from "./playerService";
import * as smSvc from "./statementService";
import * as kSvc from "./skillService";
import { ENUMMEMBER_TYPES } from "@babel/types";

let gameObject = {
  world: {
    genre: "",
    adjective: "",
    location: "",
    statements: ["", "", ""],
  },
  players: {
    player1: {
      name: "",
      description: "",
      health: "",
      resources: "",
      skills: [],
    },
    player2: {
      name: "",
      description: "",
      health: "",
      resources: "",
      skills: [],
    },
    player3: {
      name: "",
      description: "",
      health: "",
      resources: "",
      skills: [],
    },
  },
  current: false,
};
const initializeGame = async () => {
  await getWorld();
  await getStatements();
  await getPlayers();
  await getSkills();

  console.log(gameObject);
};

const getWorld = () => {
  wSvc.getAll().then(onGetWorldSuccess).catch(onGetWorldError);
};
const onGetWorldSuccess = (data) => {
  //
  console.log(world);
};
const onGetWorldError = (err) => {
  return { message: err };
};
const getStatements = (world) => {
  smSvc.getAll().then(onGetStatementsSuccess).catch(onGetStatementsError);
};
const onGetStatementsSuccess = (data) => {
  //
};
const onGetStatementsError = () => {};
const getPlayers = () => {};
const onGetPlayersSuccess = (world) => {
  //
};
const onGetPlayersError = () => {};

const getSkills = () => {};
const onGetSkillsSuccess = (world) => {
  //
};
const onGetSkillsError = () => {};
