import React from "react"
import {Link} from "gatsby"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./link.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { faTwitter, faSoundcloud } from "@fortawesome/free-brands-svg-icons"

export default function Home({ location }) {

  return (
    <Layout location={location}>
      <SEO pagetitle="LINK" pagepath={location.pathname} />

      <h1><FontAwesomeIcon icon={faCircle} />LINK</h1>

      <div className="link-list">
        <Row>
          <Col sm={6} md={4}>
            <Link to="https://twitter.com">
              <p style={{ color: "#1DA1F2" }}>
                <FontAwesomeIcon icon={faTwitter} />
              </p>
              Twitter (@Naba0123)
            </Link>
          </Col>
          <Col sm={6} md={4}>
          <Link to="https://soundcloud.com/Naba0123">
              <p style={{ color: "#FE5000" }}>
                <FontAwesomeIcon icon={faSoundcloud} />
              </p>
              Soundcloud (@Naba0123)
            </Link>
          </Col>
          <Col sm={6} md={4}>
            <Link to="https://www.youtube.com/channel/UCl3mMexjHoHmim6bijJg2YQ">
              <p>
                <img src="/images/link/youtube.png" style={{ width:"100%" }} alt="youtube" />
              </p>
              YouTube (Naba)
            </Link>
          </Col>
        </Row>
      </div>

    </Layout>
  )
}
