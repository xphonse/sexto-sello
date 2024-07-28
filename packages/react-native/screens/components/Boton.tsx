import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import useThemeColors from '../../hooks/useThemeColors'

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
            <View style={{ ...styles.item, borderColor: themeColors.color }}>
                <Text
                    numberOfLines={1}
                    style={{ ...styles.title, color: themeColors.color }}
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
        borderRadius: 80,
    },
    title: {
        fontSize: 20,
    },
})

export default Boton
