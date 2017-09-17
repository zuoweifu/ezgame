import React, {Component} from 'react';
import {Alert, Dimensions, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View} from 'react-native';

import styles from './Component1.style';
import Component1 from './Component1';

export default class Toggle extends Component{

  render(){
    return(
        <View><Text>hello</Text></View>
      );
  }
}


AppRegistry.registerComponent('Toggle', () => Toggle);