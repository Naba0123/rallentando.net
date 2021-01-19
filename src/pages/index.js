import React from "react"
import { graphql, Link } from "gatsby"

import Image from "gatsby-image"

import Carousel from "react-bootstrap/Carousel"
import Table from "react-bootstrap/Table"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsCategory from "../components/newsCategory"

import utils from "../utils/utils"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function Home({ data, location }) {

  return (
    <Layout location={location}>
      <SEO pagetitle="TOP" pagepath={location.pathname} />

      {/* TOP Carousel */}
      <Carousel style={{ marginBottom: "40px" }}>
        {data.bannerList.edges.map((edge, i) => {
          const node = edge.node
          return (
            <Carousel.Item key={i}>
              <Link to={node.frontmatter.url}>
                <Image fluid={node.frontmatter.eyecatch.childImageSharp.fluid} alt="" className="d-block w-100" />
                <Carousel.Caption>
                  <h3>{node.frontmatter.captionTitle}</h3>
                  <p>{node.frontmatter.captionDesc}</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          )
        })}
      </Carousel>

      {/* NEWS */}
      <h1><FontAwesomeIcon icon={faCircle} />NEWS</h1>
      <Table className="news" style={{ marginBottom: 0 }}>
        <tbody>
          {data.newsList.edges.map((edge, i) => {
            const node = edge.node
            const frontmatter = node.frontmatter
            let cont
            if (node.html) {
              cont = <Link to={utils.markdownPath(node.fileAbsolutePath)}>{frontmatter.title}</Link>
            } else {
              cont = frontmatter.title
            }
            return (<tr key={i}>
              <th>{frontmatter.date}</th>
              <td><NewsCategory category={frontmatter.category} /></td>
              <td>{cont}</td>
            </tr>)
          })}
        </tbody>
      </Table>
      <p className="text-right">
        <Link to="/news/" className="more-link">Check more <FontAwesomeIcon icon={faChevronRight}/></Link>
      </p>

      {/* ABOUT */}
      <h1><FontAwesomeIcon icon={faCircle} />ABOUT</h1>
      <p>オリジナルピアノ曲を中心に作曲し、楽曲や楽譜の頒布、配信を行っているサークルです。</p>
      <p>Rallentando という音楽記号は、だんだん遅く、ゆっくりになる、という意味があります。</p>
      <p>忙しい毎日を過ごす中の、例えば寝る前に一息つきたいときや、休憩したいときなどにそっと寄り添えるような、そんな音楽を作りたいと思っています。</p>
      <Row style={{ marginTop: "40px", marginBottom: "40px" }}>
        <Col sm={4} className="text-center">
          <img src="/images/profile.jpg" style={{ width: "100%", maxWidth: "300px", borderRadius: "30px", boxShadow:"0 0 3px gray" }} alt="profile" />
        </Col>
        <Col sm={8}>
          <h2>Naba</h2>
          <ul>
            <li>作曲、編曲、演奏</li>
            <li>
              <a href="https://twitter.com/Naba0123/">
                <FontAwesomeIcon icon={faTwitter} />Naba0123
              </a>
            </li>
          </ul>
        </Col>
      </Row>

    </Layout>
  )
}

export const query = graphql`
  query {
    newsList: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/news/"}}
      sort: {order: DESC, fields: frontmatter___date}
      limit: 3
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
    bannerList: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/index-banner/"}}
      sort: {order: DESC, fields: frontmatter___date}
      limit: 3
    ) {
      edges {
        node {
          frontmatter {
            url
            eyecatch {
              childImageSharp {
                fluid(maxWidth: 1070, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            captionTitle
            captionDesc
          }
        }
      }
    }
  }
`