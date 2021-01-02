import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle, faHome } from "@fortawesome/free-solid-svg-icons"

export default function Home({ location }) {

  return (
    <Layout location={location}>

      <h1><FontAwesomeIcon icon={faExclamationCircle} />Page Not Found</h1>

      <p>ページが見つかりません。</p>

      <Link to="/"><FontAwesomeIcon icon={faHome} />TOPへ</Link>

    </Layout>
  )
}
