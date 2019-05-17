import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from '../assets/styles/global';
import Button from '../components/Button/Button';

const WorkoutsList = (props) => {
  return (
    <View>
      {props.workouts.map((item, index) => (
        <Text key={index}>
          {item.title}: {item.notes}
        </Text>
      ))}
    </View>
  )
}

class MyWorkouts extends React.Component {
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
        <View style={{ padding: 30 }}>
          <Text
            style={{fontSize: 24}}>
            Recent Workouts
          </Text>
          <WorkoutsList
            workouts={this.props.workouts} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { workouts } = state;
  return { workouts }
}

export default connect(mapStateToProps)(MyWorkouts);
