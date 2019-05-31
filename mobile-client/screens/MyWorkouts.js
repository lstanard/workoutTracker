import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { fetchWorkouts } from '../actions/workouts.js';
import globalStyles from '../assets/styles/global';
import Button from '../components/Button/Button';
import styles from '../assets/styles/screens/MyWorkouts';
import colors from '../assets/styles/colors';

const WorkoutsList = (props) => {
  return (
    <ScrollView style={{
      alignSelf: 'stretch',
      marginTop: 30}}>
      <View style={{
        marginBottom: 15,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: colors.medGray}}>
        <Text style={{
          fontSize: 24}}>
          Recent Workouts
        </Text>
      </View>
      {props.workouts.map((item, index) => (
        <TouchableOpacity key={index}>
          <View 
            style={styles.workoutCard}>
            <Text style={styles.workoutCardTitle}>
              {item.title}
            </Text>
            {item.exercises.map((exercise, index) => (
              <View key={index}>
                <Text>{exercise.name}</Text>
              </View>
            ))}
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

class MyWorkouts extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'My Workouts'
    }
  }

  componentDidMount() {
    const { fetchWorkouts } = this.props;
    fetchWorkouts();
  }

  render() {
    const containerStyles = {
      ...globalStyles.container,
      ...styles.container,
    };

    return (
      <View style={containerStyles}>
        <Text style={{
          fontSize: 32,
          fontWeight: 'bold'}}>
          My Workouts
        </Text>
        <Button 
          action={() => this.props.navigation.navigate('AddWorkout')}
          label="Start Workout" />
        <WorkoutsList
          workouts={this.props.workouts} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { workouts } = state.workouts;
  return { workouts }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchWorkouts: () => {
      dispatch(fetchWorkouts());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyWorkouts);
