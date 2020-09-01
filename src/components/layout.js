import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation";

import "../assets/scss/style.scss"
import Footer from "./footer";

const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      siteTitle: title,
      siteLogo: image,
      siteTwitter:twitterUsername,
      siteIg:igUsername,
      siteFb:facebookUsername,
      siteGmap:gmapLocationUrl,
      sitePhone:phoneNumber,
      siteCopyright:copyright,
      siteLocation:location
    }
  }
}
`

const Layout = ({ children, className }) => {

  const { site } = useStaticQuery(query)
  const { siteTitle, siteLogo } = site.siteMetadata

  return (
    <div className="primary-container">
      <Header>
        <Logo logo={siteLogo} title={siteTitle} />
        <Navigation />
      </Header>
      <main className={"container " + className}>
        {children}
      </main>
      <Footer site={site.siteMetadata} />
    </div>
  )
}

export default Layout

