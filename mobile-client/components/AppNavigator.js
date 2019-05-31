import React from 'react';
import {
  createAppContainer, 
  createStackNavigator, 
  createBottomTabNavigator
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import colors from '../assets/styles/colors';
import Home from '../screens/Home';
import MyWorkouts from '../screens/MyWorkouts';
import AddWorkout from '../screens/AddWorkout';
import Exercises from '../screens/Exercises';

// move to separate module
const tabLabels = {
  Home: 'Home',
  MyWorkouts: 'My Workouts',
  Exercises: 'Exercises'
}

const WorkoutNavigator = createStackNavigator(
  {
    MyWorkouts: { screen: MyWorkouts },
    AddWorkout: { screen: AddWorkout },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;

  let IconComponent = Ionicons;
  let iconName;

  if (routeName === tabLabels.Home) {
    iconName = `ios-home`;
  } else if (routeName === tabLabels.MyWorkouts) {
    iconName = `ios-body`;
  } else if (routeName === tabLabels.Exercises) {
    iconName = `ios-fitness`;
  }

  return <IconComponent name={iconName} size={25} color={tintColor} />;
}

const TabNavigator = createBottomTabNavigator(
  {
    [tabLabels.Home]: {
      screen: Home
    },
    [tabLabels.MyWorkouts]: {
      screen: WorkoutNavigator
    },
    [tabLabels.Exercises]: {
      screen: Exercises
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: colors.brightRed,
      inactiveTintColor: colors.darkGray,
    },
    initialRouteName: tabLabels.MyWorkouts
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;
