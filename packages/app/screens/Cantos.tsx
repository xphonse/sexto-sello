import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MainFrame from '../components/MainFrame'

import { CantosData } from '../data/Cantos'
import useThemeColors from '../hooks/useThemeColors'

const Cantos = (props) => {
    const listOraciones = CantosData.map((oracion) => (
        <Boton
            key={oracion.id}
            debug={oracion}
            navigation={props.navigation}
            pag={oracion.pag}
            list={oracion.id}
            titulo={oracion.titulo}
        >
            {oracion.titulo}
        </Boton>
    ))

    return (
        <MainFrame>
            <View style={styles.container}>{listOraciones}</View>
        </MainFrame>
    )
}

const Boton = (props) => {
    const { themeColors } = useThemeColors()
    //console.log(props.debug)
    return (
        <TouchableOpacity
            onPress={() =>
                props.navigation.navigate('Canto', {
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

export const cantosScreenOptions = () => ({
    headerShown: true,
    title: 'LISTADO DE CANTOS',
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    item: {
        padding: 10,
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

export default Cantos
