import React from 'react'
import { StyleSheet, View } from 'react-native'
import MainFrame from '../components/MainFrame'
import Boton from './components/Boton'
import { PRAYERS } from 'data'

const Oraciones = (props) => {
    const listOraciones = PRAYERS.map((p) => (
        <Boton
            key={p.id}
            navigation={props.navigation}
            pag={p.page}
            list={p.id}
            titulo={p.title}
        >
            {p.title}
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
