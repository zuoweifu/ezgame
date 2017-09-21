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
import Timer from '/Users/fuzuowei/ezgame/ezgame/app/components/Timer/Timer';


var counter = 0;
var Score = 0;
var pre = 0;


export default class Gamepage extends Component{
  //constructor
    constructor() {
    super();
    this.state = {
        textValue: '1',
        backgroundColor1: 'yellow',
        backgroundColor2: 'yellow',
        backgroundColor3: 'yellow',
        backgroundColor4: 'yellow',
        backgroundColor5: 'yellow',
        backgroundColor6: 'yellow',
        backgroundColor7: 'yellow',
        backgroundColor8: 'yellow',
        backgroundColor9: 'yellow',
        count: '0',
    };
  }

  componentDidMount(){
    var rand = this.RadNum().toString();
    this.setState({
        textValue:rand,
         });
    pre = rand;
    this.setColor(rand);
         this.timeoutHandle = setTimeout(()=>{
              this.gameover();
         }, 10000);
    }

    componentWillUnmount(){
         clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
    }

  //generate random number
RadNum() {
    var rand = Math.random()* (10 - 1) + 1;
    rand = Math.floor(rand);
    return rand;
}

checkPress(index){
  if (this.state.textValue != index){
      clearTimeout(this.timeoutHandle);
       this.gameover();
    }
}



  //onpress function
onPress(index) {
    this.checkPress(index);
    if (pre === '1'){
      this.setState({backgroundColor1:'yellow',});
    }else if (pre === '2'){
      this.setState({backgroundColor2:'yellow',});
    }else if (pre === '3'){
      this.setState({backgroundColor3:'yellow',});
    }else if (pre === '4'){
      this.setState({backgroundColor4:'yellow',});
    }else if (pre === '5'){
      this.setState({backgroundColor5:'yellow',});
    }else if (pre === '6'){
      this.setState({backgroundColor6:'yellow',});
    }else if (pre === '7'){
      this.setState({backgroundColor7:'yellow',});
    }else if (pre === '8'){
      this.setState({backgroundColor8:'yellow',});
    }else if (pre === '9'){
      this.setState({backgroundColor9:'yellow',});
    }

      if (this.state.textValue === index){
            counter++;
    }
    var rand = this.RadNum().toString();
    while ( rand == this.state.textValue ){
        rand = this.RadNum().toString();
    }
    this.setState({
        textValue:rand,
        count:counter,
         });
    pre = rand;

    this.setColor(rand);
     
  }

  setColor(rand){
        switch (rand){
      case '1':
      return this.setState({backgroundColor1:'#32EA8E',});
    
      case '2':
      return this.setState({backgroundColor2:'#32EA8E',});
    
      case '3':
      return this.setState({backgroundColor3:'#32EA8E',});
    
      case '4':
      return this.setState({backgroundColor4:'#32EA8E',});

      case '5':
      return this.setState({backgroundColor5:'#32EA8E',});

      case '6':
      return this.setState({backgroundColor6:'#32EA8E',});

      case '7':
      return this.setState({backgroundColor7:'#32EA8E',});

      case '8':
      return this.setState({backgroundColor8:'#32EA8E',});

      case '9':
      return this.setState({backgroundColor9:'#32EA8E',});
    
      default:
      return ;
    }
  }

  goback(){
      counter = 0;
    this.props.navigator.pop()
  }

navigate(name){
        this.props.navigator.push({
            name
        })
    }

  gameover(){
      Score = counter;
      counter = 0;
      this.navigate('Gameover');
  }



