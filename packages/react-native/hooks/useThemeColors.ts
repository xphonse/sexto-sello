import { useEffect, useState } from 'react'
import { ColorValue } from 'react-native'
import { useSelector } from 'react-redux'

const useThemeColors = () => {
    const [themeColors, setThemeColors] = useState(LightColors)
    const { themeMode } = useSelector((state) => state.ui)

    useEffect(() => {
        if (themeMode == 'light') setThemeColors(LightColors)
        if (themeMode == 'dark') setThemeColors(DarkColors)
        console.log('rerender')
        console.log(themeMode)
    }, [themeMode])

    return { themeColors, themeMode }
}

export default useThemeColors

interface ThemeType {
    color: ColorValue
    backgroundColor: ColorValue
}

const darkColor = '#333'

const LightColors: ThemeType = {
    color: '#000000',
    backgroundColor: 'white',
}

const DarkColors: ThemeType = {
    color: 'white',
    backgroundColor: darkColor,
}
