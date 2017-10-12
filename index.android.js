import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StatusBar,
    ListView
} from 'react-native';

export default class  SectionListApp extends Component{
    constructor(props){
        super(props)
 
    }
    render(){

        var standarDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var movies = [
            {
                title: "Star Wars",
                releaseYear: "1977"
            },
            {
                title: "The Matrix",
                releaseYear: "1999"
            }
        ];
        var clonedMovies = standarDataSource.cloneWithRows(movies);
        return(
            <View style= {{ flex:1}}>
                <StatusBar hidden={true}/>
                <ListView
                    dataSource={clonedMovies}
                    renderRow={
                        (rowData) => <Text> Title: {rowData.title}, release year: {rowData.releaseYear} </Text>
                    }
                >

                </ListView>
            </View>
        );
    }
}






AppRegistry.registerComponent('rnApp', () => SectionListApp);