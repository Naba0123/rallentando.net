import React from "react"
import { Link } from "gatsby"

import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

import "./music.css"

export default function Home({ location }) {

  const musicList = [
    {
      date: "2021/01/XX",
      title: "Piano Sketch Vol.1 が各種音楽配信サイトにて配信が開始されました。",
      path: "/news/aaaaa",
    },
    {
      date: "2018/10",
      title: "サークル名が Euphoria Time から Rallentando へと変わりました。今後もよろしくお願いいたします。",
    },
    {
      date: "2016/12",
      title: "【C91】頒布情報を更新しました。新刊はありません。",
      path: "/news/aaaaa"
    },
    {
      date: "2016/08",
      title: "【C90】新刊「Piano Sketch Vol1」完売いたしました。本当にありがとうございます。",
    },
  ]

  return (
    <Layout location={location}>

      {/* NEWS */}
      <h1><FontAwesomeIcon icon={faCircle} />MUSIC</h1>

      <Tabs defaultActiveKey="album" id="tab-music">
        <Tab eventKey="album" title="Album">

          <Row>
            <Col sm={6} lg={4}>
              <Card>
                <Card.Img variant="top" src="https://placehold.jp/600x600.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} lg={4}>
              <Card>
                <Card.Img variant="top" src="https://placehold.jp/600x600.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
        </Tab>
        <Tab eventKey="youtube" title="YouTube">
          <Row>
            <Col sm={6} lg={4}>
              
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="soundcloud" title="SoundCloud">
          SoundCloud
        </Tab>
      </Tabs>

    </Layout>
  )
}
