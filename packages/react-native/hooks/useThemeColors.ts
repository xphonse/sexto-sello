import { palette, ThemeColors } from 'data'
import { useSelector } from 'react-redux'

const useThemeColors = () => {
    const { themeMode } = useSelector((state) => state.ui)
    const mode: 'light' | 'dark' = themeMode === 'dark' ? 'dark' : 'light'
    const base: ThemeColors = palette[mode]
    const themeColors = {
        ...base,
        color: base.text,
        backgroundColor: base.bg,
    }
    return { themeColors, themeMode }
}

export default useThemeColors
