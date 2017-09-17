import React, {Component} from 'react';
import {Alert, Dimensions, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View} from 'react-native';

import styles from './Component1.style';
import Toggle from './Toggle';

export default class Component1 extends Component{
    constructor() {
    super();
    this.state = {
        textValue: '0',
        backgroundColor: 'yellow',};
  }


RadNum() {
    var rand = Math.random()* (10 - 1) + 1;
    rand = Math.floor(rand);
    return rand;
}
onPress() {
    var rand = this.RadNum().toString();
    while ( rand == this.state.textValue ){
        rand = this.RadNum().toString();
    }
    
    this.setState({
        backgroundColor: 'red',
        textValue:rand
   });
  }

  render(){
    return (

      <View style = {styles.container}>
        
        <Text>value is:</Text>
        <Text style = {style2.textnum}>{this.state.textValue}</Text>
        <Toggle/>
        <View style = {styles.row}>
           <TouchableHighlight style = {{width: Dimensions.get('window').width /4,
      height: Dimensions.get('window').width /4,
      margin: 5,
      borderRadius:10,
      flexDirection:'row', 
      flexWrap:'wrap',
      backgroundColor: this.state.backgroundColor,}}
        underlayColor = {'red'}
        onPress={this.onPress.bind(this)}>
             <View>
             </View>
        </TouchableHighlight>
         <TouchableHighlight style = {[styles.box, style2.bgcolor]}
        underlayColor = {'red'}
        onPress={this.onPress.bind(this)}>
             <View>
             </View>
        </TouchableHighlight>
        <TouchableHighlight
        style = {[styles.box, style2.bgcolor]}
        underlayColor = {'red'}
        onPress={this.onPress.bind(this)}>
             <View>
             </View>
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.box, style2.bgcolor]}
        underlayColor = {'red'}
        onPress={this.onPress.bind(this)}>
             <View>
             </View>
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.box, style2.bgcolor]}
        underlayColor = {'red'}
        onPress={this.onPress.bind(this)}>
             <View>
             </View>
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.box, style2.bgcolor]}
        underlayColor = {'red'}
        onPress={this.onPress.bind(this)}>
             <View>
             </View>
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.box, style2.bgcolor]}
        underlayColor = {'red'}
        onPress={this.onPress.bind(this)}>
             <View>
             </View>
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.box, style2.bgcolor]}
        underlayColor = {'red'}
        onPress={this.onPress.bind(this)}>
             <View>
             </View>
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.box, style2.bgcolor]}
        underlayColor = {'red'}
        onPress={this.onPress.bind(this)}>
             <View>
             </View>
        </TouchableHighlight>
        </View>
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

AppRegistry.registerComponent('Component1', () => Component1);