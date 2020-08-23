import React from "react"
import { Link } from "gatsby"

//import Layout from "../components/layout"
import SEO from "../components/seo"
import List from './list'

const SecondPage = () => (
  <div>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <List/>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
