import React, { PureComponent } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import CalendarHeatmap from 'react-calendar-heatmap'

type Props = {
  data: any;
}

type State = {
  posts: any;
}

export default class BlogIndex extends PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      posts: this._getPosts()
    }
  }
  _getPosts (): any {
    return this.props.data.allMarkdownRemark.edges
  }
  _getCalenderData () {
    const posts = this._getPosts()
    const values: any = {}
    posts.forEach(({ node }: any) => {
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
    return posts.map(
      (
        { node: { path: globalPath, frontmatter: { path, title } } }: any,
        i: number
      ): any => {
        if (globalPath !== '/404/') {
          return (
            <p key={i}>
              <Link to={path}>{`${posts.length - i}. ${title}`}</Link>
            </p>
          )
        }
      }
    )
  }
  render () {
    return (
      <div className='container is-fluid'>
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
