import { SET_USER_INPUT_DETAILS, SET_GAME_STATUS, ADD_POINTS_TO_USER, SET_PLAYER_GAMING_ORDER } from './types';

// set User Input Details
export const setuserInput = payload => {
  return {
    type: SET_USER_INPUT_DETAILS,
    payload
  };
};

// set Game Status
export const setGameStatus = payload => {
  return {
    type: SET_GAME_STATUS,
    payload
  };
};

// add Points to Users
export const addPoints = payload => {
  return {
    type: ADD_POINTS_TO_USER,
    payload
  };
};

// set Players Gaming Order
export const setPlayerGamingOrder = payload => {
  return {
    type: SET_PLAYER_GAMING_ORDER,
    payload
  };
};
