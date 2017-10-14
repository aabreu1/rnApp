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
                <Button
                    onPress={
                        ()=> navigate("Second", {name: "Andres", email: "aabreu1"})
                    }
                    title = "Go to screen 2"
                />
            </View>

        );
    }
}