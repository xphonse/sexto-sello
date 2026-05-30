import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import useThemeColors from '../../hooks/useThemeColors'
import { radii, fontSizes, elevation } from 'data'

const Boton = (props) => {
    const { themeColors } = useThemeColors()
    return (
        <TouchableOpacity
            onPress={() =>
                props.navigation.navigate('Oracion', {
                    id: props.list,
                    titulo: props.titulo,
                })
            }
        >
            <View
                style={{
                    ...styles.item,
                    borderColor: themeColors.border,
                    backgroundColor: themeColors.surface,
                    ...elevation.e1Native,
                }}
            >
                <Text
                    numberOfLines={1}
                    style={{ ...styles.title, color: themeColors.text }}
                >
                    {props.pag}.- {props.titulo}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 4,
        borderWidth: 1,
        width: 300,
        maxWidth: '95%',
        borderRadius: radii.pill,
    },
    title: {
        fontSize: fontSizes.xl,
    },
})

export default Boton
