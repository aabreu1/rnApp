import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StatusBar,
    ListView,
    ActivityIndicator
} from 'react-native';

export default class  FetchingApp extends Component{
    constructor(props){
        super(props)
        this.state= {
            loading: true,
            clonedMovies: []
        }
    }
    componentDidMount(){
        fetch("https://facebook.github.io/react-native/movies.json")
        .then((response) => response.json())
        .then((responseJson) => {
            var standarDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
                loading: false,
                clonedMovies: standarDataSource.cloneWithRows(responseJson.movies)
            });
        })
    }
    render(){
        if(this.state.loading){
            return(
                <View style= {{ flex:1, justifyContent: 'center'}}>
                    <ActivityIndicator/>
                </View>
            );
        }
        else{
            return(
                <View style= {{ flex:1}}>
                    <StatusBar hidden={true}/>
                    <ListView
    
                        dataSource={this.state.clonedMovies}
                        renderRow={
                            (rowData) => <Text> Title: {rowData.title}, release year: {rowData.releaseYear} </Text>
                        }
                    >
                    </ListView>
                </View>
            );
        } 
    }
}

AppRegistry.registerComponent('rnApp', () => FetchingApp);