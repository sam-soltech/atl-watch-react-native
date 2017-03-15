import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import Login from './login';
import MapView from './componets/map';
import Tab from './componets/tab';
import Account from './componets/account';
import One from './test-views/one';
import Two from './test-views/two';
const styles = StyleSheet.create({
  navbar: {
    backgroundColor:'#000'
  },
  tabBar:{
    backgroundColor:'#232323'
  },
  navBar:{
    backgroundColor:'#232323',
    borderBottomColor:'#9519C2',
    borderBottomWidth: 2,
    padding:7
  },
  title:{
    color:'#FFF',
    fontWeight:'500'
  }
});


export default class TestApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="Login" hideNavBar component={Login}  title="Login"/>
        <Scene key="root"  tabs={true} initial tabBarStyle={styles.tabBar}>
          <Scene key="Map" title="Map" hideNavBar initial icon={Tab} component={MapView}/>
          <Scene key="Two" title="Account" icon={Tab} hideNavBar  component={Account}/>
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('TestApp', () => TestApp);
