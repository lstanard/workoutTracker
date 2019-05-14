import { createAppContainer, createStackNavigator } from "react-navigation";
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

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
