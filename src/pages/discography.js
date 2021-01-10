import React from "react"
import {Link} from "gatsby"

import Image from "gatsby-image"

import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

import Layout from "../components/layout"
import utils from "../utils/utils"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-regular-svg-icons"

import "./discography.css"

export default function Home({ data, location }) {

  const soundcloudList = [
    246363767, 245825677, 243405491, 200761010, 200760703, 200760295
  ]

  return (
    <Layout location={location}>

      <h1><FontAwesomeIcon icon={faCircle} />DISCOGRAPHY</h1>

      <Tabs defaultActiveKey="album" id="tab-music">
        <Tab eventKey="album" title="Album">

          <Row>
            {data.allMarkdownRemark.edges.map(( disc ) => {
              const frontmatter = disc.node.frontmatter
              return (
                <Col md={6}>
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


              {/* <h3><FontAwesomeIcon icon={faPlayCircle} />クロスフェード</h3>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/VlkaBEF6WZ4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <p><a href="https://www.youtube.com/watch?v=VlkaBEF6WZ4">【C90 3日目西q-45a】Piano Sketch Vol.1 XFD【ソロピアノアルバム】</a></p>

              <ul>
                <li>2016年夏コミ（C90）にて頒布</li>
                <li>オリジナルピアノ曲集10曲を収録</li>
              </ul>
              <div class="music-detail">
                <ul>
                  <li>1. 朝焼け</li>
                  <li>2. 雨上がり</li>
                  <li>3. 窓から</li>
                  <li>4. 宇宙の空</li>
                  <li>5. 安らぎの中で</li>
                  <li>6. 月の夜</li>
                  <li>7. ヒカリ</li>
                  <li>8. たからもの</li>
                  <li>9. 君のもとへ</li>
                  <li>10. Da Capo</li>
                </ul>
              </div>

              <h3><FontAwesomeIcon icon={faHeadphonesAlt} />Listen by</h3>
              <div className="listen-list">
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
              </div> */}
          
        </Tab>

        <Tab eventKey="youtube" title="YouTube">
          
          <Row>
            <Col md={6} className="youtube-list">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe title="a" className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/VlkaBEF6WZ4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <p><a href="https://www.youtube.com/watch?v=VlkaBEF6WZ4">【C90 3日目西q-45a】Piano Sketch Vol.1 XFD【ソロピアノアルバム】</a></p>
            </Col>
          </Row>

        </Tab>
        
        <Tab eventKey="soundcloud" title="SoundCloud">
          <div className="soundcloud-list">
            {soundcloudList.map((id) => (
              <iframe title="b" width="100%" height="125" scrolling="no" frameborder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false`}></iframe>
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
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
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