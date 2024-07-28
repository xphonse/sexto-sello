import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { OracionData, OracionesData } from '../data/Oraciones'
import FooterArrows from '../components/FooterArrows'
import { useSelector } from 'react-redux'
import useThemeColors from '../hooks/useThemeColors'

const getOracion = (id) => {
    return OracionesData.find((oracion) => oracion.id == id)
}

const OracionScreen = (props) => {
    const [oracion, setOracion] = useState<OracionData>()
    const { themeColors } = useThemeColors()
    const { fontSize } = useSelector((state) => state.ui)

    useEffect(() => {
        const oracion = getOracion(props.route.params.id)
        setOracion(oracion)
    })

    const Parrafo = ({ parrafo }: { parrafo: string[] }) => {
        return (
            <View style={styles.parrafoView}>
                {parrafo.map((texto, i: number) => (
                    <Text
                        key={i}
                        style={{ ...styles.parrafoText, fontSize: fontSize }}
                    >
                        {texto}
                    </Text>
                ))}
            </View>
        )
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            padding: 10,
            ...themeColors,
        },
        item: {
            backgroundColor: 'white',
            padding: 10,
            marginVertical: 4,
            marginHorizontal: 16,
            width: '90%',
        },
        title: {
            fontSize: 20,
            textAlign: 'center',
            width: '100%',
        },
        parrafoText: {
            color: themeColors.color,
            textAlign: 'justify',
        },
        parrafoView: {
            paddingVertical: 20,
            paddingHorizontal: 10,
            width: '100%',
        },
    })

    if (!oracion) return <></>

    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    backgroundColor: 'white',
                }}
            >
                <View style={styles.container}>
                    <Text
                        style={{
                            ...styles.title,
                            color: themeColors.color,
                            fontSize: fontSize + 2,
                        }}
                    >
                        {oracion.pag} - {oracion.titulo}
                    </Text>
                    {oracion.parrafos.map((parrafo, i) => (
                        <Parrafo key={i} parrafo={parrafo} />
                    ))}
                </View>
            </ScrollView>
            <FooterArrows
                sendTo="Oracion"
                id={props.route.params.id}
                navigation={props.navigation}
                noData={OracionesData.length}
            />
        </View>
    )
}

export const oracionScreenOptions = () => ({ title: 'ORACIÓN' })

export default OracionScreen
