import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Projects from "../components/projects"
import Techs from "../components/techs"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <About siteTitle="Astrocat" />
    <Projects/>
    <Techs/>
  </Layout>
)

export default IndexPage
