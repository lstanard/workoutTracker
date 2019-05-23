import * as actionTypes from '../actions/types';

// TODO: Remove when done styling/testing
const initialState = {
  currentWorkout: {
    title: 'Name',
    notes: '',
    exercises: [
      {
        name: 'Bench Press',
        sets: [{
          weight: 135,
          reps: 6,
        },
        {
          weight: 135,
          reps: 6,
        },
        {
          weight: 135,
          reps: 4,
        },
        {
          weight: 135,
          reps: 4,
        }]
      },
      {
        name: 'Squat',
        sets: [{
          weight: 185,
          reps: 6,
        },
        {
          weight: 185,
          reps: 6,
        },
        {
          weight: 185,
          reps: 5,
        },
        {
          weight: 185,
          reps: 4,
        }]
      },
      {
        name: 'Barbell Row',
        sets: [{
          weight: 185,
          reps: 6,
        },
        {
          weight: 185,
          reps: 6,
        },
        {
          weight: 185,
          reps: 5,
        },
        {
          weight: 185,
          reps: 4,
        }]
      }
    ]
  },
  workouts: [
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
  ]
};

export default function workouts(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_WORKOUT:
      return [
        ...state,
        {
          ...action.workout
        }
      ];
    case actionTypes.UPDATE_CURRENTWORKOUT:
      return {
        ...state,
        currentWorkout: action.workout
      }
    default:
      return state;
  }
}
