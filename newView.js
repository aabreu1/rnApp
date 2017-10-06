import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
} from 'react-native';

export default class newView extends Component{
  render(){
    return(
      <View style={styles.containerDetails}>
        <Text>(this.props.dataRow)</Text>
      </View>
    )
  }
}



const styles = StyleSheet.create({
    containerDetails:{
      paddingTop:80
    },
    cell: {
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
      paddingTop: 20,
      paddingBottom: 20,
      alignItems: 'center'
    },
    container: {
      flex: 1,
      backgroundColor: 'cyan',
      paddingTop: 20
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    blanco:{
      color: 'white'
    }
  });