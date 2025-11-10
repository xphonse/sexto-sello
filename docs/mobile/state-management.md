# State Management con Redux

## Redux Store

**Archivo**: `store/store.ts`

```typescript
import { configureStore } from '@reduxjs/toolkit'
import { uiSlice } from './slices/ui'

export const store = configureStore({
  reducer: { ui: uiSlice.reducer },
})
```

## UI Slice

**Archivo**: `store/slices/ui.ts`

### State Shape

```typescript
interface UIState {
  fontSize: number    // 12-36
  themeMode: 'light' | 'dark'
}

const initialState: UIState = {
  fontSize: initialFontSize,  // 12 (from constants)
  themeMode: initialThemeMode  // 'light' (from constants)
}
```

### Reducers

```typescript
reducers: {
  changeFontSize: (state, action: PayloadAction<number>) => {
    state.fontSize = action.payload
  },
  setFontSizeByValue: (state, action: PayloadAction<number>) => {
    state.fontSize = action.payload
  },
  toggleThemeMode: (state) => {
    state.themeMode = state.themeMode === 'light' ? 'dark' : 'light'
  },
  setThemeMode: (state, action: PayloadAction<'light' | 'dark'>) => {
    state.themeMode = action.payload
  }
}
```

## Thunks (Async Actions)

**Archivo**: `store/slices/thunks.ts`

### incrementFontSize

```typescript
export const incrementFontSize = createAsyncThunk(
  'ui/incrementFontSize',
  async (_, { dispatch }) => {
    const currentSize = await AsyncStorage.getItem('fontSize')
    const newSize = Math.min(parseInt(currentSize || '12') + 1, 36)
    
    await AsyncStorage.setItem('fontSize', newSize.toString())
    dispatch(changeFontSize(newSize))
  }
)
```

### decrementFontSize

```typescript
export const decrementFontSize = createAsyncThunk(
  'ui/decrementFontSize',
  async (_, { dispatch }) => {
    const currentSize = await AsyncStorage.getItem('fontSize')
    const newSize = Math.max(parseInt(currentSize || '12') - 1, 12)
    
    await AsyncStorage.setItem('fontSize', newSize.toString())
    dispatch(changeFontSize(newSize))
  }
)
```

### toggleThemeMode (Thunk)

```typescript
export const toggleTheme = createAsyncThunk(
  'ui/toggleTheme',
  async (_, { dispatch }) => {
    const current = await AsyncStorage.getItem('themeMode')
    const newTheme = current === 'light' ? 'dark' : 'light'
    
    await AsyncStorage.setItem('themeMode', newTheme)
    dispatch(toggleThemeMode())
  }
)
```

## Uso en Componentes

### Dispatch Actions

```tsx
import { useDispatch } from 'react-redux'
import { incrementFontSize, decrementFontSize, toggleTheme } from '@/store/slices/thunks'

const FooterArrows = () => {
  const dispatch = useDispatch()
  
  return (
    <>
      <TouchableOpacity onPress={() => dispatch(decrementFontSize())}>
        <Ionicons name="text" />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => dispatch(toggleTheme())}>
        <Ionicons name="sunny" />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => dispatch(incrementFontSize())}>
        <Ionicons name="text-outline" />
      </TouchableOpacity>
    </>
  )
}
```

### Select State

```tsx
import { useSelector } from 'react-redux'

const Component = () => {
  const fontSize = useSelector((state: RootState) => state.ui.fontSize)
  const themeMode = useSelector((state: RootState) => state.ui.themeMode)
  
  return (
    <Text style={{ fontSize }}>
      Texto con tamaño dinámico
    </Text>
  )
}
```

## Persistencia

### AsyncStorage Keys

- `fontSize`: string ("12" a "36")
- `themeMode`: string ("light" o "dark")

### Inicialización (Home Screen)

```tsx
useEffect(() => {
  // FontSize
  AsyncStorage.getItem('fontSize').then(size => {
    if (!size) {
      AsyncStorage.setItem('fontSize', '12')
      dispatch(setFontSizeByValue(12))
    } else {
      dispatch(setFontSizeByValue(parseInt(size)))
    }
  })
  
  // ThemeMode
  AsyncStorage.getItem('themeMode').then(mode => {
    if (!mode) {
      AsyncStorage.setItem('themeMode', 'light')
      dispatch(setThemeMode('light'))
    } else {
      dispatch(setThemeMode(mode as 'light' | 'dark'))
    }
  })
}, [])
```

Ver [Architecture](./architecture.md) | [Components](./components.md)
