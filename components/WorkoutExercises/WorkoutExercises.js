import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {
  updateCurrentWorkout,
} from '../../actions';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

class ExerciseList extends React.Component {
  addSet = (exerciseIndex) => {
    let currentWorkout = Object.assign({}, this.props.currentWorkout);
    currentWorkout.exercises[exerciseIndex].sets.push({weight: 0, reps: 0});
    this.props.updateCurrentWorkout(currentWorkout);
  }

  removeSet = (index, exerciseIndex) => {
    let currentWorkout = Object.assign({}, this.props.currentWorkout);
    currentWorkout.exercises[exerciseIndex].sets.splice(index, 1);
    this.props.updateCurrentWorkout(currentWorkout);
  }

  renderSets = (sets, exerciseIndex) => {
    return(
      <View>
        {sets.map((item, index) => {
          return(
            <View key={index} style={styles.exerciseRow}>
              <Text style={{fontWeight: 'bold', paddingHorizontal: 6}}>{index + 1}</Text>
              <TextInput 
                value={item.weight.toString()}
                keyboardType="numeric"
                style={[styles.input, styles.weight]} />
              <TextInput 
                value={item.reps.toString()}
                keyboardType="numeric"
                style={[styles.input, styles.reps]} />
              <TouchableOpacity
                onPress={() => { this.removeSet(index, exerciseIndex) }}>
                <Ionicons name={`ios-remove-circle-outline`} size={25} color='#000' style={styles.icon} />
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    )
  }

  render () {
    return (
      <View style={styles.wrapper}>
        {this.props.exercises.map((item, index) => {
          return (
            <View key={index} style={{marginBottom: 30}}>
              <View style={styles.header}>
                <Text style={styles.exerciseTitle}>{item.name}</Text>
                <TouchableOpacity
                  onPress={() => { this.props.handleRemove(item); }}>
                  <Text style={{color: colors.brightBlue}}>Remove</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.exerciseRow, styles.exerciseRowHeading]}>
                <Text style={styles.exerciseRowHeadingLabel}>Set</Text>
                <Text style={styles.exerciseRowHeadingLabel}>Weight (lbs)</Text>
                <Text style={styles.exerciseRowHeadingLabel}>Reps</Text>
              </View>
              {this.renderSets(item.sets, index)}
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  flexDirection: 'row'
                }}
                onPress={() => { this.addSet(index) }}>
                <Ionicons name={`ios-add-circle-outline`} size={18} color='#000' style={styles.icon} />
                <Text style={{marginLeft: 5}}>Add Set</Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    )
  }
}

const mapStateToProps = state => {
  const currentWorkout = state.workouts.currentWorkout;
  return { currentWorkout }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCurrentWorkout: (data) => {
      dispatch(updateCurrentWorkout(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseList);
