
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
  TextInput,
  Modal
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
  modal:{
    height:80,
    backgroundColor:"#FFF",
    alignSelf: 'stretch',
    zIndex:80
  },
  modalwrap:{
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
      zIndex:80
    // flexDirection: 'row',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
   top: 95,
   bottom: 25,
   left:0,
   right:0
  //  justifyContent: 'flex-end',
  //  alignItems: 'center'
  },
});


export default class Map extends Component {
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


  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var curlocation = {
           region: {
            latitude:position.coords.latitude,
            longitude:position.coords.longitude,
            latitudeDelta: 0.15,
            longitudeDelta: 0.05,
          }
        }

        var newstate = Object.assign(curlocation, this.state);

        this.setState(newstate);
        console.log(this.state)
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  render() {
    // debugger;
    return (
      <Image source={require('../images/bg_480.png')} style={basestyle.backgroundImage}>
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
          <View style={styles.modalwrap}>
            <View style={styles.modal}>
              <TextInput
               style={styles.inputStyle}/>
            </View>
          </View>
          <MapView
            region={this.state.region}
            style={styles.map}
          >
            {this.state.markers.map(marker => (
              <MapView.Marker
                coordinate={{latitude: marker.latitude,longitude: marker.longitude}}
                title={'test'+marker.key}
                description={'test'}
                key={marker.key}
              />
            ))}
          </MapView>
        </View>
      </Image>
    );
  }
}
