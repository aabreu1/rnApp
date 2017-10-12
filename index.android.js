import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StatusBar
} from 'react-native';

class Blink extends Component{
    render(){
        return(
            <View style={{
                flex : 1,
                flexDirection : 'row',
                justifyContent: 'space-around',
                alignItems: 'center'
                }}>
            <StatusBar hidden={true}/>
                <View style={{
                    width: 60,
                    height: 60,
                    backgroundColor: 'yellow'}}/>

                <View style={{
                    width: 60,
                    height: 60,
                    backgroundColor: 'blue'}}/>

                <View style={{
                    width: 60,
                    height: 60,
                    backgroundColor: 'red'}}/>
            </View>


        );
    }

}




AppRegistry.registerComponent('rnApp', () => BlinkApp);