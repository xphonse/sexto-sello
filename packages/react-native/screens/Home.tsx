import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'

import { setFontSizeByValue, setThemeMode } from '../store/slices/ui'
import MainFrame from '../components/MainFrame'
import TitleButton from '../components/TitleButton'
import appConstants from '../data/constants'
import useThemeColors from '../hooks/useThemeColors'
import { fontSizes, spacing } from 'data'

const Home = (props) => {
    const dispatch = useDispatch()
    const { themeColors } = useThemeColors()

    useEffect(() => {
        const readStorage = async () => {
            let fontSize: number = +(await AsyncStorage.getItem('fontSize'))
            let themeMode = await AsyncStorage.getItem('themeMode')
            if (fontSize == null || themeMode == null) {
                fontSize = appConstants.initialFontSize
                themeMode = appConstants.initialThemeMode
                await AsyncStorage.setItem('fontSize', JSON.stringify(fontSize))
                await AsyncStorage.setItem('themeMode', themeMode)
            }
            dispatch(setFontSizeByValue(fontSize))
            dispatch(setThemeMode(themeMode))
        }
        readStorage()
    }, [])

    return (
        <MainFrame>
            <View style={styles.container}>
                <View style={styles.h1View}>
                    <Text style={{ ...styles.h1, color: themeColors.text }}>
                        Oraciones y Coros dados al
                    </Text>
                    <Text style={{ ...styles.h2, color: themeColors.text }}>
                        Sexto Sello
                    </Text>
                </View>
                <TitleButton navigation={props.navigation} goTo="Oraciones">
                    Oraciones
                </TitleButton>
                <TitleButton navigation={props.navigation} goTo="Cantos">
                    Canticos
                </TitleButton>
                <TitleButton navigation={props.navigation} goTo="Informacion">
                    Información
                </TitleButton>
            </View>
        </MainFrame>
    )
}

export const homeScreenOptions = () => ({ headerShown: false })

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    h1: {
        fontSize: fontSizes['2xl'],
    },
    h1View: {
        padding: spacing.xl,
        alignItems: 'center',
    },
    h2: {
        fontSize: fontSizes['4xl'],
        fontWeight: 'bold',
    },
})

export default Home
