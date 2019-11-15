import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export default ({ data }) => {
  let post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <div className='blog-post-container'>
      <div className='blog-post'>
        <Img fluid={featuredImgFluid} />
        <h1>{post.frontmatter.title}</h1>
        <time>{post.frontmatter.date}</time>
        <div
          className='blog-post-content'
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
