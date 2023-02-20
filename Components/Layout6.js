import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Styling } from '../styleSheet';

export default  function Layout6() {
  return (
    <View style={Styling.container}>
        <View style={styles.view1}></View>
        <View style={styles.view2}>
            <View style={[styles.view3, Styling.borderDesign]}></View>
            <View>
                <View style={[styles.view3, Styling.borderDesign]}></View>
                <View style={[styles.view3, Styling.borderDesign]}></View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    view1:{
        flex: 4,
        borderBottomWidth: 5,
        borderColor:'black',
        marginBottom: 5
    },
    view2:{
        flex: 6,
        marginBottom: 5,
        justifyContent: 'space-between',
        paddingBottom: 20
    },
    view3:{
        height: 40,
        width: '100%',
        marginBottom: 5,
    }
});