import React from 'react';
import {
    Image,
    Text,
    Button,
    View,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    TouchableWithoutFeedback
} from 'react-native';

var TimerMixin = require('react-timer-mixin');
var CountDown = React.createClass({
  mixins: [TimerMixin],
  getInitialState: function () {
    return {
      time: this.props.time ? this.props.time : 10,
    };
  },
  componentDidMount(){
    this._countdown();
  },
  render(){
    var component;
      component =
      <View style={styles.clockrow}>
            <Text style={styles.clock}>{this.state.time}</Text>
      </View>
    
    return (
      component
    )
  },

  _countdown(){
    var timer = function () {
      var time = this.state.time - 1;
      this.setState({time: time});
      timeleft = time;
      if (time > 0) {
        this.setTimeout(timer, 1000);
      } else {
        this.setState({disabled: false});
        this.setState({time: this.props.time ? this.props.time : 10});
      }
    };
    this.setTimeout(timer.bind(this), 1000);
  }
});

var styles = StyleSheet.create({
  clock: {
    color: 'black',
    fontSize: 80,
  },
  clockrow: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

module.exports = CountDown;