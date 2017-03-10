
import basestyle from './basestyles';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password:'' };
  }


  render() {
    // debugger;
    return (
      <Image source={require('./images/bg_480.png')} style={basestyle.backgroundImage}>
        <View style={styles.container}>
          <StatusBar
             backgroundColor="#000"
             barStyle="light-content"
           />
          <Image source={require('./images/atlwatchicon.png')} style={styles.loginImage}/>
          <Text style={styles.title}>
            ATL Watch
          </Text>
          <Text style={styles.welcome}>
            Keeping you safe in your neighborhood
          </Text>
          <Text style={styles.inputLabel}>
            Username:
          </Text>
          <TextInput
           style={styles.inputStyle}
           onChangeText={(username) => this.setState({username})}
           value={this.state.username}
         />
         <Text style={styles.inputLabel}>
           Password:
         </Text>
         <TextInput
          style={styles.inputStyle}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <LinearGradient colors={['#B23A8D', '#9629B9']} start={{x: 0.0, y: 0.0}} end={{x: 1.0, y:0.0}} style={styles.linearGradient}>
          <Text style={styles.btnText} onPress={Actions.Home}>
            Login
          </Text>
        </LinearGradient>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius:10,
    alignSelf: 'stretch',
    height: 40,
    marginLeft:30,
    marginRight:30,
    justifyContent: 'center',
  },
  btnText:{
    color:'#FFF',
    backgroundColor:'transparent',
    textAlign: 'center',
    fontWeight:'600'
  },
  loginImage: {
    marginTop:30,
    marginBottom:10,
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
  title: {
    fontSize: 25,
    fontWeight:'500',
    textAlign: 'center',
    margin: 5,
    color:'#FFF',
    backgroundColor:'transparent'
  },
  welcome: {
    textAlign: 'center',
    color: '#989898',
    marginBottom: 15,
    fontWeight:'600',
    backgroundColor:'transparent'
  },
});
