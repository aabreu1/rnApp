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
    StyleSheet
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
                <Button style = {styles.insideButton}  onPress= {this.handlePressButton}
                    title="TAP ME"
                />
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