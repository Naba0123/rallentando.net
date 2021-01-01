import React from "react"

import Carousel from "react-bootstrap/Carousel"
import Table from "react-bootstrap/Table"

import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-regular-svg-icons"

export default function Home({ location }) {

  const newsList = [
    {
      date: "2021/01/XX",
      title: "Piano Sketch Vol.1 が各種音楽配信サイトにて配信が開始されました。",
      path: "/news/aaaaa",
    },
    {
      date: "2018/10/07",
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

      <h1><FontAwesomeIcon icon={faCircle} /> NEWS</h1>
      <Table className="news">
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
            <td>{cont}</td>
          </tr>)
          })}
          
        </tbody>
      </Table>

    </Layout>
  )
}
