import React from 'react'
import { Link } from 'gatsby'


export default function Distribuidores({distributors}) {
    return (
        <div>
            <h2>Distribuidores</h2>
            <section>
                {distributors.map(({node}) => {
                    return (
                        <article key={node.id}>
                            <p>{node.email}</p>
                            <p>{node.name}</p>
                            <Link to={`/${node.id}`}> Ver </Link>
                        </article>
                    )
                })}
            </section>
        </div>
    )
}
