import React, { Component } from 'react'
import Helmet from 'react-helmet'

type Props = {
  data: any;
}

export default class BlogPostTemplate extends Component<Props> {
  render () {
    const { frontmatter, html } = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <div>
        <Helmet title={`${frontmatter.title} | ${siteTitle}`} />
        <section className='hero is-primary'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>{frontmatter.title}</h1>
              <h2 className='subtitle'>{frontmatter.date}</h2>
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='container is-fluid'>
            <div
              className='content'
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </section>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
