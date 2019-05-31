import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import rootReducer from './reducers';
import AppNavigator from './components/AppNavigator';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

registerRootComponent(App);
