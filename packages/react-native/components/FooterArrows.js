import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import {
    decrementFontSize,
    incrementFontSize,
    toggleThemeMode,
} from '../store/slices/thunks'
import useThemeColors from '../hooks/useThemeColors'

const hitSlop = { top: 20, bottom: 20, left: 40, right: 40 }

const Arrow = ({ id, icon, disabled, navigation, sendTo, color }) => {
    return (
        <TouchableOpacity
            hitSlop={hitSlop}
            disabled={disabled}
            onPress={() => navigation.navigate(sendTo, { id })}
        >
            <Ionicons name={icon} size={32} color={color} />
        </TouchableOpacity>
    )
}

const FooterArrows = (props) => {
    const { themeColors, themeMode } = useThemeColors()

    const [isSettingsOpened, setisSettingsOpened] = useState(true)
    let id = props.id
    let leftDisabled = id == 0 ? true : false
    let rightDisabled = id == +props.noData - 1

    const dispatch = useDispatch()

    return (
        <View
            style={{
                backgroundColor: themeColors.backgroundColor,
                borderTopWidth: 1,
                borderColor: '#ccc',
            }}
        >
            <View
                style={{
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: isSettingsOpened ? 50 : 0,
                }}
            >
                <TouchableOpacity
                    hitSlop={hitSlop}
                    style={{ flexDirection: 'row' }}
                    onPress={() => {
                        dispatch(decrementFontSize())
                    }}
                >
                    <Ionicons name="text" size={24} color={themeColors.color} />
                    <Ionicons
                        name="arrow-down"
                        size={24}
                        color={themeColors.color}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    hitSlop={hitSlop}
                    style={{ flexDirection: 'row' }}
                    onPress={() => {
                        dispatch(toggleThemeMode())
                    }}
                >
                    {themeMode == 'dark' ? (
                        <Ionicons
                            name="sunny"
                            size={24}
                            color={themeColors.color}
                        />
                    ) : (
                        <Ionicons
                            name="moon"
                            size={24}
                            color={themeColors.color}
                        />
                    )}
                </TouchableOpacity>
                <TouchableOpacity
                    hitSlop={hitSlop}
                    style={{ flexDirection: 'row' }}
                    onPress={() => {
                        dispatch(incrementFontSize())
                    }}
                >
                    <Ionicons
                        name="text-outline"
                        size={24}
                        color={themeColors.color}
                    />
                    <Ionicons
                        name="arrow-up"
                        size={24}
                        color={themeColors.color}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.footerArrows}>
                <Arrow
                    sendTo={props.sendTo}
                    id={parseInt(id) - 1}
                    icon="arrow-back"
                    disabled={leftDisabled}
                    navigation={props.navigation}
                    color={themeColors.color}
                />
                <TouchableOpacity
                    style={{ flexDirection: 'row' }}
                    onPress={() => {
                        setisSettingsOpened((state) => !state)
                    }}
                >
                    <Ionicons
                        name="settings-outline"
                        size={20}
                        color={themeColors.color}
                    />
                    <Ionicons
                        name={`arrow-${isSettingsOpened ? 'down' : 'up'}`}
                        size={20}
                        color={themeColors.color}
                    />
                </TouchableOpacity>
                <Arrow
                    sendTo={props.sendTo}
                    id={parseInt(id) + 1}
                    icon="arrow-forward"
                    disabled={rightDisabled}
                    navigation={props.navigation}
                    color={themeColors.color}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footerArrows: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
})

export default FooterArrows
