# Arquitectura de la App Móvil

## Decisiones de Diseño

### React Native + Expo
- **Cross-platform**: Un código para iOS y Android
- **Expo**: Simplifica desarrollo y builds
- **TypeScript**: Seguridad de tipos

### Redux Toolkit
- **Global State**: fontSize y themeMode
- **Persist con AsyncStorage**: Preferencias sobreviven cierre de app
- **Thunks**: Async logic para leer/escribir AsyncStorage

### React Navigation
- **Stack Navigator**: Navegación simple y nativa
- **6 Screens**: Cobertura completa de funcionalidad

## Flujo de Datos

```
AsyncStorage (Persistencia)
      ↕
Redux Thunks (Async Logic)
      ↕  
Redux Store (State Global)
      ↕
Components (UI)
```

## Estructura de Componentes

```
<Provider store={store}>
  <NavigationContainer>
    <Stack.Navigator>
      <Screen name="Inicio">
        <MainFrame>
          <TitleButton />
        </MainFrame>
      </Screen>
      <Screen name="Canto">
        <MainFrame>
          <ScrollView>
            {/* Contenido */}
          </ScrollView>
          <FooterArrows />
        </MainFrame>
      </Screen>
    </Stack.Navigator>
  </NavigationContainer>
</Provider>
```

Ver [README](./README.md) | [State Management](./state-management.md)
