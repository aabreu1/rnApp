import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StatusBar,
    TextInput
} from 'react-native';

export default class  BlinkApp extends Component{
    constructor(props){
        super(props)
        this.state = { text: ""}
    }
    hadleChangeText=(typedText)=>{
        this.setState({text: typedText});
    }
    render(){
        return(
            <View style= {{
                padding: 10
            }}>

            <TextInput
                style={
                    {
                        height: 50
                    }
                }

                placeholder = "placeholder text"
                onChangeText={
                    (typedText) => { this.setState({text: typedText})}
                }
                value={this.state.text}
            />

            <Text
                style={
                    {
                        padding: 20,
                        fontSize: 30
                    }
            }>
            You type. {this.state.text}
            </Text>
            <StatusBar hidden={true}/>
                
            </View>


        );
    }

}




AppRegistry.registerComponent('rnApp', () => BlinkApp);