/* @flow */
import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'

declare var graphql: any // TODO remove
type Props = {
  data: any
}

export default class BlogIndex extends Component {
  props: Props
  render () {
    const pageLinks = []
    const posts = this.props.data.allMarkdownRemark.edges
    posts.forEach(post => {
      if (post.node.path !== '/404/') {
        pageLinks.push(
          <li
            key={post.node.frontmatter.path}
            style={{
              marginBottom: rhythm(1 / 4)
            }}
          >
            <Link style={{ boxShadow: 'none' }} to={post.node.frontmatter.path}>
              {post.node.frontmatter.title}
            </Link>
          </li>
        )
      }
    })

    return (
      <div>
        <Helmet title={this.props.data.site.siteMetadata.title} />
        <ul>
          {pageLinks}
        </ul>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            path
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
