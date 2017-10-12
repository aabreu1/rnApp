import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StatusBar,
    FlatList
} from 'react-native';

export default class  FlatListApp extends Component{
    constructor(props){
        super(props)
    }
    render(){
        var days = [
            {key: "monday"},
            {key: "tuesday"},
            {key: "wetnessday"},
            {key: "thursday"},
            {key: "friday"},
            {key: "saturday"},
            {key: "sunday"},
            {key: "enero"},
            {key: "febrero"},
            {key: "marzo"},
            {key: "abril"},
            {key: "mayo"},
            {key: "junio"},
            {key: "julio"},
            {key: "agosto"},
            {key: "septiembre"},

        ];
        return(
            <View style= {{ flex:1}}>
                <StatusBar hidden={true}/>

                <FlatList
                    data = {days}
                    renderItem = {({item}) => <Text 
                    style = {{ marginBottom: 10, fontSize: 40, height: 50, backgroundColor: 'lightblue'}}
                    > {item.key} </Text>}
                    
                >
                </FlatList>
            </View>
        );
    }
}






AppRegistry.registerComponent('rnApp', () => FlatListApp);