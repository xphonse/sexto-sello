import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import useThemeColors from '../hooks/useThemeColors'

const MainScreen = (props) => {
    const { themeColors } = useThemeColors()

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View
                style={{
                    ...styles.screen,
                    backgroundColor: themeColors.backgroundColor,
                }}
            >
                {props.children}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default MainScreen
