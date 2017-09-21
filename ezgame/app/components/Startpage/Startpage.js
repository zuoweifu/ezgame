import React, {Component} from 'react';
import {AppRegistry, 
    Text, 
    View, 
    Image,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
    TouchableHighlight,
    Button} from 'react-native';

export default class Startpage extends Component{
    constructor(){
        super()
        this.navigate = this.navigate.bind(this)
    }

    navigate(name){
        this.props.navigator.push({
            name
        })
    }

  render(){
    return(
      <View style = {startstyles.container}>
        <View>
              <TouchableHighlight
              style = {startstyles.button}
              onPress={() => this.navigate('Gamepage')}
              underlayColor = {'#07eeff'}
              title="Tap to Play">
              <View>
              <Text style = {startstyles.buttontext}>Tap to Play</Text>
              </View>
              </TouchableHighlight>
        </View>
      </View>
      );
  }
}

const startstyles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent:'center',
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    backgroundColor:'white',
  },
  buttontext: {
    color:'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
      borderWidth:1,
       borderColor:'#07eeff',
       alignItems:'center',
       justifyContent:'center',
       width:200,
       height:200,
       backgroundColor:'#07eeff',
       borderRadius:200,
  },
});

AppRegistry.registerComponent('Startpage', () => Startpage);