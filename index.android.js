import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text
} from 'react-native';

import {DrawerNavigator} from 'react-navigation';
import FirstScreen from './screen/FirstScreen'
import SecondScreen from './screen/SecondScreen'

const Navigation = DrawerNavigator(
    { //router config
        First: {
            path: '/',
            screen: FirstScreen
        },
        Second: {
            path: '/sent',
            screen: SecondScreen
        }
    },
    {   //drawer navigation config
        initialRouteName:   'Second',
        drawerPosition:     'right',
        contentOptions:     {
            activeTintColor: 'red'
        }
    }

);

//expor navigator as the root component
//export default  Navigation;

AppRegistry.registerComponent('rnApp', () => Navigation);

