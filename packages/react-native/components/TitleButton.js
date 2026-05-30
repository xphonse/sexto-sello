import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import useThemeColors from '../hooks/useThemeColors'
import { radii, spacing } from 'data'

const TitleButton = (props) => {
    const { themeColors } = useThemeColors()
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate(props.goTo)}>
            <View
                style={[
                    styles.button,
                    { borderColor: themeColors.border },
                ]}
            >
                <Text style={{ color: themeColors.text }}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: spacing.xs,
        padding: spacing.xl,
        width: 180,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: radii.pill,
    },
})

export default TitleButton
