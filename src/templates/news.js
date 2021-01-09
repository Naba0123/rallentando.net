import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import NewsCategory from "../components/newsCategory"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  location
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (

    <Layout location={location}>

      <h3><FontAwesomeIcon icon={faCircle} />NEWS</h3>
  
      <div className="blog-post-container">
        <div className="blog-post">
          <NewsCategory category={frontmatter.category} />
          <h1 style={{ marginTop: "0.1em" }} >{frontmatter.title}</h1>
          <p className="text-right">{frontmatter.date}</p>
          <div
            className="blog-post-content"
            style={{ padding: "1em" }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>

      <p style={{ marginTop: "5em" }}>
        <Link to="/news/"><FontAwesomeIcon icon={faChevronLeft} />NEWS 一覧へ</Link>
      </p>

    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        slug
        title
        category
      }
    }
  }
`