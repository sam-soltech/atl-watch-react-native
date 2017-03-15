
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
  constructor(props,selected) {
    super(props);
      console.log(this.props.selected)
      this.state = {url:''}
      switch (this.props.title) {
      case 'Account':
        if(this.props.selected){
          this.state.url = require('../images/icons/account-active.png')
        }
        else{
          this.state.url = require('../images/icons/account.png')
        }
        break;
      case 'Map':
        if(this.props.selected){
          this.state.url = require('../images/icons/map-active.png')
        }
        else {
          this.state.url = require('../images/icons/map.png')
        }
        break;
      }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setImage(nextProps);
  }

  setImage(nextProps){
    switch (nextProps.title) {
    case 'Account':
      if(nextProps.selected){
        this.setState({url:require('../images/icons/account-active.png')});
      }
      else{
        this.setState({url:require('../images/icons/account.png')})
      }
      break;
    case 'Map':
      if(nextProps.selected){
        this.setState({url:require('../images/icons/map-active.png')});
      }
      else {
        this.setState({url:require('../images/icons/map.png')});
      }
      break;
    }
  }

  render() {
    return (
      <View style={styles.tabStyle}>
        <Image style={styles.tabImage} source={this.state.url}/>
        <Text style={styles.tabTitle}>{this.props.title}</Text>
      </View>
    );
  }
}
