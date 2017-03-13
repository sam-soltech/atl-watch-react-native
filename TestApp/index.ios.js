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
import One from './test-views/one';
import Two from './test-views/two';
const styles = StyleSheet.create({
  navbar: {
    backgroundColor:'#000'
  },
  tabBar:{
    backgroundColor:'#232323'
  },
  tabTitle:{
    paddingTop:5,
    color:'#FFF',
    fontSize:9,
    fontWeight:'600',
    backgroundColor:'transparent',
    textAlign:'center'
  },
  tabImage:{
    alignSelf:"center"
  },
  tabStyle:{
    justifyContent:"center"
  }
});

const TabIcon1 = ({ selected, title }) => {
  return (
    <View style={styles.tabStyle}>
      <Image style={styles.tabImage} source={require('./images/icons/home.png')}/>
      <Text style={styles.tabTitle}>{title}</Text>
    </View>
  );
}

const TabIcon2 = ({ selected, title }) => {
  return (
    <View style={styles.tabStyle}>
      <Image style={styles.tabImage} source={require('./images/icons/search.png')}/>
      <Text style={styles.tabTitle}>{title}</Text>
    </View>
  );
}

export default class TestApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="Login" hideNavBar component={Login}  title="Login"/>
        <Scene key="root"  tabs={true} initial tabBarStyle={styles.tabBar}>
          <Scene key="Map" title="Search" hideNavBar initial icon={TabIcon1} component={MapView}/>
          <Scene key="Two" title="Account" icon={TabIcon2} component={Two}/>
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('TestApp', () => TestApp);
