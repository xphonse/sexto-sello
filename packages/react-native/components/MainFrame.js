import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import useThemeColors from '../hooks/useThemeColors'
import { spacing } from 'data'

const MainScreen = (props) => {
    const { themeColors } = useThemeColors()

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View
                style={{
                    ...styles.screen,
                    backgroundColor: themeColors.bg,
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
        padding: spacing.lg,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default MainScreen
