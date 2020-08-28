import React from "react"
import { Link } from "gatsby"

const Logo = (props) => (
  <div className="site-logo">
    <img height="50px" style={{ verticalAlign: "middle" }} alt="icon" src={props.logo}></img> &nbsp;
    <Link style={{ verticalAlign: "bottom", fontSize: "xx-large" }} to="/">{props.title}</Link>
  </div>
)

export default Logo