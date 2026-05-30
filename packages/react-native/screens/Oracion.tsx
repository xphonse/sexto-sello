import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import FooterArrows from '../components/FooterArrows'
import { useSelector } from 'react-redux'
import useThemeColors from '../hooks/useThemeColors'
import { Prayer, PRAYERS } from 'data'
import { fontSizes, spacing } from 'data'

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
                        style={{
                            color: themeColors.text,
                            textAlign: 'left',
                            fontSize: fontSize,
                        }}
                    >
                        {texto}
                    </Text>
                ))}
            </View>
        )
    }

    if (!prayer) return <></>

    return (
        <View style={{ flex: 1, backgroundColor: themeColors.bg }}>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    backgroundColor: themeColors.bg,
                }}
            >
                <View
                    style={{
                        ...styles.container,
                        backgroundColor: themeColors.bg,
                    }}
                >
                    <Text
                        style={{
                            ...styles.title,
                            color: themeColors.text,
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: spacing.md,
    },
    title: {
        fontSize: fontSizes.xl,
        textAlign: 'center',
        width: '100%',
    },
    parrafoView: {
        paddingVertical: spacing.xl,
        paddingHorizontal: spacing.md,
        width: '100%',
    },
})

export default OracionScreen
