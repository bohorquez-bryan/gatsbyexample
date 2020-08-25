import React from 'react'
import { Link } from 'gatsby'


export default function Distribuidores({distributors}) {
    return (
        <div>
            <section>
                {distributors.map(({node}) => {
                    return (
                        <article key={node.id}>
                            <p>{node.name}</p>
                            <p>{node.lastname}</p>
                            <Link to={`/${node.id}`}> Ver </Link>
                        </article>
                    )
                })}
            </section>
        </div>
    )
}
