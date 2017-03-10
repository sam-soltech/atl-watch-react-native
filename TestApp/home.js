
import basestyle from './basestyles';
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
  linearGradient: {
    borderRadius:10,
    alignSelf: 'stretch',
    height: 40,
    marginLeft:30,
    marginRight:30,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    borderTopColor:'#000',
    borderTopWidth:20
  },
  inputStyle:{
    borderColor:'#9519C2',
    borderRadius:10,
    marginBottom:15,
    marginLeft:30,
    marginRight:30,
    height: 40,
    borderWidth: 2,
    color: '#FFF',
    paddingLeft:15,
    fontSize:13,
    backgroundColor:'#3A3A3A'
  },
  inputLabel: {
    color: '#FFF',
    marginBottom: 3,
    fontWeight:'500',
    marginLeft:35,
    fontSize: 11,
    textAlign: 'left',
    alignSelf : 'flex-start',
    backgroundColor:'transparent'
  },
  header:{
    borderBottomColor:'#9519C2',
    borderBottomWidth: 2,
    alignSelf: 'stretch',
    backgroundColor:'#232323'
  },
  title: {
    fontSize: 25,
    fontWeight:'500',
    padding:7,
    color:'#FFF',
    textAlign: 'center'
  },
  subheader: {
    padding:7,
    alignSelf: 'stretch',
    justifyContent: 'flex-start'
  },
  subheaderText:{
    textAlign: 'left',
    color: '#FFF',
    paddingBottom:1,
    fontWeight:'600',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor:'transparent'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
   top: 95,
   left:0,
   right:0
  //  justifyContent: 'flex-end',
  //  alignItems: 'center'
  },
});


export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger;
    return (
      <Image source={require('./images/bg_480.png')} style={basestyle.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>
              ATL Watch
            </Text>
          </View>
          <View style={styles.subheader}>
            <Text style={styles.subheaderText}>
              Current Location:
            </Text>
            <Text style={styles.subheaderText}>
              Downtown - 5 Days since reported crime
            </Text>
          </View>
          <MapView
           style={styles.map}
           initialRegion={{
             latitude: 37.78825,
             longitude: -122.4324,
             latitudeDelta: 0.0922,
             longitudeDelta: 0.0421,
           }}
           />
        </View>
      </Image>
    );
  }
}
