import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Image from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import "../pages/discography.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  location
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  let youtube = <div></div>
  if (frontmatter.youtube) {
    youtube = <div className="youtube-list" style={{ marginTop: "2em" }}>
      <h2>XFD</h2>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title="a" className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/VlkaBEF6WZ4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  }

  return (

    <Layout location={location}>
      <SEO pagetitle={frontmatter.title} pagepath={location.pathname} />

      <h3><FontAwesomeIcon icon={faCircle} />DISCOGRAPHY</h3>
  
      <div className="blog-post">
        <h1 style={{ marginBottom: "1em" }} >{frontmatter.title}</h1>
        <Row className="justify-content-sm-center">
          <Col sm={6} lg={5}>
            <Image fluid={frontmatter.eyecatch.childImageSharp.fluid} style={{ width: "100%", boxShadow: "2px 2px 5px gray" }} />
            {youtube}
          </Col>
          <Col sm={6} lg={5}>
            <div className="blog-post-content" style={{ padding: "1em" }} dangerouslySetInnerHTML={{ __html: html }}/>
          </Col>
        </Row>
      </div>

      <p>
        <Link to="/discography/"><FontAwesomeIcon icon={faChevronLeft} />DISCOGRAPHY 一覧へ</Link>
      </p>

    </Layout>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
        eyecatch {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        youtube
      }
    }
  }
`