import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Styling } from '../styleSheet';

export default function Layout4() {
  return (
    <View style={Styling.container}>
        <View style={styles.view1}>
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
    container: {
        flexDirection:'column',
        height: '100%',
        width:'100%',
        padding: 10,
    },
    view1:{
        flex: 5,
        marginBottom: 5,
        justifyContent:'space-evenly',
        paddingHorizontal: 5
    },
    view2:{
        flex: 2,
        marginBottom: 5,
        justifyContent:'center',
        alignItems:'flex-end'
    },
    view3:{
        width: '100%',
        height:'22%',
    },
    view4:{
        width: 50,
        height: 50,
        marginRight: 5
    }
});