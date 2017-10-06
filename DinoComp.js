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
                    {uri:"https://images-na.ssl-images-amazon.com/images/I/518uHeDmZKL._SL1024_.jpg"}
                }
        
                style={
                    {width: 190, height: 190}
                }
                
            />
        </View>
        );
    }
}
//AppRegistry.registerComponent('rnApp', () => DinoComp);