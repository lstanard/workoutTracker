import React from 'react';
import {
  createAppContainer, 
  createStackNavigator, 
  createBottomTabNavigator
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import colors from '../assets/styles/colors';
import Home from '../screens/Home';
import AddWorkout from '../screens/AddWorkout';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    AddWorkout: { screen: AddWorkout }
  },
  {
    initialRouteName: 'Home'
  }
);

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-home`;
  } else if (routeName === 'AddWorkout') {
    iconName = `ios-fitness`;
  }

  return <IconComponent name={iconName} size={25} color={tintColor} />;
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: Home,
    AddWorkout: AddWorkout
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: colors.brightRed,
      inactiveTintColor: colors.darkGray,
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;
