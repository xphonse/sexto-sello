import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import FooterArrows from '../components/FooterArrows'
import { CHOIRS } from 'data'
import useThemeColors from '../hooks/useThemeColors'

const Contenido = (props) => {
    const { themeColors } = useThemeColors()
    const { fontSize } = useSelector((state) => state.ui)
    const newText = props.datos.split('/n').map((text, i) => {
        return (
            <View key={i} style={styles.parrafoView}>
                <Text
                    style={{
                        ...styles.linea,
                        color: themeColors.color,
                        fontSize: fontSize,
                    }}
                >
                    {text}
                </Text>
            </View>
        )
    })

    return (
        <View style={styles.parrafoView}>
            <Text style={styles.parrafo}></Text>
            {newText}
        </View>
    )
}

const Canto = (props) => {
    const idOracion = props.route.params.id
    const choir = CHOIRS.find((Canto) => Canto.id == idOracion)
    const { paragraphs } = choir
    const totalChoirs = CHOIRS.length

    const { themeColors } = useThemeColors()

    const Parrafos = () =>
        paragraphs.map((oracion, i) => (
            <View key={i}>
                <Contenido datos={oracion} key={Math.random()} />
            </View>
        ))

    return (
        <View style={{ flex: 1, backgroundColor: themeColors.backgroundColor }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 10 }}>
                <View style={styles.container}>
                    <Text style={{ ...styles.title, color: themeColors.color }}>
                        {choir.page} - {choir.title}
                    </Text>
                    <Parrafos />
                </View>
            </ScrollView>
            <FooterArrows
                sendTo="Canto"
                id={props.route.params.id}
                navigation={props.navigation}
                noData={totalChoirs}
            />
        </View>
    )
}

export const cantoScreenOptions = () => ({ title: 'CANTOS' })

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 10,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        width: '100%',
    },
    parrafo: {
        textAlign: 'justify',
        lineHeight: 16,
    },
    linea: {
        textAlign: 'justify',
    },
    parrafoView: {
        paddingVertical: 2,
        width: '100%',
    },
})

export default Canto
