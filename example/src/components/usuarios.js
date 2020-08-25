import React from 'react'
import { Link } from 'gatsby'

export default function Usuarios({users}) {
    return (
        <div>
            <section>
                {users.map(({node}) => {
                    return (
                        <div key={node.id}>
                            <p>{node.name} {node.lastname} </p>
                            <Link to={`/${node.id}`}> Ver Datos </Link>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}
