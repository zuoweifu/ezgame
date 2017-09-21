import { StyleSheet, Dimensions, Alert, AppRegistry, Platform, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import Gamepage from './Gamepage';

export default StyleSheet.create({
  container: {
   width:Dimensions.get('window').width,
   height:Dimensions.get('window').height,
   backgroundColor: 'white', 
   },
   row: {
      flex:1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
   },
   box: {
      width: Dimensions.get('window').width /4,
      height: Dimensions.get('window').width /4,
      margin: 5,
      borderRadius:10,
      flexDirection:'row', 
      flexWrap:'wrap',
   },
   scorerow: {
    justifyContent: 'center',
    alignItems: 'center',
    top:30,
    height: 120,
   },
   score: {
    fontSize:40,
   },
   gobackrow: {
    height: 40,
   },
});