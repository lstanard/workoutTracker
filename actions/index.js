import * as actionTypes from './types';

// Action Creators
export function addWorkout(workout) {
  return function (dispatch) {
    return new Promise((resolve) => {
      dispatch({
        type: actionTypes.ADD_WORKOUT,
        workout
      });
      resolve();
    });
  }
}

export function updateCurrentWorkout(workout) {
  return function (dispatch) {
    dispatch({
      type: actionTypes.UPDATE_CURRENTWORKOUT,
      workout
    });
  }
}
