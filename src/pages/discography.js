import React from "react"
import {graphql, Link} from "gatsby"

import Image from "gatsby-image"

import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

import Layout from "../components/layout"
import SEO from "../components/seo"
import utils from "../utils/utils"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-regular-svg-icons"

import "./discography.css"

export default function Home({ data, location }) {

  const soundcloudList = [
    1102182424, 246363767, 245825677, 243405491, 200761010, 200760703, 200760295
  ]

  return (
    <Layout location={location}>
      <SEO pagetitle="DISCOGRAPHY" pagepath={location.pathname} />

      <h1><FontAwesomeIcon icon={faCircle} />DISCOGRAPHY</h1>

      <Tabs defaultActiveKey="album" id="tab-music">
        <Tab eventKey="album" title="Album">

          <Row>
            {data.allMarkdownRemark.edges.map(( disc, i ) => {
              const frontmatter = disc.node.frontmatter
              return (
                <Col md={6} key={i}>
                  <Link to={utils.markdownPath(disc.node.fileAbsolutePath)}>
                    <Card>
                      <Card.Header>
                        <Image fluid={disc.node.frontmatter.eyecatch.childImageSharp.fluid} />
                        {/* <img src="https://placehold.jp/1000x1000.png" alt="title" /> */}
                      </Card.Header>
                      <Card.Body>
                        <h2>{frontmatter.title}</h2>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              )
            })}
          </Row>
          
        </Tab>

        <Tab eventKey="youtube" title="YouTube">
          
          <Row>
          <Col md={6} className="youtube-list">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe title="夏の声　[Original Solo Piano]" className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/Rj9-44B2R7Q" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <p><a href="https://www.youtube.com/watch?v=Rj9-44B2R7Q">夏の声　[Original Solo Piano]</a></p>
            </Col>
            <Col md={6} className="youtube-list">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe title="【C90 3日目西q-45a】Piano Sketch Vol.1 XFD【ソロピアノアルバム】" className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/VlkaBEF6WZ4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <p><a href="https://www.youtube.com/watch?v=VlkaBEF6WZ4">【C90 3日目西q-45a】Piano Sketch Vol.1 XFD【ソロピアノアルバム】</a></p>
            </Col>
          </Row>

        </Tab>
        
        <Tab eventKey="soundcloud" title="SoundCloud">
          <div className="soundcloud-list">
            {soundcloudList.map((id) => (
              <iframe key={id} title="b" width="100%" height="125" scrolling="no" frameBorder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false`}></iframe>
            ))}
            </div>
        </Tab>
      </Tabs>

    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/markdown-pages/discography/"}}
      sort: {order: DESC, fields: frontmatter___date}
    ) {
      edges {
        node {
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
          fileAbsolutePath
        }
      }
    }
  }
`