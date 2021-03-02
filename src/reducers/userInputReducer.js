import { SET_USER_INPUT_DETAILS, SET_GAME_STATUS, ADD_POINTS_TO_USER, SET_PLAYER_GAMING_ORDER } from '../actions/types';

const initialState = {
  userInputDetails: {},
  allPlayers: [],
  gameStatus: false,
  userPoints: 0,
  playersGamingOrder: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INPUT_DETAILS:
      let length = Number(action.payload.noOfPlayers);
      let newObj = {};
      let newArray = [];
      for (let i = 1; i <= length; i++) {
        newArray.push({ key: i, playerName: 'Player ' + i, score: 0 });
      }
      newObj = newArray;
      return {
        ...state,
        userInputDetails: action.payload,
        allPlayers: newObj
      };
    case SET_GAME_STATUS:
      return {
        ...state,
        gameStatus: action.payload
      };
    case ADD_POINTS_TO_USER:
      let rank = localStorage.getItem('rank');
      const index = state.allPlayers.findIndex(todo => todo.playerName === action.payload.user);
      const oldArray = [...state.allPlayers];
      let matched = state.allPlayers.filter(item => {
        return item.playerName === action.payload.user;
      });
      if (!matched[0].rank) {
        oldArray[index].score = state.allPlayers[index].score + action.payload.points;
        oldArray[index].lastMove = action.payload.lastMove;
        oldArray[index].skipMove = action.payload.skipMove;
        if (oldArray[index].score >= Number(state.userInputDetails.winPoint)) {
          oldArray[index].rank = rank;
          rank = Number(rank) + 1;
          localStorage.setItem('rank', rank);
        }
      }
      return {
        ...state,
        allPlayers: oldArray
      };
    case SET_PLAYER_GAMING_ORDER:
      return {
        ...state,
        playersGamingOrder: action.payload
      };
    default:
      return state;
  }
};
