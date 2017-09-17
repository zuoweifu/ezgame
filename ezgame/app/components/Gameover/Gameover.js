import React, {Component} from 'react';
import {AppRegistry, 
    Text, 
    View, 
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
        this.props.navigator.pop({
            name
        })
    }

  render(){
    return(
      <View>

        <View>
              <Button
              onPress={() => this.navigate('Gamepage')}
              underlayColor = {'white'}
              title="Gameover">
              <View>
              <Text 
              style = {styles.buttontext}
              >Gameover</Text>
              </View>
              </Button>
              <Text>Score : {Score}</Text>
        </View>
        
      </View>
      );
  }
}

AppRegistry.registerComponent('Gameover', () => Gameover);