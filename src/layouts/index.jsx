/* @flow */
import React, { Component } from 'react'
import { Header } from '@9renpoto/style'

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
          titles={['slides', 'profile']}
          title={':-)'}
          baseUrl={'https://9renpoto.gitihub.io'}
        />
        {children()}
      </div>
    )
  }
}
