import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import t from 'tcomb-form-native';
import {
  addWorkout
} from '../../actions';
import Button from '../Button/Button';
import globalStyles from '../../assets/styles/global';
import styles from './styles';
import colors from '../../assets/styles/colors';

import AddExerciseModal from '../AddExerciseModal/AddExerciseModal';

const Form = t.form.Form;

const formStyles = {
  ...Form.stylesheet,
  textbox: {
    normal: {
      ...Form.stylesheet.textbox.normal,
      ...globalStyles.textInput
    }
  }
};

const options = {
  stylesheet: formStyles
};

const Workout = t.struct({
  title: t.String,
  notes: t.String,
});

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
        title: '',
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
    this.handleExerciseAdd = this.handleExerciseAdd.bind(this);
    this.handleExerciseRemove = this.handleExerciseRemove.bind(this);
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  handleExerciseAdd(exercise) {
    let currentWorkout = Object.assign({}, this.state.currentWorkout);
    currentWorkout.exercises.push(exercise);
    this.setState({currentWorkout});
  }

  handleExerciseRemove(exercise) {
    let currentWorkout = Object.assign({}, this.state.currentWorkout);
    currentWorkout.exercises = currentWorkout.exercises.filter((item) => {
      return item !== exercise;
    });
    this.setState({currentWorkout});
  }

  handleSubmit = () => {
    const value = this._form.getValue();
    this.props.addWorkout(value);
  }

  addExercise = () => {
    this.setModalVisible(true);
  }

  render() {
    return (
      <View style={{ padding: 30, alignSelf: 'stretch' }}>
        <Form 
          ref={c => this._form = c}
          options={options}
          type={Workout} />
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
