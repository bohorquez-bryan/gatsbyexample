import React from 'react'
import SEO from '../components/seo'
import { Link, graphql } from "gatsby"
import Distribuidores from '../components/distribuidores'

export const query = graphql`
  query get_data {
    allDistribuidores {
      edges {
        node {
          id
          password
          email
          name
          lastname
        }
      }
    }
  }
`
export default function cancelar({data}) {
    return (
        <div>
            <SEO title='Cancelar'/>
            <h2>Distribuidores</h2>
            <Distribuidores distributors={data.allDistribuidores.edges}/>
            <Link to="/">Ir al inicio</Link>
        </div>
    )
}
