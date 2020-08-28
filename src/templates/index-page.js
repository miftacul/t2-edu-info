import React from "react"
import { graphql } from "gatsby"
import Slider from 'infinite-react-carousel';

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import SEO from "../components/seo"
import ContactUs from "../components/contactus"
import HomeSlider from "../components/homeSlider";


export const pageQuery = graphql`
  query HomeQuery{
		allMarkdownRemark(filter: {frontmatter: {isMain: {eq: true}}}) {
      edges{
        node{
          id
          html
          frontmatter {
            title
            slug
            tagline
            description
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
          }
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
  const { allMarkdownRemark, dataJson } = data // data.markdownRemark holds your post data
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

  const postss = allMarkdownRemark.edges.map(edge =>
    <HomeSlider key={edge.node.id} info={edge.node}></HomeSlider>
  )

  return (
    <Layout>
      <SEO />
      <Slider {...settings}>
        {postss}
      </Slider>
      <BlogListHome />
      <ContactUs hp={hp} message={message}></ContactUs>
    </Layout>
  )
}

export default HomePage
