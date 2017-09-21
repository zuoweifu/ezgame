import React, {Component} from 'react';
import {AppRegistry, 
    Text, 
    View, 
    Dimensions,
    StyleSheet,
    Image,
    TouchableHighlight,
    Button} from 'react-native';
import styles from '/Users/fuzuowei/ezgame/ezgame/app/components/Gamepage/Gamepage.style';
import {Score} from '/Users/fuzuowei/ezgame/ezgame/app/components/Gamepage/Gamepage';

export default class Gameover extends Component{
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
      <View style = {gameoverstyles.container}>

            <View style = {gameoverstyles.gameover}>
            <Text style = {gameoverstyles.gameovertext}>Gameover</Text>
            </View>
            <View>
            <Text>Your score is: {Score}</Text>
            </View>

        <View style = {gameoverstyles.playagainrow}>
              <TouchableHighlight
              onPress={() => this.navigate('Startpage')}
              underlayColor = {'white'}
              title="Play again!">
              <Text style = {gameoverstyles.playagain}>Play again!</Text>
              </TouchableHighlight>
        </View> 
      </View>
      );
  }
}



const gameoverstyles = StyleSheet.create({
    container: {
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
      backgroundColor:'white',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    gameover: {
      padding:20,
    },
    gameovertext: {
      fontSize:50,
      fontWeight: '900',
    },
    playagainrow: {
      height:120,
      justifyContent: 'center',
      alignItems: 'center',
      top:40,
    },
    playagain: {
      fontSize:40,
    },

});

AppRegistry.registerComponent('Gameover', () => Gameover);