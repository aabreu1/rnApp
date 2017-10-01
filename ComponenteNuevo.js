import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class ComponenteNuevo extends Component{
    render(){
      return(
        <View>
          <Text style={styles.blue}>
            NUEVO {2*3}
          </Text>
        </View>
      );
    }
  } 

  const styles = StyleSheet.create({
      blue: {
          color: 'blue' 
      }
    })
  