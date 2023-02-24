import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Styling } from '../styleSheet';

export default function Layout1({navigation}) {
  return (
    <View style={Styling.container}>
        <View style={[styles.view1, Styling.fonts, Styling.borderDesign]}>
            <Text style={{fontSize: 30}}>Welcome</Text>
        </View>
        <View style={[styles.view2, Styling.fonts, Styling.borderDesign]}>
            <Text style={{fontSize: 20, fontWeight:'bold'}}>Group Members</Text>
            <Text style={{fontSize: 16}}>Ronit Sanghvi</Text>
            <Text style={{fontSize: 16}}>Saunik Dabhi</Text>
            <Text style={{fontSize: 16}}>Masum Salvi</Text>
            <Text style={{fontSize: 16}}>Karan Shah</Text>
            <Text style={{fontSize: 16}}>Himanshu Makhija</Text>

        </View>
        <TouchableOpacity style={[styles.view3, Styling.fonts, Styling.borderDesign]} onPress={()=> {navigation.navigate('Layout2')}}>
            <View>
                <Text style={{fontSize: 16}}>Press Here To Continue</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    view1:{
        flex: 1.5,
        marginBottom: 5,
    },
    view2:{
        flex: 6,
        marginBottom: 5,
    },
    view3:{
        flex: 1,
        marginBottom: 5,
        backgroundColor: 'rgba(0, 110, 220, 0.8)'
    }
});