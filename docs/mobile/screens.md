# Pantallas de la App Móvil

## 1. Home (Inicio)

**Archivo**: `screens/Home.tsx`

### Función
- Pantalla de bienvenida
- 3 botones de navegación
- **Crítico**: Inicializa AsyncStorage en `useEffect`

### Código Clave
```tsx
useEffect(() => {
  AsyncStorage.getItem('fontSize').then(size => {
    if (!size) {
      AsyncStorage.setItem('fontSize', '12')
      dispatch(setFontSizeByValue(12))
    }
  })
  // Similar para themeMode
}, [])
```

## 2. Oraciones (Lista)

**Archivo**: `screens/Oraciones.tsx`

### Renderizado
```tsx
{PRAYERS.map((prayer) => (
  <Boton
    key={prayer.id}
    navigation={navigation}
    page={prayer.page}
    id={prayer.id}
    title={prayer.title}
  />
))}
```

## 3. Oracion (Detalle)

**Archivo**: `screens/Oracion.tsx`

### Acceso a Data
```tsx
const { id } = route.params
const prayer = PRAYERS.find(p => p.id === id)
```

### Renderizado de Paragraphs
```tsx
{prayer.paragraphs.map((paragraph, pIdx) => (
  <View key={pIdx}>
    {paragraph.map((line, lIdx) => (
      <Text key={lIdx} style={{ fontSize }}>
        {line}
      </Text>
    ))}
  </View>
))}
```

## 4. Cantos (Lista)

Similar a Oraciones, pero con 143 cantos.

## 5. Canto (Detalle)

**Procesamiento de `/n`**:
```tsx
{choir.paragraphs.map((paragraph, idx) => {
  const lines = paragraph.split('/n')
  return (
    <View key={idx}>
      {lines.map((line, i) => (
        <Text key={i}>{line}</Text>
      ))}
    </View>
  )
})}
```

## 6. Informacion

**Share Functionality**:
```tsx
import { Share } from 'react-native'

const onShare = async () => {
  await Share.share({
    message: 'https://play.google.com/store/apps/details?id=com.sextosello.cantos_y_coros'
  })
}
```

Ver [Components](./components.md) | [Navigation Flow](../diagrams/navigation-flow.md)
