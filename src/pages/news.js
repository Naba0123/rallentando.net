import React from "react"
import { graphql, Link } from "gatsby"

import Table from "react-bootstrap/Table"

import utils from "../utils/utils"

import Layout from "../components/layout"
import NewsCategory from "../components/newsCategory"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-regular-svg-icons"
// import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

export default function Home({ data, location }) {

  return (
    <Layout location={location}>

      {/* NEWS */}
      <h1><FontAwesomeIcon icon={faCircle} />NEWS</h1>
      <Table className="news" style={{ marginBottom: 0 }}>
        <tbody>
          {data.allMarkdownRemark.edges.map(( news ) => {
            const frontmatter = news.node.frontmatter
            let cont
            if (news.node.html) {
              cont = <Link to={utils.markdownPath(news.node.fileAbsolutePath)}>{frontmatter.title}</Link>
            } else {
              cont = frontmatter.title
            }
            return (<tr>
              <th>{frontmatter.date}</th>
              <td><NewsCategory category={frontmatter.category} /></td>
              <td>{cont}</td>
            </tr>)
          })}
        </tbody>
      </Table>

      {/* <ul className="pagenation">
        <li className="prev">
          <Link to={true ? `/news/` : `/news/${1}`} rel="prev">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Older</span>
          </Link>
        </li>
        <li className="next">
          <Link to={`/news/${1}`} rel="next">
            <span>Newer</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </li>
      </ul> */}

    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/markdown-pages/news/"}}
      sort: {order: DESC, fields: frontmatter___date}
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            category
            date(formatString: "YYYY/MM/DD")
          }
          fileAbsolutePath
        }
      }
    }
  }
`