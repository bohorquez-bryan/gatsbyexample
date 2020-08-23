import React from "react"
import { Link, graphql } from "gatsby"
//import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from '../components/button'
import Distribuidores from '../components/distribuidores'

//copia de boton añadiendo css

export const query = graphql`
  query get_data {
    allDistribuidores {
      edges {
        node {
          id
          password
          email
          name
        }
      }
    }
  }
`

const IndexPage = ({data}) => (
  <div>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image name='icon'/>
    </div>
    <Distribuidores distributors={data.allDistribuidores.edges}/>
    <br/>
    <Button/>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/cancelar/">Ir a cancelar</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </div>
  
)

export default IndexPage
