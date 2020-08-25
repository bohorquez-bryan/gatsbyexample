import React from 'react'
import UsuariosDetail from '../components/UsuariosDetail'

export default function ListUser({pageContext}) {
    return (
        <UsuariosDetail {...pageContext} />
    )
}
