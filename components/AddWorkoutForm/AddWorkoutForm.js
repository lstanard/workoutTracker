import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {
  addWorkout,
  updateCurrentWorkout,
} from '../../actions';
import Button from '../Button/Button';
import globalStyles from '../../assets/styles/global';
import styles from './styles';
import colors from '../../assets/styles/colors';

import AddExerciseModal from '../AddExerciseModal/AddExerciseModal';
import WorkoutExercises from '../WorkoutExercises/WorkoutExercises';

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

  handleTitleChange = (title) => {
    let currentWorkout = Object.assign({}, this.props.currentWorkout);
    currentWorkout.title = title;
    this.props.updateCurrentWorkout(currentWorkout);
  }

  handleNotesChange = (notes) => {
    let currentWorkout = Object.assign({}, this.props.currentWorkout);
    currentWorkout.notes = notes;
    this.props.updateCurrentWorkout(currentWorkout);
  }

  handleSubmit = () => {
    let currentWorkout = Object.assign({}, this.props.currentWorkout);
    // TODO: Give workout a dateCreated property
    // TODO: Clear currentWorkout from store after
    this.props.addWorkout(currentWorkout);
    this.props.navigation.goBack();
  }

  addExercise = () => {
    this.setModalVisible(true);
  }

  render() {
    return (
      <View style={{
        padding: 30, 
        paddingTop: 0, 
        alignSelf: 'stretch' }}>
        <TextInput
          autoFocus={true}
          style={globalStyles.textInput}
          onChangeText={this.handleTitleChange}
          value={this.props.currentWorkout.title} />
        <TextInput
          style={globalStyles.textInput}
          onChangeText={this.handleNotesChange}
          value={this.props.currentWorkout.notes} />
        <View style={{ marginBottom: 10 }}>
          {this.props.currentWorkout.exercises.length > 0
            ? <WorkoutExercises
                handleRemove={this.handleExerciseRemove}
                exercises={this.props.currentWorkout.exercises} /> 
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
    addWorkout: (data) => {
      dispatch(addWorkout(data))
    },
    updateCurrentWorkout: (data) => {
      dispatch(updateCurrentWorkout(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddWorkoutForm);
