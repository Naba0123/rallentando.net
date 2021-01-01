import React from "react"

import Container from "react-bootstrap/Container"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faSoundcloud, faYoutube } from "@fortawesome/free-brands-svg-icons"

export default () => {

  return (
    <footer>
      <Container>
        <ul className="footer-sns">
          <li>
            <a href="https://twitter.com/Naba0123">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="https://soundcloud.com/Naba0123">
              <FontAwesomeIcon icon={faSoundcloud} />
            </a>
          </li>
          <li>
            <a href="https://soundcloud.com/Naba0123">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
        </ul>
        
        <p style={{ fontSize: "0.8em" }}>© {(new Date()).getFullYear()} Rallentando (Euphoria Time). All Rights Reserved.</p>
      </Container>
    </footer>
  )
}