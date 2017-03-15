'use strict';
import basestyle from '../basestyles';
import LinearGradient from 'react-native-linear-gradient';
import React, { Component } from 'react';
import MapView from 'react-native-maps';
import SearchModal from './searchmodal';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  Modal,
  TouchableHighlight,
  Button
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
  roundBtn:{
    position:'absolute',
    backgroundColor:'#9519C2',
    top:100,
    left:5,
    zIndex:900,
    padding:9,
    borderRadius:20
  },
  map: {
    ...StyleSheet.absoluteFillObject,
   top: 95,
   bottom: 25,
   left:0,
   right:0
  //  justifyContent: 'flex-end',
  //  alignItems: 'center'
  }
});


export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch:false,
      currentLocation:'Atlanta',
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

  changeLocation = (data) => {
    var curlocation = {
      latitude:data.lat,
      longitude:data.lng,
      latitudeDelta: 0.15,
      longitudeDelta: 0.05,
    }

    this.setState({region:curlocation,showSearch:false,currentLocation:data.zip_code});
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

  displaySearch  = () => {
    if(this.state.showSearch){
      return <SearchModal submitSearch={this.changeLocation.bind(this)}/>
    }
  }

  toggleSearch = () => {
    var temp = !this.state.showSearch;
    this.setState({showSearch:temp})
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
              Current Location: {this.state.currentLocation}
            </Text>
            <Text style={styles.subheaderText}>
              Downtown - 5 Days since reported crime
            </Text>
          </View>
          <TouchableHighlight style={styles.roundBtn} onPress={this.toggleSearch}>
              <Image source={require('../images/icons/search.png')} style={styles.buttonImage}/>
          </TouchableHighlight>
          {this.displaySearch()}
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
