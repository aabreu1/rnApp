import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View
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
            <Text>{this.state.isShownText ? this.props.textContent : ''}</Text>

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