import React from "react"

import Badge from "react-bootstrap/Badge"

export default (props) => {

  const categories = {
    RELEASE: "success",
    MUSIC: "success",
    EVENT: "primary",
    INFO: "info",
    OTHER: "secondary",
  }

  const variant = categories[props.category] || 'secondary'

  return (
    <Badge variant={variant}>{props.category}</Badge>
  )
}
