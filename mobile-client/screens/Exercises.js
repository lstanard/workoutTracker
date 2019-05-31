import React from 'react';
import { View, Text } from 'react-native';
import styles from '../assets/styles/global';

export default class Exercises extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Exercises'
    }
  }

  // Pull exercise data from file (for now)
  // Render FlatList to display

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>This will display a list of available exercises.</Text>
      </View>
    );
  }
}
