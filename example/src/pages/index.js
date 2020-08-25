import React from "react"
import { Link, graphql } from "gatsby"
//import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
//import Button from '../components/button'
//import Distribuidores from '../components/distribuidores'

//copia de boton añadiendo css

export const query = graphql`
  query get_datadis {
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

const IndexPage = ({data}) => (
  <div>
    <SEO title="Home" />
    <h1>Hola</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image name='icon'/>
    </div>
    {/*<Distribuidores distributors={data.allDistribuidores.edges}/>*/}
    <br/>
    <Link to="/page-2/">Ver Usuarios</Link> <br />
    <Link to="/cancelar/">Ver Distribuidores</Link> <br />
  </div>
  
)

export default IndexPage
