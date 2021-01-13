import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

import Image from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  location
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (

    <Layout location={location}>

      <h3><FontAwesomeIcon icon={faCircle} />DISCOGRAPHY</h3>
  
      <div className="blog-post-container">
        <div className="blog-post">
          <h1 style={{ marginTop: "0.1em" }} >{frontmatter.title}</h1>
          <Row className="justify-content-sm-center">
            <Col sm={8} md={6} lg={5}><Image fluid={frontmatter.eyecatch.childImageSharp.fluid} style={{ width: "100%", boxShadow: "2px 2px 5px gray" }} /></Col>
          </Row>
          
          <div
            className="blog-post-content"
            style={{ padding: "1em" }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>

      <p style={{ marginTop: "5em" }}>
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
      }
    }
  }
`