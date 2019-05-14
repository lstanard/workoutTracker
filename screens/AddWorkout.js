import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../assets/styles/global';

export default class AddWorkout extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Add a Workout'
    }
  }

  render() {
    const {navigation} = this.props;
    const name = navigation.getParam('name', 'Guest');

    return (
      <View style={styles.container}>
        <Text>Add a New Workout</Text>
        <Text>User: {JSON.stringify(name)}</Text>
        <Button 
          title="Add Another Workout"
          onPress={() => this.props.navigation.push('AddWorkout')} />
      </View>
    );
  }
}
