import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import Login from './login';
import Home from './home';

const styles = StyleSheet.create({
  navbar: {
    backgroundColor:'#000'
  }
});
export default class TestApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Login" hideNavBar component={Login} title="Login"  />
          <Scene
            key="Home"
            initial={true}
            component={Home}
            title="Home"
            hideNavBar
            />
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('TestApp', () => TestApp);
