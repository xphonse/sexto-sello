import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Share,
    Platform,
    Linking,
} from 'react-native'
import MainFrame from '../components/MainFrame'
import useThemeColors from '../hooks/useThemeColors'
import { fontSizes, spacing, radii } from 'data'

const isIOS = Platform.OS === 'ios'

const SITE_URL = 'https://sextosello.com/'
const PRIVACY_URL = 'https://sextosello.com/privacidad'
// TODO: replace idTODO with the Apple ID from App Store Connect → App Information.
const APP_STORE_URL = 'https://apps.apple.com/app/idTODO'
const PLAY_STORE_URL =
    'https://play.google.com/store/apps/details?id=com.sextosello.cantos_y_coros'

const shareMessage = isIOS
    ? `Descargar aplicación en App Store: \n  ${APP_STORE_URL}`
    : `Descargar aplicación en Play Store: \n  ${PLAY_STORE_URL}`

const onShare = async () => {
    try {
        const result = await Share.share({
            message: shareMessage,
        })

        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error) {
        alert(error.message)
    }
}

const Informacion = () => {
    const { themeColors } = useThemeColors()
    const InfoContainer = ({ children }) => (
        <View style={styles.informacionContainer}>
            <Text
                style={{ ...styles.informacionText, color: themeColors.text }}
            >
                {children}
            </Text>
        </View>
    )

    return (
        <MainFrame>
            <View style={styles.container}>
                <View style={styles.h1View}>
                    <Text style={{ ...styles.h1, color: themeColors.text }}>
                        Información
                    </Text>
                </View>

                <InfoContainer>
                    El numero que aparece junto a los canticos es el del numero
                    de hoja en el que aparecen en el "Libro de Coros del Templo
                    del Medio Dia"
                </InfoContainer>
                <InfoContainer>
                    Para cualquier duda, aclaración, sugerencia, corrección de
                    errores o aporte: Por favor comunicarse al correo:{' '}
                </InfoContainer>
                <View>
                    <Text
                        style={{
                            ...styles.informacionText,
                            color: themeColors.text,
                        }}
                    >
                        christian.ramirez.gutierrez.92@gmail.com{' '}
                    </Text>
                </View>
                <InfoContainer>
                    También puedes consultar los cantos y oraciones en: 
                </InfoContainer>
                <TouchableOpacity onPress={() => Linking.openURL(SITE_URL)}>
                    <Text
                        style={{
                            ...styles.informacionText,
                            ...styles.link,
                            color: themeColors.text,
                        }}
                    >
                        sextosello.com
                    </Text>
                </TouchableOpacity>
                <View style={{ height: 30 }}></View>
                <TouchableOpacity onPress={onShare}>
                    <View
                        style={{
                            ...styles.Button,
                            backgroundColor: themeColors.accent,
                        }}
                    >
                        <Text style={{ color: themeColors.accentText }}>
                            Compartir aplicación
                        </Text>
                    </View>
                </TouchableOpacity>
                {isIOS && (
                    <TouchableOpacity
                        onPress={() => Linking.openURL(PRIVACY_URL)}
                    >
                        <Text
                            style={{
                                ...styles.privacyText,
                                color: themeColors.textMuted,
                            }}
                        >
                            Política de privacidad
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        </MainFrame>
    )
}

export const homeScreenOptions = () => ({ headerShown: false })

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    h1: {
        fontSize: fontSizes['2xl'],
    },
    h1View: {
        paddingVertical: spacing.xl,
        alignItems: 'center',
    },
    informacionText: {
        fontSize: fontSizes.lg,
        textAlign: 'justify',
    },
    informacionContainer: {
        padding: spacing.md,
    },
    link: {
        textDecorationLine: 'underline',
    },
    privacyText: {
        fontSize: fontSizes.sm,
        textDecorationLine: 'underline',
        marginTop: spacing.lg,
    },
    Button: {
        margin: spacing.xs,
        padding: spacing.xl,
        width: 180,
        alignItems: 'center',
        borderRadius: radii.pill,
    },
})

export default Informacion
