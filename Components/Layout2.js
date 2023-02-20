import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Styling } from '../styleSheet';

export default function Layout2() {
  return (
    <View style={Styling.container}>
        <View style={[styles.view1, Styling.borderDesign]}></View>
        <View style={[styles.view2, Styling.borderDesign]}></View>
        <View style={[styles.view3, Styling.borderDesign]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    view1:{
        flex: 1.5,
        marginBottom: 5
    },
    view2:{
        flex: 6,
        marginBottom: 5,
    },
    view3:{
        flex: 1,
        marginBottom: 5,
    }
});