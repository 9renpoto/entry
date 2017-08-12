/* @flow */
import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

type Props = {
  data: any
}

type State = {
  posts: any
}

export default class BlogIndex extends Component {
  props: Props
  state: State
  constructor (props: Props) {
    super(props)
    this.state = {
      posts: this.props.data.allMarkdownRemark.edges
    }
  }
  render () {
    const { posts } = this.state
    const pageLinks = []
    posts.forEach(({ node }) => {
      if (node.path !== '/404/') {
        pageLinks.push(
          <div className='box'>
            <article className='media'>
              <div className='media-content'>
                <div className='content' key={node.frontmatter.path}>
                  <Link
                    style={{ boxShadow: 'none' }}
                    to={node.frontmatter.path}
                  >
                    {node.frontmatter.title}
                  </Link>
                  <br />
                  <div className='control'>
                    <div className='tags has-addons'>
                      <span className='tag is-dark'>created</span>
                      <span className='tag is-primary'>
                        {node.frontmatter.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )
      }
    })

    return (
      <div>
        <Helmet title={this.props.data.site.siteMetadata.title} />
        <section className='section'>
          <div className='container'>
            <h1 className='title'>Lazy build blog</h1>
            <h2 className='subtitle'>Self-satisfaction without truth</h2>
          </div>
        </section>
        {pageLinks}
      </div>
    )
  }
}

declare var graphql: any // TODO remove
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
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
