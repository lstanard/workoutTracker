import * as actionTypes from '../actions/types';

// TODO: Remove when done styling/testing
const initialState = {
  currentWorkout: {
    title: 'Name',
    notes: '',
    exercises: []
  },
  workouts: []
};

export default function workouts(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_WORKOUTS_SUCCESS:
      return {
        ...state,
        workouts: [
          ...state.workouts,
          ...action.payload.data.workouts
        ]
      }
    case actionTypes.ADD_WORKOUT:
      return {
        ...state,
        workouts: [
          ...state.workouts,
          action.workout
        ]
      }
    case actionTypes.UPDATE_CURRENTWORKOUT:
      return {
        ...state,
        currentWorkout: action.workout
      }
    default:
      return state;
  }
}
