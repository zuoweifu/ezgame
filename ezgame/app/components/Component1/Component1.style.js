import { StyleSheet, Dimensions, Alert, AppRegistry, Platform, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import Component1 from './Component1';

export default StyleSheet.create({
  container: {
   },
   row: {
      flex:1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      padding:2,
      top:Dimensions.get('window').height /4,
   },
   box: {
      width: Dimensions.get('window').width /4,
      height: Dimensions.get('window').width /4,
      margin: 5,
      borderRadius:10,
      flexDirection:'row', 
      flexWrap:'wrap',
   },
});