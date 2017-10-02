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
  Button,
  ListView
} from 'react-native';



export default class rnApp extends Component {

  constructor(){
    super();

    var dataS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2 })
    this.state = {
      status: false,
      data: null,
      dataSource: dataS.cloneWithRows([])
    }

  }
  componentDidMount(){
    fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        data: responseJson.movies
      })
    })
  }

  clicked(){
    this.setState({
      status: !this.state.status
    })
  }


  render() {
    return (
      <View style={styles.container}>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  on: {
    width:100,
    height:100,
    backgroundColor: 'red'
  },
  off:{
    width:100,
    height:100,
    backgroundColor: 'white'
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
  blanco:{
    color: 'white'
  }
});

AppRegistry.registerComponent('rnApp', () => rnApp);
