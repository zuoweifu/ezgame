import React, {Component} from 'react';
import {AppRegistry, Text, View, TextInput} from 'react-native';

export default class Component1 extends Component{
    constructor() {
    super();
    this.state = {
        textValue: 'Hell',
        
      };
  }

  onChangeText(value){
    this.setState({
        textValue:value
    });
  }

  render(){
    return(
      <View>
          <TextInput
          style={{padding:100}}
          placeholder="Type here to translate!"
          value={this.state.textValue}
          onChangeText={(value) => this.onChangeText(value)}
            />
        <Text>{this.state.textValue}</Text>
      </View>
      );
  }
}

AppRegistry.registerComponent('Component1', () => Component1);