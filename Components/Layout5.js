import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Styling } from '../styleSheet';

export default function Layout5() {
  return (
    <View style={Styling.container}>
        <View style={styles.view1}>
            <View style={[styles.view3, Styling.borderDesign]}></View>
            <View style={[styles.view4, Styling.borderDesign]}></View>
        </View>
        <View style={styles.view2}>
            <View style={[styles.view5, Styling.borderDesign]}></View>
            <View style={[styles.view6, Styling.borderDesign]}></View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    view1:{
        flex: 4,
        marginBottom: 5,
        justifyContent:'flex-end'
    },
    view2:{
        flex: 6,
        marginBottom: 5,
        justifyContent:'flex-end',
        paddingBottom: 30
    },
    view3:{
        height: 60,
        width: 60,
        marginBottom: 5,
        alignSelf:'flex-end'
    },
    view4:{
        height: 100,
        width: '100%',
        marginBottom: 5,
    },
    view5:{
        height: 80,
        width: '100%',
        marginBottom: 5,
    },
    view6:{
        height: 60,
        width: '100%',
        marginBottom: 5,
    }
});
