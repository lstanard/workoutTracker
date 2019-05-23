import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

class ExerciseList extends React.Component {
  renderSets = () => {
    return(
      <View style={styles.exerciseRow}>
        <Text>1</Text>
        <TextInput 
          value="135"
          keyboardType="numeric"
          style={[styles.input, styles.weight]} />
        <TextInput 
          value="6"
          keyboardType="numeric"
          style={[styles.input, styles.reps]} />
        <Ionicons name={`ios-add-circle-outline`} size={25} color='#000' style={styles.icon} />
        <Ionicons name={`ios-remove-circle-outline`} size={25} color='#000' style={styles.icon} />
      </View>
    )
  }

  render () {
    return (
      <View style={styles.wrapper}>
        {this.props.exercises.map((item, index) => {
          return (
            <View key={index} style={{marginBottom: 25}}>
              <View style={styles.header}>
                <Text style={styles.exerciseTitle}>{item}</Text>
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
              {this.renderSets()}
            </View>
          )
        })}
      </View>
    )
  }
}

export default ExerciseList;
