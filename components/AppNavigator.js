import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from '../screens/home';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
