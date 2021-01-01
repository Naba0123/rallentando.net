import React from "react"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

export default (props) => {

  const links = [
    {
      name: "TOP",
      path: "/"
    },
    {
      name: "NEWS",
      path: "/news/"
    },
    {
      name: "MUSIC",
      path: "/music/"
    },
    {
      name: "EVENT",
      path: "/event/"
    },
    {
      name: "LINK",
      path: "/link/"
    },
  ]

  return (
    <header>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <h1>Rallentando</h1>
      </div>
      <div>
        <Container>
          <Nav className="justify-content-center" justify>
            {links.map((elem) => {
              if (props.location.pathname === elem.path) {
                return <Nav.Item><Nav.Link href={elem.path} disabled><h6>{elem.name}</h6></Nav.Link></Nav.Item>
              } else {
                return <Nav.Item><Nav.Link href={elem.path}><h6>{elem.name}</h6></Nav.Link></Nav.Item>
              }
            })}
          </Nav>
        </Container>
      </div>
    </header>
  )
}
