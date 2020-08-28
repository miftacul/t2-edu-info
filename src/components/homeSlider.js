import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { RiArrowRightSLine } from "react-icons/ri"

class HomeSlider extends React.Component {
  render() {
    return (
      <div>
        <div className="home-banner grids col-1 sm-2">
          <div>
            <h1 className="title">{this.props.info.frontmatter.title}</h1>
            <p className="tagline">{this.props.info.frontmatter.tagline}</p>
            <div className="description">{this.props.info.frontmatter.description}</div>
            <Link to={this.props.info.frontmatter.slug} className="button">Ingin tau lebih detail?<span className="icon -right"><RiArrowRightSLine /></span></Link>
          </div>
          <div>
            {this.props.info.frontmatter.featuredImage ? (
              <Img
                fluid={this.props.info.frontmatter.featuredImage.childImageSharp.fluid}
                alt={this.props.info.frontmatter.title + ' - Featured image'}
                className="featured-image"
              />
            ) : ""}
          </div>
        </div>
      </div>
    )
  }
}

export default HomeSlider