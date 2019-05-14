import * as actionTypes from '../actions/types';

const initialState = [{}];

export default function workouts(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_WORKOUT:
      return Object.assign({}, state, {
        ...action.workout
      })
    default:
      return state;
  }
}
