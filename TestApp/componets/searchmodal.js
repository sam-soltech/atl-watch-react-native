import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  TouchableHighlight
} from 'react-native';

export default class SearchModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode:'',
      showError:false,
      pressed:false
    };
  }


  componentDidMount() {
  }

  displayError = () => {
    if(this.state.showError){
      return <Text style={styles.errorText}>Invalid Zip Code</Text>
    }
  }

  submitSearch = () => {
    fetch('https://www.zipcodeapi.com/rest/kd4cLrb3vXQwnFmaq7rUyWh9aHdGXbqhouuaVGdrE4X2JkcarD50zm9J4mq1yQjX/info.json/'+this.state.zipcode+'/degrees')
    .then((response) => response.json())
    .then((responseJson) => {
      if(!responseJson.error_code){
        this.setState({showError: false})
        this.props.submitSearch(responseJson);
      }
      else{
        this.setState({showError: true})
      }
    })
    .catch((error) => {
      this.setState({showError: true})
    });
  }

  render() {
    // debugger;
    return (
      <View style={styles.modalwrap}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>
            Search By Zip Code
          </Text>
          <TextInput style={styles.inputStyle}  onChangeText={(zipcode) => this.setState({zipcode:zipcode})} value={this.state.zipcode}/>
          <TouchableHighlight
            style={this.state.pressed ? styles.pressedButtonWrap : styles.buttonWrap}
            onPress={this.submitSearch}
            keyboardType='number-pad'
            onHideUnderlay={()=>{this.setState({pressed: false})}}
            onShowUnderlay={()=>{this.setState({pressed: true})}}
          >
            <Image source={require('../images/icons/search.png')} style={styles.buttonImage}/>
          </TouchableHighlight>
          {this.displayError()}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inputStyle:{
    borderRadius:10,
    marginLeft:30,
    marginRight:30,
    marginTop:10,
    paddingLeft:10,
    paddingRight:40,
    height: 40,
    color: '#000',
    fontSize:13,
    backgroundColor:'#FFF'
  },
  modal:{
    backgroundColor:"#FFF",
    alignSelf: 'stretch',
    zIndex:80,
    marginLeft:50,
    marginRight:50,
    backgroundColor:'#3A3A3A',
    borderRadius:10,
    paddingBottom:30
  },
  modalText:{
    marginTop:10,
    backgroundColor:'transparent',
    alignSelf: 'stretch',
    textAlign:'center',
    color:'#FFF'
  },
  modalwrap:{
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:80
    // flexDirection: 'row',
  },
  buttonWrap:{
    position:'absolute',
    // borderRadius:10,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    backgroundColor:'#9519C2',
    height: 40,
    width: 41,
    right:30,
    top:37,
    paddingTop:12,
    justifyContent: 'center',
    flexDirection:'row'
  },
  pressedButtonWrap:{
    position:'absolute',
    // borderRadius:10,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    backgroundColor:'#CCC',
    height: 40,
    width: 41,
    right:30,
    top:37,
    paddingTop:12,
    justifyContent: 'center',
    flexDirection:'row'
  },
  errorText:{
    paddingTop:10,
    textAlign:'center',
    color:'red',
    backgroundColor:'transparent'
  },
  buttonImage:{
    // // position:'absolute',
    // width:16,
    // height:16,
    // marginTop:10
  }
})
