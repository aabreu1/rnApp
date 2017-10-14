import React from 'react';
import {Text, View, Button} from 'react-native';
const util = require('util');

export default class FirstScreen extends React.Component {
    static navigationOption = {
        title:  'First screen'
    };
    render(){
        console.log("this.props.navigation = " +util.inspect(this.props.navigation, false, null))     
        return(
            <View>
                <Text> This is screen 1</Text>

            </View>

        );
    }
}