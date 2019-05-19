import * as actionTypes from '../actions/types';

// TODO: Remove when done styling/testing
const initialState = [
  {
    title: 'StrongLifts 5x5 A',
    notes: 'Good energy',
    dateCreated: '2019-05-18',
    exercises: [
      'Squat',
      'Bench Press',
      'Barbell Row'
    ]
  },
  {
    title: 'StrongLifts 5x5 B',
    notes: 'Got to gym late',
    dateCreated: '2019-05-16',
    exercises: [
      'Squat',
      'Overhead Press',
      'Deadlift'
    ]
  },
  {
    title: 'StrongLifts 5x5 A',
    notes: '',
    dateCreated: '2019-05-14',
    exercises: [
      'Squat',
      'Bench Press',
      'Barbell Row'
    ]
  },
];

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
