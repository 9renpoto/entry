/* @flow */
import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import CalendarHeatmap from 'react-calendar-heatmap'

type Props = {
  data: any
}

type State = {
  posts: any
}

export default class BlogIndex extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      posts: this._getPosts()
    }
  }
  _getPosts () {
    return this.props.data.allMarkdownRemark.edges
  }
  _getCalenderData () {
    const posts = this._getPosts()
    const values = {}
    posts.forEach(({ node }) => {
      const { date } = node.frontmatter
      if (!values[date]) {
        values[date] = {
          date,
          count: 0
        }
      }
      values[date].count++
    })
    return Object.keys(values).map(data => values[data])
  }
  _getLinks () {
    const posts = this._getPosts()
    const pageLinks = []
    posts.forEach(({ node }) => {
      if (node.path !== '/404/') {
        pageLinks.push(
          <p>
            <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
          </p>
        )
      }
    })

    return pageLinks
  }
  render () {
    return (
      <div>
        <Helmet title={this.props.data.site.siteMetadata.title} />
        <CalendarHeatmap
          endDate={new Date()}
          numDays={365}
          values={this._getCalenderData()}
          classForValue={(value: any) => {
            if (!value) {
              value = { count: 0 }
            }
            return `color-github-${value.count}`
          }}
        />
        {this._getLinks()}
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
            title
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`
