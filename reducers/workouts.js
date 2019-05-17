import * as actionTypes from '../actions/types';

const initialState = [];

export default function workouts(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_WORKOUT:
      return [
        ...state,
        {
          ...action.workout
        }
      ];
    default:
      return state;
  }
}
