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

export class Cargando extends Component{
  render(){
      return(
        <Text style={styles.blanco}> CARGANDO</Text>
      )
  }
}

export class CompHijo extends Component{
  render(){
    
    if (this.props.result){
      var  res = this.props.result.map((item, i) => {
        return(
          <Text key={i}>{item.title}</Text>
        )
      })
    }else{
       { return (<Cargando/>) } 
    }
    return(
      <View> 
        {res}
        <View style={this.props.status ? styles.on : styles.off} />
      </View>
    )
  }
}

export default class rnApp extends Component {

  constructor(){
    super();
    this.state = {
      status: false,
      data: null
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
        <CompHijo status={this.state.status} result={this.state.data}/>
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
