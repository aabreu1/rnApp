import React from 'react';
import {Text, View, Button} from 'react-native';
const util = require('util');

export default class SecondScreen extends React.Component {
    static navigationOption = {
        title:  'Second screen'
    };
    render(){
        console.log("this.props.navigation.state = " +util.inspect(this.props.navigation.state, false, null))
        var {params} = this.props.navigation.state; 
        return(
            <View>
                <Text> This is screen 2</Text>
                <Text> params from screen1 : {params.name}, email = {params.email}</Text>                
            </View>

        );
    }
}