import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {
  addWorkout,
  updateCurrentWorkout,
} from '../../actions/workouts.js';
import Button from '../Button/Button';
import styles from './styles';
import colors from '../../assets/styles/colors';

import AddExerciseModal from '../AddExerciseModal/AddExerciseModal';
import WorkoutExercises from '../WorkoutExercises/WorkoutExercises';
import FormHeader from './FormHeader';

const emptyWorkout = {
  title: '',
  notes: '',
  exercises: []
}

class AddWorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    }
  }

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }

  handleExerciseAdd = (exercise) => {
    let currentWorkout = Object.assign({}, this.props.currentWorkout);
    currentWorkout.exercises.push({
      name: exercise,
      sets: [{
        weight: 0,
        reps: 0
      }]
    });
    this.props.updateCurrentWorkout(currentWorkout);
  }

  handleExerciseRemove = (exercise) => {
    let currentWorkout = Object.assign({}, this.props.currentWorkout);
    currentWorkout.exercises = currentWorkout.exercises.filter((item) => {
      return item.name !== exercise.name;
    });
    this.props.updateCurrentWorkout(currentWorkout);
  }

  handleFormHeaderChange = (property, text) => {
    const { updateCurrentWorkout } = this.props;
    let currentWorkout = Object.assign({}, this.props.currentWorkout);
    currentWorkout[property] = text;
    updateCurrentWorkout(currentWorkout);
  }

  handleSubmit = () => {
    let currentWorkout = Object.assign({}, this.props.currentWorkout);
    // TODO: Give workout a dateCreated property
    this.props.addWorkout(currentWorkout, this.props.updateCurrentWorkout(emptyWorkout));
    this.props.navigation.goBack();
  }

  addExercise = () => {
    this.setModalVisible(true);
  }

  render() {
    const { currentWorkout } = this.props;

    return (
      <View style={{
        padding: 30, 
        paddingTop: 0, 
        alignSelf: 'stretch' }}>
        <FormHeader 
          handleChange={this.handleFormHeaderChange}
          currentWorkout={currentWorkout} />
        <View style={{ marginBottom: 10 }}>
          {currentWorkout.exercises && currentWorkout.exercises.length > 0
            ? <WorkoutExercises
                handleRemove={this.handleExerciseRemove}
                exercises={currentWorkout.exercises} /> 
            : <Text style={styles.emptyWorkoutMsg}>
                Tap "Add Exercise" to begin adding exercises for this workout.
            </Text>
          }
          <AddExerciseModal
            handleAdd={this.handleExerciseAdd}
            handleClose={() => this.setModalVisible(false)}
            isVisible={this.state.modalVisible} />
          <Button
            icon='ios-add-circle-outline'
            background={colors.brightBlue}
            action={this.addExercise}
            label="Add Exercise" />
        </View>
        <Button 
          action={this.handleSubmit}
          label="Save" />
      </View>
    )
  }
}

const mapStateToProps = state => {
  const workouts = state.workouts.workouts;
  const currentWorkout = state.workouts.currentWorkout;
  return { workouts, currentWorkout }
}

const mapDispatchToProps = dispatch => {
  return {
    addWorkout: (data, callback) => {
      dispatch(addWorkout(data)).then(() => {
        if (callback) callback();
      });
    },
    updateCurrentWorkout: (data) => {
      dispatch(updateCurrentWorkout(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddWorkoutForm);
