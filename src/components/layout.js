import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import Container from "react-bootstrap/Container"

import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/layout.css"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

export default (props) => {
  return (
    <div>
      <Header location={props.location} />

      <Container>
        {props.children}
      </Container>

      <hr style={{ marginTop: "30px" }} />
      <Footer />
    </div>
  )
}