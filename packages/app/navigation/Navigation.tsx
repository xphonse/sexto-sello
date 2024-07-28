import * as React from 'react'
import { StatusBar } from 'expo-status-bar'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen, { homeScreenOptions } from '../screens/Home'
import Oraciones, { oracionesScreenOptions } from '../screens/Oraciones'
import Oracion, { oracionScreenOptions } from '../screens/Oracion'
import Cantos, { cantosScreenOptions } from '../screens/Cantos'
import Canto, { cantoScreenOptions } from '../screens/Canto'
import Informacion from '../screens/Informacion'
import useThemeColors from '../hooks/useThemeColors'

const MyStack = createNativeStackNavigator()

const MainNavigation = () => {
    const { themeColors, themeMode } = useThemeColors()
    return (
        <NavigationContainer initialRouteName="Home">
            <StatusBar style={themeMode == 'light' ? 'dark' : 'light'} />
            <MyStack.Navigator
                screenOptions={{
                    headerTintColor: themeColors.color,
                    headerStyle: {
                        backgroundColor: themeColors.backgroundColor,
                    },
                }}
            >
                <MyStack.Screen
                    name="Inicio"
                    component={HomeScreen}
                    options={homeScreenOptions}
                />
                <MyStack.Screen
                    name="Oraciones"
                    component={Oraciones}
                    options={oracionesScreenOptions}
                />
                <MyStack.Screen
                    name="Oracion"
                    component={Oracion}
                    options={oracionScreenOptions}
                />
                <MyStack.Screen
                    name="Cantos"
                    component={Cantos}
                    options={cantosScreenOptions}
                />
                <MyStack.Screen
                    name="Canto"
                    component={Canto}
                    options={cantoScreenOptions}
                />
                <MyStack.Screen name="Informacion" component={Informacion} />
            </MyStack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation
