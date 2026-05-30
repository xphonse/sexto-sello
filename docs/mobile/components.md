# Componentes de la App Móvil

## MainFrame

**Archivo**: `components/MainFrame.js`

### Propósito
Wrapper para todas las pantallas con ScrollView y tema.

### Código
```jsx
export const MainFrame = ({ children }) => {
  const { themeColors } = useThemeColors()
  
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: themeColors.backgroundColor
      }}
    >
      <View style={styles.container}>
        {children}
      </View>
    </ScrollView>
  )
}
```

## FooterArrows

**Archivo**: `components/FooterArrows.js`

### Funcionalidad
- Navegación prev/next
- Panel de settings (collapsible)
- Controles de fontSize (+/-)
- Toggle de tema (sol/luna)

### Estado
```jsx
const [showSettings, setShowSettings] = useState(false)
```

### Icons (Ionicons)
- `arrow-back` / `arrow-forward`: Navegación
- `text` / `text-outline`: fontSize
- `sunny` / `moon`: Tema
- `settings`: Toggle panel

## TitleButton

**Archivo**: `components/TitleButton.js`

### Props
```typescript
interface Props {
  title: string
  onPress: () => void
}
```

### Estilo
- Borde redondeado (borderRadius: 80)
- Ancho: 180
- Theme-aware colors

## Boton (Inline en screens)

Usado en listas de oraciones/cantos:
```tsx
<TouchableOpacity
  onPress={() => navigation.navigate('Oracion', { id })}
  style={{
    borderColor: themeColors.color,
    borderWidth: 1
  }}
>
  <Text style={{ color: themeColors.color }}>
    {page}.- {title}
  </Text>
</TouchableOpacity>
```

Ver [Screens](./screens.md) | [State Management](./state-management.md)
