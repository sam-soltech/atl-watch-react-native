
import basestyle from '../basestyles';
import LinearGradient from 'react-native-linear-gradient';
import React, { Component } from 'react';
import MapView from 'react-native-maps';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
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
    marginLeft:10,
    marginRight:10,
    height: 40,
    borderWidth: 2,
    color: '#FFF',
    paddingLeft:15,
    fontSize:13,
    backgroundColor:'#3A3A3A'
  },
  inputLabel: {
    fontWeight:'600',
    color:'#A4A4A4',
    marginBottom: 3,
    fontWeight:'600',
    marginLeft:10,
    fontSize: 13,
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
  listItem:{
    borderBottomColor:'#5B5B5B',
    borderBottomWidth: 2,
    // borderTopColor:'#5B5B5B',
    // borderTopWidth: 2,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft:15,
    paddingRight:15,
    paddingTop:5,
    paddingBottom:5
  },
  listItemText:{
    backgroundColor:'transparent',
    fontWeight:'600',
    color:'#A4A4A4',
    paddingTop:7,
    // flexDirection: 'column',
    // alignSelf: 'stretch',
    // justifyContent: 'center',
    // justifyContent: 'center'
  },
  userForm:{
    alignSelf: 'stretch',
    paddingTop:15,
    paddingBottom:10,
    // right:0
  }
});


export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation:true,
      backgroundLocation:false,
      pushAlerts:false,
      policeWarning:false,
      trackingWarning:false,
      phone:'',
      username:''
    };
  }


  componentDidMount() {
  }

  render() {
    return (
      <Image source={require('../images/bg_480.png')} style={basestyle.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>
              ATL Watch
            </Text>
          </View>
          <View style={styles.userForm}>
            <Text style={styles.inputLabel}>
              Username:
            </Text>
            <TextInput
             style={styles.inputStyle}
             onChangeText={(username) => this.setState({username:username})}
             value={this.state.username}
           />
             <Text style={styles.inputLabel}>
               Phone Number:
             </Text>
             <TextInput
              style={styles.inputStyle}
              keyboardType={'phone-pad'}
              onChangeText={(phone) => this.setState({phone:phone})}
              value={this.state.phone}
            />
        </View>
          <View style={styles.listItem}>
              <Text style={styles.listItemText}>
                Current Location
              </Text>
              <Switch style={styles.toggleSwitch} onValueChange={(value) => this.setState({currentLocation: value})} value={this.state.currentLocation} onTintColor="#9519C2" tintColor="#5B5B5B"/>
          </View>
          <View style={styles.listItem}>
              <Text style={styles.listItemText}>
                Tracking In The Background
              </Text>
              <Switch style={styles.toggleSwitch} onValueChange={(value) => this.setState({backgroundLocation: value})} value={this.state.backgroundLocation} onTintColor="#9519C2" tintColor="#5B5B5B"/>
          </View>
          <View style={styles.listItem}>
              <Text style={styles.listItemText}>
                Notifcation Alerts
              </Text>
              <Switch style={styles.toggleSwitch} onValueChange={(value) => this.setState({pushAlerts: value})} value={this.state.pushAlerts} onTintColor="#9519C2" tintColor="#5B5B5B"/>
          </View>
          <View style={styles.listItem}>
              <Text style={styles.listItemText}>
                Police Warning
              </Text>
              <Switch style={styles.toggleSwitch} onValueChange={(value) => this.setState({policeWarning: value})} value={this.state.policeWarning} onTintColor="#9519C2" tintColor="#5B5B5B"/>
          </View>
          <View style={styles.listItem}>
              <Text style={styles.listItemText}>
                Tracking Warning
              </Text>
              <Switch style={styles.toggleSwitch} onValueChange={(value) => this.setState({trackingWarning: value})} value={this.state.trackingWarning} onTintColor="#9519C2" tintColor="#5B5B5B"/>
          </View>
        </View>
      </Image>
    );
  }
}
