import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import useThemeColors from '../hooks/useThemeColors'

const TitleButton = (props) => {
    const { themeColors } = useThemeColors()
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate(props.goTo)}>
            <View style={props.styles.Button}>
                <Text style={{ color: themeColors.color }}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default TitleButton
