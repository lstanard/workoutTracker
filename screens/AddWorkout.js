import React from 'react';
import { View, Text, Button } from 'react-native';

export default class AddWorkout extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Add a Workout'
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Add a New Workout</Text>
        <Button 
          title="Add Another Workout"
          onPress={() => this.props.navigation.push('AddWorkout')} />
      </View>
    );
  }
}
