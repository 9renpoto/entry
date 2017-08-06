/* @flow */
import React, { Component } from 'react'

type Props = {
  headComponents: React$Element<any>,
  postBodyComponents: React$Element<any>,
  body: any
}

export default class HTML extends Component {
  props: Props
  render () {
    return (
      <html lang='ja'>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          {this.props.headComponents}
        </head>
        <body>
          <div
            id='___gatsby'
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
