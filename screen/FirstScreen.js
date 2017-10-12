import React from 'react';
import {Text, VIew, Button} from 'react-native';
const util = require('util');

export default class FirstScreen extends React.Component {
    static navigationOption = {
        title:  'First screen'
    };
    render(){
        return(
            <View>
                <Text> This is screen 1</Text>
                <Button
                   // onPress={

                   // }
                    tittle = 'Go to screen 2'
                />
            </View>

        );
    }
}