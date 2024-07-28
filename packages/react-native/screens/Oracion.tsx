import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import FooterArrows from '../components/FooterArrows'
import { useSelector } from 'react-redux'
import useThemeColors from '../hooks/useThemeColors'
import { Prayer, PRAYERS } from 'data'

const getOracion = (id) => {
    return PRAYERS.find((p) => p.id == id)
}

const OracionScreen = (props) => {
    const [prayer, setPrayer] = useState<Prayer>()
    const { themeColors } = useThemeColors()
    const { fontSize } = useSelector((state) => state.ui)

    useEffect(() => {
        const p = getOracion(props.route.params.id)
        setPrayer(p)
    })

    const Parrafo = ({ paragraph }: { paragraph: string[] }) => {
        return (
            <View style={styles.parrafoView}>
                {paragraph.map((texto, i: number) => (
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

    if (!prayer) return <></>

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
                        {prayer.page} - {prayer.title}
                    </Text>
                    {prayer.paragraphs.map((paragraph, i) => (
                        <Parrafo key={i} paragraph={paragraph} />
                    ))}
                </View>
            </ScrollView>
            <FooterArrows
                sendTo="Oracion"
                id={props.route.params.id}
                navigation={props.navigation}
                noData={PRAYERS.length}
            />
        </View>
    )
}

export const oracionScreenOptions = () => ({ title: 'ORACIÓN' })

export default OracionScreen
