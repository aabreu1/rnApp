import React from 'react';
import {Text, View, Button} from 'react-native';
const util = require('util');

export default class SecondScreen extends React.Component {
    static navigationOption = {
        title:  'Second screen'
    };
    render(){
        console.log("this.props.navigation.state = " +util.inspect(this.props.navigation.state, false, null))
        return(
            <View>
                <Text> This is screen 2</Text>
            </View>

        );
    }
}