import React from "react"

import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-regular-svg-icons"

import "./music.css"

export default function Home({ location }) {

  return (
    <Layout location={location}>

      {/* NEWS */}
      <h1><FontAwesomeIcon icon={faCircle} />MUSIC</h1>

      <Tabs defaultActiveKey="album" id="tab-music">
        <Tab eventKey="album" title="Album">

            <Row>
              <Col sm={4}>
                <img src="https://placehold.jp/600x600.png" width="100%" />
              </Col>
              <Col sm={8}>
                <h3>Piano Scketch Vol.1</h3>
                <p className="text-right small">リリース：2016/8</p>
                <p>aaaaa</p>
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
          
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/276183134&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/naba0123" title="Naba" target="_blank" style="color: #cccccc; text-decoration: none;">Naba</a> · <a href="https://soundcloud.com/naba0123/c90-3q-45apiano-sketch-vol1-xfd" title="【C91 3日目西り-34a】Piano Sketch Vol.1 XFD【ソロピアノアルバム】" target="_blank" style="color: #cccccc; text-decoration: none;">【C91 3日目西り-34a】Piano Sketch Vol.1 XFD【ソロピアノアルバム】</a></div>

        </Tab>
      </Tabs>

    </Layout>
  )
}
