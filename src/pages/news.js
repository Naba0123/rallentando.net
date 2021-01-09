import React from "react"
import { Link } from "gatsby"

import Table from "react-bootstrap/Table"
import Badge from "react-bootstrap/Badge"

import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

export default function Home({ location }) {

  const newsList = [
    {
      date: "2021/01/XX",
      title: "Piano Sketch Vol.1 が各種音楽配信サイトにて配信が開始されました。",
      path: "/news/aaaaa",
    },
    {
      date: "2021/01/XX",
      title: "ホームページをリニューアルしました。",
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

      <ul className="pagenation">
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
      </ul>

    </Layout>
  )
}
