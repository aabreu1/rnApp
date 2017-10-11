import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StatusBar
} from 'react-native';



class Blink extends Component{
    constructor(props){
        super(props);
        this.state = {isShownText: true};
        setInterval(
            ()=> {
                this.setState(previousState=>{
                    return {isShownText: !previousState.isShownText}
                });

            },
            500
        )

    }
    
    render(){
        return(
            <View>
            <StatusBar hidden={true}/>
            <Text>{this.state.isShownText ? this.props.textContent : ''}</Text>
            </View>
        );
    }

}

export default class BlinkApp extends Component {
    render(){
        return(        
            <Blink textContent = "Blink"/>
        );
    }
}



AppRegistry.registerComponent('rnApp', () => BlinkApp);