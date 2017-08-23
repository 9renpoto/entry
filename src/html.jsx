/* @flow */
import React, { Component } from 'react'

type Props = {
  headComponents: React$Element<any>,
  postBodyComponents: React$Element<any>,
  body: any
}

declare var __PATH_PREFIX__: string

export default class HTML extends Component<Props> {
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
          <link
            rel='stylesheet'
            type='text/css'
            href={`${__PATH_PREFIX__}/bundle.css`}
          />
          <link rel='shortcut icon' href={`${__PATH_PREFIX__}/favicon.ico`} />
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
