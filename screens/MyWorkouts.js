import React from 'react';
import { View, Alert } from 'react-native';
import styles from '../assets/styles/global';
import Button from '../components/Button/Button';

export default class MyWorkouts extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'My Workouts'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button 
          action={() => this.props.navigation.navigate('AddWorkout')}
          icon='ios-add-circle-outline'
          label="Add New Workout" />
      </View>
    );
  }
}
