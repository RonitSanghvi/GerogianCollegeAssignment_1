import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Styling } from '../styleSheet';

export default function Layout1() {
  return (
    <View style={Styling.container}>
        <View style= {[styles.view1, Styling.borderDesign]}></View>
        <View style= {[styles.view2,Styling.borderDesign]}>
            <View style= {[styles.view3, Styling.borderDesign]}></View>
            <View style= {[styles.view3, Styling.borderDesign]}></View>
            <View style= {[styles.view3, Styling.borderDesign]}></View>
            <View style= {[styles.view3, Styling.borderDesign]}></View>

        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    view1:{
        flex: 7,
        marginBottom: 5
    },
    view2:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    view3:{
        height:'80%',
        width:'20%',
    }
});
  