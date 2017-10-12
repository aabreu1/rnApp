import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StatusBar,
    TextInput,
    Button,
    Alert,
    ToastAndroid,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

export default class  TouchesApp extends Component{
    constructor(props){
        super(props)
    }
    handlePressButton = () => {
        ToastAndroid.showWithGravity('All Your Base Are Belong To Us', ToastAndroid.SHORT, ToastAndroid.CENTER);
    }

    render(){
        return(
            <View style = {styles.container}>
                <StatusBar hidden={true}/>
                <TouchableHighlight
                    style = {styles.insideButton}  
                    onPress= {this.handlePressButton}
                    underlayColor='red'>
                     <Text> TouchableHL </Text>
                    </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    insideButton:{
        margin: 20,
        justifyContent: 'center'
    }
} );




AppRegistry.registerComponent('rnApp', () => TouchesApp);