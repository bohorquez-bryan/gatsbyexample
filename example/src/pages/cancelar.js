import React from 'react'
import SEO from '../components/seo'
import {Link} from 'gatsby'

export default function cancelar() {
    return (
        <div>
            <SEO title='Cancelar'/>
            <h2>Compra Cancelada</h2>
            <Link to="/">Ir al inicio</Link>
        </div>
    )
}
