import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Styling } from '../styleSheet';

export default function Layout3() {
  return (
    <View style={Styling.container}>

        <View style={styles.view1}>
            <View style={[styles.view3, Styling.borderDesign]}></View>
            <View style={[styles.view3, Styling.borderDesign]}></View>
            <View style={[styles.view3, Styling.borderDesign]}></View>
            <View style={[styles.view3, Styling.borderDesign]}></View>
            <View style={[styles.view3, Styling.borderDesign]}></View>
            <View style={[styles.view3, Styling.borderDesign]}></View>
            <View style={[styles.view3, Styling.borderDesign]}></View>
            <View style={[styles.view3, Styling.borderDesign]}></View>
            <View style={[styles.view3, Styling.borderDesign]}></View>
        </View>
        
        <View style={styles.view2}>
            <View style={[styles.view4, Styling.borderDesign]}></View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    view1:{
        flex: 4,
        marginBottom: 5,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-evenly',
    },
    view2:{
        flex: 3,
        justifyContent:'flex-end',
        alignItems: 'flex-end',
    },
    view3:{
        height: '30%',
        width: '30%',
        marginTop: 7,
    },
    view4:{
        height: 60,
        width: 60,
        marginRight: 10,
        marginBottom: 40,
    }
});