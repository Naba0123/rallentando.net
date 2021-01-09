import React from "react"
import {Link} from "gatsby"

import Card from "react-bootstrap/Card"

import Layout from "../components/layout"
import "./event.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-regular-svg-icons"

export default function Home({ location }) {

  return (
    <Layout location={location}>

      <h1><FontAwesomeIcon icon={faCircle} />EVENT</h1>

      <Link to="#">
        <Card>
          <Card.Img variant="top" src="https://placehold.jp/1068x300.png" />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
      <Link to="#">
        <Card>
          <Card.Img variant="top" src="https://placehold.jp/1068x300.png" />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>

    </Layout>
  )
}
