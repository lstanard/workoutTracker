import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {
  addWorkout
} from '../../actions';
import Button from '../Button/Button';
import globalStyles from '../../assets/styles/global';
import styles from './styles';
import colors from '../../assets/styles/colors';

import AddExerciseModal from '../AddExerciseModal/AddExerciseModal';
import { TextInput } from 'react-native-gesture-handler';

class ExerciseList extends React.Component {
  render () {
    return (
      <View style={{
        marginBottom: 15,
        marginTop: 15,
      }}>
        {this.props.exercises.map((item, index) => {
          return (
            <View key={index} style={{marginBottom: 15}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item}</Text>
              <TouchableOpacity
                onPress={() => { this.props.handleRemove(item); }}>
                <Text style={{color: colors.brightBlue}}>Remove</Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    )
  }
}

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

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
    this.handleExerciseAdd = this.handleExerciseAdd.bind(this);
    this.handleExerciseRemove = this.handleExerciseRemove.bind(this);
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  handleExerciseAdd(exercise) {
    let exercises = this.state.currentWorkout.exercises;
    exercises.push(exercise);
    this.setState(prevState => ({
      currentWorkout: {
        ...prevState.currentWorkout,
        exercises
      }
    }));
  }

  handleExerciseRemove(exercise) {
    let exercises = this.state.currentWorkout.exercises;
    exercises = exercises.filter((item) => item !== exercise );
    this.setState(prevState => ({
      currentWorkout: {
        ...prevState.currentWorkout,
        exercises
      }
    }));
  }

  handleTitleChange(title) {
    let currentWorkout = Object.assign({}, this.state.currentWorkout);
    currentWorkout.title = title;
    this.setState({currentWorkout});
  }

  handleNotesChange(notes) {
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
            ? <ExerciseList
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
