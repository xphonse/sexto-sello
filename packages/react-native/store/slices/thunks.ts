import { changeFontSize, setThemeMode } from './ui'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const incrementFontSize = () => {
    return async (dispatch) => {
        const fontSize = await AsyncStorage.getItem('fontSize')
        const newFontSize = parseInt(fontSize) + 1
        if (newFontSize >= 36) return
        await AsyncStorage.setItem('fontSize', JSON.stringify(newFontSize))
        dispatch(changeFontSize(newFontSize))
    }
}

export const decrementFontSize = () => {
    return async (dispatch) => {
        const fontSize = await AsyncStorage.getItem('fontSize')
        const newFontSize = parseInt(fontSize) - 1
        if (newFontSize <= 12) return
        await AsyncStorage.setItem('fontSize', JSON.stringify(newFontSize))
        dispatch(changeFontSize(newFontSize))
    }
}

export const toggleThemeMode = () => {
    return async (dispatch) => {
        const themeMode = await AsyncStorage.getItem('themeMode')
        const newThemeMode = themeMode == 'light' ? 'dark' : 'light'
        await AsyncStorage.setItem('themeMode', newThemeMode),
            dispatch(setThemeMode(newThemeMode))
    }
}
