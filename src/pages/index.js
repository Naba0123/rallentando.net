import React from "react"

import Col from "react-bootstrap/Col"

import Layout from "../components/layout"

export default function Home({ location }) {
  return (
    <Layout location={location}>
      <Col>
        Hello world!
      </Col>
    </Layout>
  )
}
