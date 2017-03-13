
import basestyle from '../basestyles';
import LinearGradient from 'react-native-linear-gradient';
import React, { Component } from 'react';
import MapView from 'react-native-maps';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput
} from 'react-native';

const styles = StyleSheet.create({
  ,
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


export default class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude:33.7490,
        longitude:-84.3880,
        latitudeDelta: 0.15,
        longitudeDelta: 0.05,
      },
      markers:[
        {
          latitude:33.82909115,
          longitude:-84.36133874,
          key:1
        },
        {
          latitude:33.69749356,
          longitude:-84.36122151,
          key:2
        },
        {
          latitude:33.75421136,
          longitude:-84.48605182,
          key:3
        },
        {
          latitude:33.71558534,
          longitude:-84.50698254,
          key:4
        },
        {
          latitude:33.80381727,
          longitude:-84.28602474,
          key:5
        }
      ]
    };
  }
  render() {
    return (
      <View style={styles.tabStyle}>
        <Image style={styles.tabImage} source={require('./images/icons/home.png')}/>
        <Text style={styles.tabTitle}>{title}</Text>
      </View>
    );
  }
}
