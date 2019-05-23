import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {
  addWorkout
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
      currentWorkout: {
        title: 'Name',
        notes: '',
        exercises: [
          'Bench Press',
          'Squat',
          'Barbell Row'
        ]
      }
    }
  }

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }

  handleExerciseAdd = (exercise) => {
    let exercises = this.state.currentWorkout.exercises;
    exercises.push(exercise);
    this.setState(prevState => ({
      currentWorkout: {
        ...prevState.currentWorkout,
        exercises
      }
    }));
  }

  handleExerciseRemove = (exercise) => {
    let exercises = this.state.currentWorkout.exercises;
    exercises = exercises.filter((item) => item !== exercise );
    this.setState(prevState => ({
      currentWorkout: {
        ...prevState.currentWorkout,
        exercises
      }
    }));
  }

  handleTitleChange = (title) => {
    let currentWorkout = Object.assign({}, this.state.currentWorkout);
    currentWorkout.title = title;
    this.setState({currentWorkout});
  }

  handleNotesChange = (notes) => {
    let currentWorkout = Object.assign({}, this.state.currentWorkout);
    currentWorkout.notes = notes;
    this.setState({currentWorkout});
  }

  handleSubmit = () => {
    const currentWorkout = Object.assign({}, this.state.currentWorkout);
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
          value={this.state.currentWorkout.title} />
        <TextInput
          style={globalStyles.textInput}
          onChangeText={this.handleNotesChange}
          value={this.state.currentWorkout.notes} />
        <View style={{ marginBottom: 10 }}>
          {this.state.currentWorkout.exercises.length > 0
            ? <WorkoutExercises
                handleRemove={this.handleExerciseRemove}
                exercises={this.state.currentWorkout.exercises} /> 
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

const mapDispatchToProps = dispatch => {
  return {
    addWorkout: (data) => {
      dispatch(addWorkout(data))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddWorkoutForm);
