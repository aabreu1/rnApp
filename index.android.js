/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Button
} from 'react-native';
import ComponenteNuevo from './ComponenteNuevo'

export class CompHijo extends Component{
  render(){
    return(
      <View>
        <View style={this.props.status ? styles.on : styles.off} />
      </View>
    );
  }
}

export default class rnApp extends Component {

  constructor(){
    super();
    this.state = {status: false}

  }

  clicked(){
    this.setState({
      status: !this.state.status
    })
  }


  render() {
    return (
      <View style={styles.container}>
        
        <CompHijo status={this.state.status}/>
       
        <Button 
          onPress={this.clicked.bind(this)} 
          title= 'Bite me ;)'
          color= 'green' 
        />


      </View>

    );
  }
}

const styles = StyleSheet.create({
  on: {
    width:100,
    height:100,
    backgroundColor: 'yellow'
  },
  off:{
    width:100,
    height:100,
    backgroundColor: 'black'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
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
});

AppRegistry.registerComponent('rnApp', () => rnApp);
