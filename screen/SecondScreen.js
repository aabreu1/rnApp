import React from 'react';
import {Text, View, Button} from 'react-native';
const util = require('util');

export default class SecondScreen extends React.Component {
    static navigationOptions = {
        tabBarlabel:  'Second screen'
    };
    render(){

        return(
            <View>
                <Text> This is screen 2</Text>               
            </View>

        );
    }
}