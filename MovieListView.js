import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Button,
  ListView,
  TouchableHighlight,
  Alert
} from 'react-native';
import newView from './newView';

export default class MovieListView extends Component {

  constructor(){
    super();

    var dataS = new ListView.DataSource({rowHasChanged: (rowOld, rowNew) => rowOld != rowNew })
    this.state = {
      status: false,
      data: null,
      dataSource: dataS.cloneWithRows([])
    }

  }
  componentDidMount(){
    var titles = [];
    fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      var movies = responseJson.movies;
      for(var i= 0; i < movies.length; i++){
        titles.push(movies[i].title);
      }
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(titles)
      })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView 
          enableEmptySections={true} 
          dataSource={this.state.dataSource} 
          renderRow={this.renderRow.bind(this)}
        />
      </View>

    );
  }
  pressCell(dataRow){
    this.props.Navigator.push({
        ident: 'newView',
        dataRow
    })
  }
  renderRow(dataRow) {
    return(
      <TouchableHighlight onPress={() => this.pressCell(dataRow)}>
        <View style = {styles.cell}>
          <Text>{dataRow}</Text>
        </View>
      </TouchableHighlight>
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