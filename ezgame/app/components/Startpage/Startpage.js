import React, {Component} from 'react';
import {AppRegistry, 
    Text, 
    View, 
    Image,
    TouchableHighlight,
    Button} from 'react-native';
import styles from '/Users/fuzuowei/ezgame/ezgame/app/components/Gamepage/Gamepage.style';

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
      <View style = {styles.container1}>
        <View style = {styles.buttonrow}>
              <TouchableHighlight
              style = {styles.button}
              onPress={() => this.navigate('Gamepage')}
              underlayColor = {'white'}
              title="Tap to Play">
              <View>
              <Text 
              style = {styles.buttontext}
              >Tap to Play</Text>
              </View>
              </TouchableHighlight>
        </View>
      </View>
      );
  }
}

AppRegistry.registerComponent('Startpage', () => Startpage);