import React from 'react';
import { View, Text, Button } from 'react-native';

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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Add a New Workout</Text>
        <Text>User: {JSON.stringify(name)}</Text>
        <Button 
          title="Add Another Workout"
          onPress={() => this.props.navigation.push('AddWorkout')} />
      </View>
    );
  }
}
