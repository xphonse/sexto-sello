import { createSlice } from '@reduxjs/toolkit'
import appConstants from '../../data/constants'
export const uiSlice = createSlice({
    name: 'asdf',
    initialState: {
        fontSize: appConstants.initialFontSize,
        themeMode: appConstants.initialThemeMode,
    },
    reducers: {
        changeFontSize: (state, action) => {
            state.fontSize = parseInt(action.payload)
        },
        setFontSizeByValue: (state, action) => {
            state.fontSize = parseInt(action.payload)
        },
        toggleThemeMode: (state) => {
            state.themeMode = state.themeMode == 'light' ? 'dark' : 'light'
        },
        setThemeMode: (state, action) => {
            state.themeMode = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    changeFontSize,
    setFontSizeByValue,
    toggleThemeMode,
    setThemeMode,
} = uiSlice.actions

export default uiSlice.reducer
