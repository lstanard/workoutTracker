import * as actionTypes from './types';

// Action Creators
export function addWorkout(workout) {
  return {
    type: actionTypes.ADD_WORKOUT,
    workout
  }
}
