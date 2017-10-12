import React from 'react';
import {Text, VIew, Button} from 'react-native';
const util = require('util');

export default class SecondScreen extends React.Component {
    static navigationOption = {
        title:  'Second screen'
    };
    render(){
        return(
            <View>
                <Text> This is screen 2</Text>
        
            </View>

        );
    }
}