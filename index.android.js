import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StatusBar,
    FlatList,
    SectionList
} from 'react-native';

export default class  SectionListApp extends Component{
    constructor(props){
        super(props)
    }
    render(){
        var data = [
            {title: "A", data: ["Alexander", "Alan Turing"], key: "A"},
            {title: "B", data: ["Barbara", "Brooke", "Brenda"], key: "B"},
            {title: "C", data: ["David", "Dylan", "Diego", "Dakota"], key: "D"},
        ];
        return(
            <View style= {{ flex:1}}>
                <StatusBar hidden={true}/>

                <SectionList
                    sections = {data}
                    renderItem = {({item}) => 
                    <Text 
                    style = {{ marginBottom: 10, fontSize: 40, height: 50, backgroundColor: 'lightblue'}}
                    > {item} </Text>}
                    renderSectionHeader={
                        ({section}) => <Text>{section.title}</Text>

                    }
                >
                </SectionList>
            </View>
        );
    }
}






AppRegistry.registerComponent('rnApp', () => SectionListApp);