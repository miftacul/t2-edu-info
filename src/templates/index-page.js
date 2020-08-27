import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { RiArrowRightSLine } from "react-icons/ri"
import Slider from 'infinite-react-carousel';

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import SEO from "../components/seo"
import ContactUs from "../components/contactus"

// const waQuery = graphql`
// query WAQuery {
//   allWaJson {
//     edges {
//       node {
//         hp
//         message
//       }
//     }
//   }
// }
// `


export const pageQuery = graphql`
  query HomeQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 480, maxHeight: 380, quality: 80, srcSetBreakpoints: [960, 1440]) {
              ...GatsbyImageSharpFluid
            }
            sizes {
              src
            }
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
    dataJson {
      hp
      message
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark, dataJson } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage ? frontmatter.featuredImage.childImageSharp.fluid : ""
  // const { site } = useStaticQuery(waQuery)
  const { hp, message } = dataJson
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    dots: true,
    duration: 500,
    pauseOnHover: false,
    shift: 10
  };
  return (
    <Layout>
      <SEO />
      <Slider {...settings}>
        <div>
          <div className="home-banner grids col-1 sm-2">
            <div>
              <h1 class="title">{frontmatter.title}</h1>
              <p class="tagline">{frontmatter.tagline}</p>
              <div className="description" dangerouslySetInnerHTML={{ __html: html }} />
              <Link to={frontmatter.cta.ctaLink} className="button">{frontmatter.cta.ctaText}<span class="icon -right"><RiArrowRightSLine /></span></Link>
            </div>
            <div>
              {Image ? (
                <Img
                  fluid={Image}
                  alt={frontmatter.title + ' - Featured image'}
                  className="featured-image"
                />
              ) : ""}
            </div>
          </div>
        </div>
        <div>
          <div className="home-banner grids col-1 sm-2">
            <div>
              <h1 class="title">{frontmatter.title}</h1>
              <p class="tagline">{frontmatter.tagline}</p>
              <div className="description" dangerouslySetInnerHTML={{ __html: html }} />
              <Link to={frontmatter.cta.ctaLink} className="button">{frontmatter.cta.ctaText}<span class="icon -right"><RiArrowRightSLine /></span></Link>
            </div>
            <div>
              {Image ? (
                <Img
                  fluid={Image}
                  alt={frontmatter.title + ' - Featured image'}
                  className="featured-image"
                />
              ) : ""}
            </div>
          </div>
        </div>
      </Slider>
      <BlogListHome />
      <ContactUs hp={hp} message={message}></ContactUs>
    </Layout>
  )
}

export default HomePage
