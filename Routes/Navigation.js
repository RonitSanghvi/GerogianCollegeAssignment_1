import React from 'react';
import Layout1 from '../Components/Layout1';
import Layout2 from '../Components/Layout2';
import Layout3 from '../Components/Layout3';
import Layout4 from '../Components/Layout4';
import Layout5 from '../Components/Layout5';
import Layout6 from '../Components/Layout6';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'

export default function ScreenNavigation() {

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Layout1'>
                <Stack.Screen
                    name='Layout1'
                    component={Layout1}
                />
                <Stack.Screen
                    name='Layout2'
                    component={Layout2}
                />
                <Stack.Screen
                    name='Layout3'
                    component={Layout3}
                />
                <Stack.Screen
                    name='Layout4'
                    component={Layout4}
                />
                <Stack.Screen
                    name='Layout5'
                    component={Layout5}
                />
                <Stack.Screen
                    name='Layout6'
                    component={Layout6}
                />


            </Stack.Navigator>
        </NavigationContainer>
    )


}