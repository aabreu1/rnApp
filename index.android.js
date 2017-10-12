import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StatusBar,
    ScrollView,
    Image
} from 'react-native';

export default class  ScrollerApp extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ScrollView horizontal= {true}>
                <StatusBar hidden={true}/>
                <Text style={{
                    fontSize: 30,
                    padding:20,
                    backgroundColor: 'red'
                }}>
                    This is a text in a scrollView
                </Text>
                <Text style={{
                    fontSize: 30,
                    padding:20,
                    backgroundColor: 'green'
                }}>
                    This is second text
                </Text>
                <Text style={{fontSize:96}}>What's the best</Text>
                <Text style={{fontSize:96}}>What's the best</Text>
                <Text style={{fontSize:96}}>What's the best</Text>



            </ScrollView>
        );
    }
}






AppRegistry.registerComponent('rnApp', () => ScrollerApp);