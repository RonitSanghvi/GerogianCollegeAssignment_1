import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Styling } from '../styleSheet';

export default function Layout2({navigation}) {
  return (
    <View style={Styling.container}>
        <View style= {[styles.view1, Styling.borderDesign, Styling.fonts]}>
            <Text style={{fontSize: 20, fontWeight:'bold', marginBottom:5}}>This is Layout 2</Text>
            <Text style={{fontSize: 16}}>The next 4 Layout is Given Below</Text>
            <Text style={{fontSize: 16}}>Layout number is on the Header.</Text>
        </View>
        <View style= {[styles.view2, Styling.borderDesign]}>
            <TouchableOpacity style= {[styles.view3, Styling.borderDesign]} onPress={()=>{navigation.navigate('Layout3')}} ><View ><Text>3</Text></View></TouchableOpacity>
            <TouchableOpacity style= {[styles.view3, Styling.borderDesign]} onPress={()=>{navigation.navigate('Layout4')}} ><View ><Text>4</Text></View></TouchableOpacity>
            <TouchableOpacity style= {[styles.view3, Styling.borderDesign]} onPress={()=>{navigation.navigate('Layout5')}} ><View ><Text>5</Text></View></TouchableOpacity>
            <TouchableOpacity style= {[styles.view3, Styling.borderDesign]} onPress={()=>{navigation.navigate('Layout6')}} ><View ><Text>6</Text></View></TouchableOpacity>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    view1:{
        flex: 7,
        marginBottom: 5,
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
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(0, 110, 220, 0.8)'
    }
});
  