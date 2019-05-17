import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../assets/styles/global';
import AddWorkoutForm from '../components/AddWorkoutForm/AddWorkoutForm';

export default class AddWorkout extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Add New Workout'
    }
  }

  render() {
    return (
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.container}>
          <AddWorkoutForm />
        </View>
      </ScrollView>
    );
  }
}
