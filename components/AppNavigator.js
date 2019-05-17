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

const WorkoutNavigator = createStackNavigator(
  {
    MyWorkouts: { screen: MyWorkouts },
    AddWorkout: { screen: AddWorkout },
  }
);

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-home`;
  } else if (routeName === 'My Workouts') {
    iconName = `ios-fitness`;
  }

  return <IconComponent name={iconName} size={25} color={tintColor} />;
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home
    },
    'My Workouts': {
      screen: WorkoutNavigator
    },
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
    initialRouteName: 'My Workouts'
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;
