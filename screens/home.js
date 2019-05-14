import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Home'
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the Home screen.</Text>
        <Button
          title="Add a Workout"
          onPress={() => this.props.navigation.navigate('AddWorkout')} />
      </View>
    );
  }
}
