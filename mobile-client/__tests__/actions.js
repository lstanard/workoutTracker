import * as types from '../actions/types';
import * as actions from '../actions/workouts';

const workouts = [
  {
    'title': 'Workout A',
    'notes': 'Some notes',
    'dateCreated': '2019-05-28',
    'exercises': []
  }
]

describe('actions', () => {
  // https://medium.com/@netxm/test-async-redux-actions-jest-e703add2cf91
  it('should create an action to fetch workouts', () => {
    const expectedAction = {
      type: types.FETCH_WORKOUTS_SUCCESS,
      payload: {
        data: {
          workouts
        }
      }
    }
    expect(actions.fetchWorkoutsSuccess(workouts)).toEqual(expectedAction);
  });
});
