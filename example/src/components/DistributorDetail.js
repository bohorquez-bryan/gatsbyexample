import React from 'react'
import {
    StyledProductDetail,

} from '../styles/components'
//import {SEO} from '../components/seo'

export default function DistributorDetail({id, name, email, lastname}) {
    return (
        <StyledProductDetail>
            <div>
                <p>{name}</p>
                <p>{email}</p>
                <p>{lastname}</p>
                <p>{id}</p>
            </div>

        </StyledProductDetail>
    )
}
