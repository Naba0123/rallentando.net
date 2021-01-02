import React from "react"

import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faPlayCircle } from "@fortawesome/free-regular-svg-icons"
import { faCompactDisc, faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons"

import "./music.css"

export default function Home({ location }) {

  const soundcloudList = [
    246363767, 245825677, 243405491, 200761010, 200760703, 200760295
  ]

  return (
    <Layout location={location}>

      {/* NEWS */}
      <h1><FontAwesomeIcon icon={faCircle} />MUSIC</h1>

      <Tabs defaultActiveKey="album" id="tab-music">
        <Tab eventKey="album" title="Album">

          <h2 style={{ textDecoration: "underline #FDAC53 3px" }}><FontAwesomeIcon icon={faCompactDisc} />Piano Scketch Vol.1</h2>
          <Row>
            <Col md={4}>
              <img src="https://placehold.jp/600x600.png" width="100%" />

              <h3 style={{ textDecoration: "underline #FDAC53 3px" }}><FontAwesomeIcon icon={faPlayCircle} />クロスフェード</h3>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/VlkaBEF6WZ4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <p><a href="https://www.youtube.com/watch?v=VlkaBEF6WZ4">【C90 3日目西q-45a】Piano Sketch Vol.1 XFD【ソロピアノアルバム】</a></p>
            </Col>
            <Col md={8}>
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

              <h3 style={{ textDecoration: "underline #FDAC53 3px" }}><FontAwesomeIcon icon={faHeadphonesAlt} />Listen by</h3>
              <div className="listen-list">
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
              </div>
            </Col>
          </Row>
          
        </Tab>

        <Tab eventKey="youtube" title="YouTube">
          
          <Row>
            <Col md={6} className="youtube-list">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/VlkaBEF6WZ4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <p><a href="https://www.youtube.com/watch?v=VlkaBEF6WZ4">【C90 3日目西q-45a】Piano Sketch Vol.1 XFD【ソロピアノアルバム】</a></p>
            </Col>
          </Row>

        </Tab>
        
        <Tab eventKey="soundcloud" title="SoundCloud">
          <div className="soundcloud-list">
            {soundcloudList.map((id) => (
              <iframe width="100%" height="125" scrolling="no" frameborder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false`}></iframe>
            ))}
            </div>
        </Tab>
      </Tabs>

    </Layout>
  )
}
