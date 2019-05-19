import * as actionTypes from './types';

// Action Creators
export function addWorkout(workout) {
  return function (dispatch) {
    // simulating API call - lots more work needed here
    return window.setTimeout(() => {
      dispatch({
        type: actionTypes.ADD_WORKOUT,
        workout
      })
    }, 0);
  }
}
