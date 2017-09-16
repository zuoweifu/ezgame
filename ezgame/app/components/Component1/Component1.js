import React, {Component} from 'react';
import {Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View} from 'react-native';

import styles from './Component1.style';

export default class Component1 extends Component{
    constructor() {
    super();
    this.state = {
        textValue: '0'};
  }

RadNum() {
    var rand = Math.random()* (9 - 1) + 1;
    rand = Math.floor(rand);
    return rand;
}
onPress() {

   this.setState({
        textValue:this.RadNum().toString()
   });
  }

  render(){
    return (

      <View style = {styles.container}>
        
        <Text>value is:</Text>
        <Text>{this.state.textValue}</Text>
        <View style = {styles.row}>
        <TouchableHighlight style = {[styles.box, style2.bgcolor]}
        underlayColor = {'red'}
        onPress={this.onPress.bind(this)}>
             <View>
             </View>
        </TouchableHighlight>
         <TouchableHighlight style = {[styles.box, style2.bgcolor]}
             onPress={this.onPress.bind(this)}>
             <View>
             </View>
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.box, style2.bgcolor]}
             onPress={this.onPress.bind(this)}>
             <View>
             </View>
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.box, style2.bgcolor]}
             onPress={this.onPress.bind(this)}>
             <View>
             </View>
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.box, style2.bgcolor]}
             onPress={this.onPress.bind(this)}>
             <View>
             </View>
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.box, style2.bgcolor]}
             onPress={this.onPress.bind(this)}>
             <View>
             </View>
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.box, style2.bgcolor]}
             onPress={this.onPress.bind(this)}>
             <View>
             </View>
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.box, style2.bgcolor]}
             onPress={this.onPress.bind(this)}>
             <View>
             </View>
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.box, style2.bgcolor]}
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
    });

AppRegistry.registerComponent('Component1', () => Component1);