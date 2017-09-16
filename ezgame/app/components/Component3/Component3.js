// import React, { Component,} from 'react';
// import {AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   TouchableHighlight}
//   from'react-native';

// export default class Component3 extends Component{
// var  colors = ['#ddd', '#efefef', 'red', '#666', 'rgba(0,0,0,.1)', '#ededed'];
// var backgroundcolors = ['green', 'black', 'orange', 'blue', 'purple', 'pink'];

// var SampleApp = React.createClass({

//   getInitialState() {
//     return {
//         color: 'orange',
//       backgroundColor: 'rgba(0,0,0,.1)'
//     }
//   },

//   _changeStyle() {
//     var color = colors[Math.floor(Math.random()*colors.length)];
//     var backgroundColor = backgroundcolors[Math.floor(Math.random()*backgroundcolors.length)];
//     this.setState({
//         color: color,
//       backgroundColor: backgroundColor
//     })
//   },

//   render: function() {
//     return (
//       <View style={styles.container}>
//         <TouchableHighlight 
//         onPress={ () => this._changeStyle() }
//         style={{ backgroundColor: this.state.backgroundColor, height: 60, flexDirection: 'row', alignItems:'center', justifyContent: 'center' }}>
//                 <Text style={{ fontSize: 22, color: this.state.color }}>CHANGE COLOR</Text>
//         </TouchableHighlight>

//         <TouchableHighlight style={{ backgroundColor: 'red', height: 60, flexDirection: 'row', alignItems:'center', justifyContent: 'center' }}>
//           <Text style={{ color: 'white', fontSize:22 }} >Click Me</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// });

// // var styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     marginTop:60
// //   }
// // });
// }
// AppRegistry.registerComponent('Component3', () => Component3);