import React from 'react'
import DistributorDetail from '../components/DistributorDetail'

export default function ListDistributor({pageContext}) {
    return (
        <DistributorDetail {...pageContext} />
    )
}
