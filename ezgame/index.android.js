import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import Component1 from './app/components/Component1/Component1';


export default class ezgame extends Component{
  render(){
    return(
      <View>
         <Text>hael</Text>
      </View>
      );
  }
}

AppRegistry.registerComponent('ezgame', () => ezgame);