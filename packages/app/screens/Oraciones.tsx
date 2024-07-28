import React from 'react'
import { StyleSheet, View } from 'react-native'
import MainFrame from '../components/MainFrame'
import Boton from './components/Boton'

import { OracionesData } from '../data/Oraciones'

const Oraciones = (props) => {
    const listOraciones = OracionesData.map((oracion) => (
        <Boton
            key={oracion.id}
            navigation={props.navigation}
            pag={oracion.pag}
            list={oracion.id}
            titulo={oracion.titulo}
        >
            {oracion.titulo}
        </Boton>
    ))

    return (
        <MainFrame>
            <View style={styles.container}>{listOraciones}</View>
        </MainFrame>
    )
}

export const oracionesScreenOptions = () => ({
    headerShown: true,
    title: 'LISTADO DE ORACIONES',
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
})

export default Oraciones
