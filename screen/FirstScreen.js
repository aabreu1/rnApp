import React from 'react';
import {Text, View, Button} from 'react-native';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const util = require('util');

export default class FirstScreen extends React.Component {
    static navigationOptions = {
        tabBarlabel:  'First screen',
     /*   drawerIcon: (tintColor)=>  {
            return(
                <MaterialIcons>
                    name=""
                    size={24}
                    style=~{{color:_}}
                </MaterialIcons>
            );
        }*/
    }
    render(){
        return(
            <View style = {{
                flex:                  1,
                justifyContent: 'center',
                alignItems:     'center'
            }}>
                <Text style = {{fontSize: 30, color: 'blue'}}>
                    Screen1
                </Text>  
                <Button
                    onPress ={() =>  this.props.navigation.navigate('DrawerOpen')}
                    title   = 'Open Nav'
                />
            </View>
        );
    }
}