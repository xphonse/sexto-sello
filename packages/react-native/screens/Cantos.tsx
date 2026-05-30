import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MainFrame from '../components/MainFrame'
import useThemeColors from '../hooks/useThemeColors'
import { CHOIRS } from 'data'
import { radii, fontSizes, elevation } from 'data'

const Cantos = (props) => {
    const listOraciones = CHOIRS.map((c) => (
        <Boton
            key={c.id}
            debug={c}
            navigation={props.navigation}
            pag={c.page}
            list={c.id}
            titulo={c.title}
        >
            {c.title}
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
    return (
        <TouchableOpacity
            onPress={() =>
                props.navigation.navigate('Canto', {
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
        borderRadius: radii.pill,
    },
    title: {
        fontSize: fontSizes.xl,
    },
})

export default Cantos
