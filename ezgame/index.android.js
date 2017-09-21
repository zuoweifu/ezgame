import React, {Component} from 'react';
import {
    AppRegistry, 
    Stylesheet,  
    Text, 
    View} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import Startpage from './app/components/Startpage/Startpage';
import Gamepage from './app/components/Gamepage/Gamepage';
import Gameover from './app/components/Gameover/Gameover';

export default class ezgame extends Component{
    constructor(){
        super()
        this.renderScene = this.renderScene.bind(this)
    }

    renderScene(route, navigator){
        if (route.name === 'Startpage'){
            return <Startpage navigator={navigator} />
        }else if (route.name === 'Gamepage'){
            return <Gamepage navigator={navigator}/>
        }else if (route.name === 'Gameover'){
            return <Gameover navigator={navigator}/>
        }
      }
   

  render(){
    return(
      <Navigator 
      initialRoute = {{name:'Startpage'}}
      renderScene={this.renderScene}/>
      );
    }

  navigatorRenderScene(route,navigator){
    switch(route.id){
        case 'Startpage':
            return(<Startpage navigator={navigator} title = "Startpage" />);
        case 'Gamepage':
            return(<Gamepage navigator={navigator} title = "Gamepage" />);
        case 'Gameover':
            return (<Gamepage navigator={navigator} title="Gameover"/>);
    }
  }



}

AppRegistry.registerComponent('ezgame', () => ezgame);