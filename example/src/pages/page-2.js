import React from "react"
import { Link, graphql } from "gatsby"
import Usuarios from '../components/usuarios'
//import Layout from "../components/layout"
import SEO from "../components/seo"
//import List from './list'

export const query = graphql`
  query get_user {
    allUsuarios {
      edges {
        node {
          id
          email
          name
          lastname
        }
      }
    }
  }
`


const SecondPage = ({data}) => (
  <div>
    <SEO title="Page two" />
    <h1>Usuarios</h1>
    <Usuarios users={data.allUsuarios.edges}/>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
