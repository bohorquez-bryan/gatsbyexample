import React from 'react'
import {
    StyledProductDetail,

} from '../styles/components'
import { Link } from 'gatsby'
//import {SEO} from '../components/seo'

export default function UsuariosDetail({id, name, email, lastname}) {
    return (
        <StyledProductDetail>
            <div>
                <p>{name}</p>
                <p>{lastname}</p>
                <p>{email}</p>
                <p>{id}</p>
            </div>
            <br/>
            <Link to="/">Regresar</Link>
            

        </StyledProductDetail>
    )
}
