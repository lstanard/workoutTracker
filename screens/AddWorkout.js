import React from 'react';
import { View, Alert } from 'react-native';
import styles from '../assets/styles/global';
import Button from '../components/Button/Button';

export default class AddWorkout extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Start Workout'
    }
  }

  showAlert = () => {
    // Alert.alert('Title', 'Message');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button 
          action={this.showAlert}
          icon='ios-add-circle-outline'
          label="Add New Workout" />
      </View>
    );
  }
}
