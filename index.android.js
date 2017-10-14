import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import FirstScreen from './screen/FirstScreen'
import SecondScreen from './screen/SecondScreen'

const Navigation = StackNavigator({
    
    First: {screen: FirstScreen},
    Second: {screen: SecondScreen}
});

//expor navigator as the root component
//export default  Navigation;

AppRegistry.registerComponent('rnApp', () => Navigation);

