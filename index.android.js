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
          let myImage = {uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Marasuchus.JPG/800px-Marasuchus.JPG"};
          let size    = {width: 365, height: 190};
        return(
        <View>
            <Drescription contenido = "Raptor"/>
            <Image
                source={myImage}
                style={size}
            />
        </View>
        );
    }
}

class Description extends Component{
      render(){
        return(
          <Text>Squeleton's {this.props.contenido}</Text>
        );
      }
    }

AppRegistry.registerComponent('rnApp', () => DinoComp);