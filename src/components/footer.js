import React from "react"
import { Link } from "gatsby"
import { RiMapPinLine, RiPhoneLine, RiTwitterLine, RiInstagramLine, RiFacebookLine } from "react-icons/ri"

const Footer = (props) => (
  <footer className="site-footer">
    <div className="container">
      <div className="grids col-1 sm-2 md-3">
        <div>
          <Link target="_blank" to={props.site.siteGmap}>
            <RiMapPinLine style={{ margin: "5px", fontSize: "30px", color: "var(--primary-color)" }}></RiMapPinLine>
          </Link>
          <p>{props.site.siteLocation}</p>
        </div>
        <div>
          <RiPhoneLine style={{ margin: "5px", fontSize: "30px", color: "var(--primary-color)" }}></RiPhoneLine>
          <p>
            CS : {props.site.sitePhone}
            <br /> (setiap hari pukul 08.00 - 20.00)
            </p>
        </div>
        <div>
          <Link target="_blank" to={"https://twitter.com/" + props.site.siteTwitter}>
            <RiTwitterLine style={{ margin: "5px", fontSize: "30px", color: "var(--primary-color)" }}></RiTwitterLine>
          </Link>
          <Link target="_blank" to={"https://www.instagram.com/" + props.site.siteIg}>
            <RiInstagramLine style={{ margin: "5px", fontSize: "30px", color: "var(--primary-color)" }}></RiInstagramLine>
          </Link>
          <Link target="_blank" to={"https://facebook.com/" + props.site.siteFb}>
            <RiFacebookLine style={{ margin: "5px", fontSize: "30px", color: "var(--primary-color)" }}></RiFacebookLine>
          </Link>
          <p>{props.site.siteCopyright}</p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer