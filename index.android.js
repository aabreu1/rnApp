import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
 
} from 'react-native';

export default class DinoComp extends Component {
    render(){
        return(
        <View>
            <Text>props in react Native - Andres Abreu</Text>
            <Image
                source={
                    {uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Marasuchus.JPG/800px-Marasuchus.JPG"}
                }
        
                style={
                    {width: 350, height: 190}
                }
                
            />
        </View>
        );
    }
}
AppRegistry.registerComponent('rnApp', () => DinoComp);