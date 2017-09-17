import React, {Component} from 'react';
import {Alert, 
    Dimensions, 
    AppRegistry, 
    Platform, 
    StyleSheet, 
    Text, 
    TouchableHighlight, 
    TouchableOpacity, 
    TouchableNativeFeedback, 
    TouchableWithoutFeedback,
    Button, 
    View} from 'react-native';
import styles from './Gamepage.style';
import ModalExample from './Toggle';
import Timer from '/Users/fuzuowei/ezgame/ezgame/app/components/Timer/Timer';

var counter = 0;
var Score = 0;
var Grid =9;
export default class Gamepage extends Component{
    constructor() {
    super();
    this.state = {
        textValue: '1',
        backgroundColor: 'green',
        count: '0',
    };
  }


RadNum() {
    var rand = Math.random()* (10 - 1) + 1;
    rand = Math.floor(rand);
    return rand;
}
onPress(index) {
    if (this.state.textValue != index){
       this.gameover();
    }
    counter++;
    var rand = this.RadNum().toString();
    while ( rand == this.state.textValue ){
        rand = this.RadNum().toString();
    }
    
    this.setState({
        textValue:rand,
        backgroundColor:'red',
        count:counter,
   });
     
  }

navigate(name){
        this.props.navigator.push({
            name
        })
    }

  gameover(){
      Score = counter -1;
      counter = 0;
       this.navigate('Gameover');
  }

  startgame(){

  }


  render(){
    return (

      <View style = {styles.container}>
        <Text>value is:</Text>
        <Text style = {style2.textnum}>{this.state.textValue}</Text>
        <Text>Score:{this.state.count}</Text>
        <Button
        onPress={() => this.startgame()}
        title = "Start"/>
        <Timer/>
        <View style = {styles.row}>

           <TouchableHighlight style = {[styles.box, style2.bgcolor]}
        underlayColor = {'green'}
        onPress={() => this.onPress('1')}>
             <View>
             </View>
        </TouchableHighlight>
         <TouchableHighlight style = {[styles.box, style2.bgcolor]}
        underlayColor = {'green'}
        onPress={() => this.onPress('2')}>
             <View>
             </View>
        </TouchableHighlight>
        <TouchableHighlight
        style = {[styles.box, style2.bgcolor]}
        underlayColor = {'green'}
        onPress={() => this.onPress('3')}>
             <View>
             </View>
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.box, style2.bgcolor]}
        underlayColor = {'green'}
        onPress={() => this.onPress('4')}>
             <View>
             </View>
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.box, style2.bgcolor]}
        underlayColor = {'green'}
        onPress={() => this.onPress('5')}>
             <View>
             </View>
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.box, style2.bgcolor]}
        underlayColor = {'green'}
        onPress={() => this.onPress('6')}>
             <View>
             </View>
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.box, style2.bgcolor]}
        underlayColor = {'green'}
        onPress={() => this.onPress('7')}>
             <View>
             </View>
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.box, style2.bgcolor]}
        underlayColor = {'green'}
        onPress={() => this.onPress('8')}>
             <View>
             </View>
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.box, style2.bgcolor]}
        underlayColor = {'green'}
        onPress={() => this.onPress('9')}>
             <View>
             </View>
        </TouchableHighlight>
        </View>
        <Button 
        onPress={() => this.props.navigator.pop()}
        title="Go back"/>
         </View>

    );
  }
}

const style2 = StyleSheet.create({
    bgcolor: {
        backgroundColor: 'yellow',
    },
    textnum: {
        backgroundColor: 'yellow',
    },
    textnumafter: {
        backgroundColor: 'red',
    },
    });
export {Score};

AppRegistry.registerComponent('Gamepage', () => Gamepage);