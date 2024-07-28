import { configureStore } from '@reduxjs/toolkit'
import { uiSlice } from './slices/ui'

export const store = configureStore({
    reducer: { ui: uiSlice.reducer },
})
