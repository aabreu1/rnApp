import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text
} from 'react-native';

import {TabNavigator} from 'react-navigation';
import FirstScreen from './screen/FirstScreen'
import SecondScreen from './screen/SecondScreen'

var Navigation = TabNavigator({
    
    First: {screen: FirstScreen},
    Second: {screen: SecondScreen}
});

Navigation.navigationOptions = {
    title: "Tab example"
};

//expor navigator as the root component
//export default  Navigation;

AppRegistry.registerComponent('rnApp', () => Navigation);