  render(){
    return (

      <View style = {styles.container}>
        <View style = {styles.scorerow}>
        <Text style = {styles.score}>Score:{this.state.count}</Text>
        </View>
 
        <Timer/>


        <View style = {styles.row}>

           <TouchableOpacity style = {{
            width: Dimensions.get('window').width /4,
            height: Dimensions.get('window').width /4,
            margin: 5,
            borderRadius:10,
            flexDirection:'row', 
            flexWrap:'wrap',
            backgroundColor: this.state.backgroundColor1,
           }}
        underlayColor = {'red'}
        onPress={() => this.onPress('1')}>
             <View>
             </View>
        </TouchableOpacity>

        <TouchableOpacity style = {{
            width: Dimensions.get('window').width /4,
            height: Dimensions.get('window').width /4,
            margin: 5,
            borderRadius:10,
            flexDirection:'row', 
            flexWrap:'wrap',
            backgroundColor: this.state.backgroundColor2,
           }}
        underlayColor = {'red'}
        onPress={() => this.onPress('2')}>
             <View>
             </View>
        </TouchableOpacity>

        <TouchableOpacity style = {{
            width: Dimensions.get('window').width /4,
            height: Dimensions.get('window').width /4,
            margin: 5,
            borderRadius:10,
            flexDirection:'row', 
            flexWrap:'wrap',
            backgroundColor: this.state.backgroundColor3,
           }}
        underlayColor = {'red'}
        onPress={() => this.onPress('3')}>
             <View>
             </View>
        </TouchableOpacity>

        <TouchableOpacity style = {{
            width: Dimensions.get('window').width /4,
            height: Dimensions.get('window').width /4,
            margin: 5,
            borderRadius:10,
            flexDirection:'row', 
            flexWrap:'wrap',
            backgroundColor: this.state.backgroundColor4,
           }}
        underlayColor = {'red'}
        onPress={() => this.onPress('4')}>
             <View>
             </View>
        </TouchableOpacity>

        <TouchableOpacity style = {{
            width: Dimensions.get('window').width /4,
            height: Dimensions.get('window').width /4,
            margin: 5,
            borderRadius:10,
            flexDirection:'row', 
            flexWrap:'wrap',
            backgroundColor: this.state.backgroundColor5,
           }}
        underlayColor = {'red'}
        onPress={() => this.onPress('5')}>
             <View>
             </View>
        </TouchableOpacity>

        <TouchableOpacity style = {{
            width: Dimensions.get('window').width /4,
            height: Dimensions.get('window').width /4,
            margin: 5,
            borderRadius:10,
            flexDirection:'row', 
            flexWrap:'wrap',
            backgroundColor: this.state.backgroundColor6,
           }}
        underlayColor = {'red'}
        onPress={() => this.onPress('6')}>
             <View>
             </View>
        </TouchableOpacity>

        <TouchableOpacity style = {{
            width: Dimensions.get('window').width /4,
            height: Dimensions.get('window').width /4,
            margin: 5,
            borderRadius:10,
            flexDirection:'row', 
            flexWrap:'wrap',
            backgroundColor: this.state.backgroundColor7,
           }}
        underlayColor = {'red'}
        onPress={() => this.onPress('7')}>
             <View>
             </View>
        </TouchableOpacity>

        <TouchableOpacity style = {{
            width: Dimensions.get('window').width /4,
            height: Dimensions.get('window').width /4,
            margin: 5,
            borderRadius:10,
            flexDirection:'row', 
            flexWrap:'wrap',
            backgroundColor: this.state.backgroundColor8,
           }}
        underlayColor = {'red'}
        onPress={() => this.onPress('8')}>
             <View>
             </View>
        </TouchableOpacity>

        <TouchableOpacity style = {{
            width: Dimensions.get('window').width /4,
            height: Dimensions.get('window').width /4,
            margin: 5,
            borderRadius:10,
            flexDirection:'row', 
            flexWrap:'wrap',
            backgroundColor: this.state.backgroundColor9,
           }}
        underlayColor = {'red'}
        onPress={() => this.onPress('9')}>
             <View>
             </View>
        </TouchableOpacity> 
        </View>   

        <View style = {styles.gobackrow}>
        <Button 
        color="black"
        onPress={() => this.goback()}
        title="Go back"/>
        </View>

         </View>

    );
  }
}


export {Score};

AppRegistry.registerComponent('Gamepage', () => Gamepage);