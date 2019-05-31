import React from 'react';
import { Animated, Easing, View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {
  updateCurrentWorkout,
} from '../../actions';
import { Ionicons } from '@expo/vector-icons';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import colors from '../../assets/styles/colors';
import styles from './styles';

class SetRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSwipedOpen: false,
      width: new Animated.Value(100),
      endWidth: 100,
    }
  }

  handleWeightChange = (weight) => {
    let { index, exerciseIndex } = this.props;
    let currentWorkout = Object.assign({}, this.props.currentWorkout);
    currentWorkout.exercises[exerciseIndex].sets[index].weight = weight;
    this.props.updateCurrentWorkout(currentWorkout);
  }

  handleRepsChange = (reps) => {
    let { index, exerciseIndex } = this.props;
    let currentWorkout = Object.assign({}, this.props.currentWorkout);
    currentWorkout.exercises[exerciseIndex].sets[index].reps = reps;
    this.props.updateCurrentWorkout(currentWorkout);
  }

  removeSet = () => {
    let { index, exerciseIndex } = this.props;
    let currentWorkout = Object.assign({}, this.props.currentWorkout);
    currentWorkout.exercises[exerciseIndex].sets.splice(index, 1);
    this.props.updateCurrentWorkout(currentWorkout);
    this.toggleRemoveOption();
  }

  onSwipeLeft = (gestureState) => {
    this.toggleRemoveOption();
  }

  onSwipeRight = (gestureState) => {
    this.toggleRemoveOption();
  }

  toggleRemoveOption() {
    const endWidth = this.state.isSwipedOpen ? 100 : 80;

    this.setState({isSwipedOpen: !this.state.isSwipedOpen, endWidth: endWidth}, () => {
      this.toggleWidth();
    });
  }

  toggleWidth = () => {
    Animated.timing(this.state.width, {
      toValue: this.state.endWidth,
      duration: 150,
      easing: Easing.linear,
    }).start();
  }

  render() {
    const { item, index } = this.props;

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 50
    };

    return(
      <GestureRecognizer
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}>
        <TouchableOpacity
          style={[styles.removeSet, this.state.isSwipedOpen ? styles.swipedOpen : null]}
          onPress={() => { this.removeSet() }}>
          <Ionicons name={`ios-remove-circle-outline`} size={25} color={colors.brightRed} style={styles.icon} />
        </TouchableOpacity>
        <Animated.View
          style={{
            position: 'relative',
            width: this.state.width.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '1%'],
            })
          }}>
          <View style={styles.exerciseRow}>
            <Text style={{fontWeight: 'bold', paddingHorizontal: 6}}>{index + 1}</Text>
            <TextInput 
              onChangeText={this.handleWeightChange}
              value={item.weight.toString()}
              keyboardType="numeric"
              style={[styles.input, styles.weight]} />
            <TextInput 
              onChangeText={this.handleRepsChange}
              value={item.reps.toString()}
              keyboardType="numeric"
              style={[styles.input, styles.reps]} />
          </View>
        </Animated.View>
      </GestureRecognizer>
    )
  }
}
const mapStateToProps = state => {
  const currentWorkout = state.workouts.currentWorkout;
  return { currentWorkout }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCurrentWorkout: (data) => {
      dispatch(updateCurrentWorkout(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetRow);
