import React from "react"
import { Link } from "gatsby"

import Carousel from "react-bootstrap/Carousel"
import Table from "react-bootstrap/Table"
import Badge from "react-bootstrap/Badge"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function Home({ location }) {

  const newsList = [
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

      {/* TOP Carousel */}
      <Carousel style={{ marginBottom: "40px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placehold.jp/373940/ffffff/800x300.png?text=いちまいめ"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placehold.jp/282c34/ffffff/800x300.png?text=にまいめ"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placehold.jp/20232a/ffffff/800x300.png?text=さんまいめ"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* NEWS */}
      <h1><FontAwesomeIcon icon={faCircle} />NEWS</h1>
      <Table className="news" style={{ marginBottom: 0 }}>
        <tbody>
          {newsList.map((news) => {
          let cont
          if (news.path) {
            cont = <a href={news.path}>{news.title}</a>
          } else {
            cont = news.title
          }
          return (<tr>
            <th>{news.date}</th>
            <td><Badge variant="success">Release</Badge></td>
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
      <p>オリジナルピアノ曲を中心に作曲し、CDや楽譜の頒布、配信を行っているサークルです。</p>
      <p>Rallentando という音楽記号は、だんだん遅く、ゆっくりになる、という意味があります。</p>
      <p>忙しい毎日を過ごす中の、例えば寝る前に一息つきたいときや、休憩したいときなどにそっと寄り添えるような、そんな音楽を作りたいと思っています。</p>
      <Row style={{ marginTop: "40px", marginBottom: "40px" }}>
        <Col sm={4} className="text-center">
          <img src="https://placehold.jp/300x300.png" style={{ width: "100%", maxWidth: "300px" }} alt="profile" />
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
