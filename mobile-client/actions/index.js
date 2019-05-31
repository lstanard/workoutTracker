import * as actionTypes from './types';

// Action Creators
export function fetchWorkouts() {
  return (dispatch) => {
    dispatch({ type: actionTypes.FETCH_WORKOUTS });
    fetch('http://localhost:3001/workouts', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      },
    })
      .then(response => {
        return response.json()
      })
      .then(json => {
        dispatch(fetchWorkoutsSuccess(json))
      })
      .catch((error) => {
        console.log(error);
      })
  }
}

export function fetchWorkoutsSuccess(workouts) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.FETCH_WORKOUTS_SUCCESS,
      payload: { data: { workouts } }
    });
  }
}

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
