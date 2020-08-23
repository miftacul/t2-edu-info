import React from "react"
import { Link } from "gatsby"

const Logo = (props) => (
  <div className="site-logo">
    <img height="50px" style={{ verticalAlign: "middle" }} src={props.logo}></img> &nbsp;
    <Link style={{ verticalAlign: "bottom", fontSize: "xx-large" }} to="/">{props.title}</Link>
  </div>
)

export default Logo