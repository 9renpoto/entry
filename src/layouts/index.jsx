/* @flow */
import React, { Component } from 'react'
import { Header } from '@9renpoto/style'
import Link from 'gatsby-link'

type Props = {
  children: Function
}

export default class Template extends Component {
  props: Props
  render () {
    const { children } = this.props
    return (
      <div>
        <Header
          Logo={className =>
            <Link className={className} to='/'>
              {':-)'}
            </Link>}
          titles={['slides', 'profile']}
          baseUrl={'https://9renpoto.gitihub.io'}
        />
        {children()}
      </div>
    )
  }
}
