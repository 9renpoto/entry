import React, { PureComponent } from 'react'
import { Header } from '@9renpoto/style'
import Link from 'gatsby-link'
import 'prismjs/themes/prism-solarizedlight.css'

type Props = {
  children: any;
}

export default class Template extends PureComponent<Props> {
  render () {
    const { children } = this.props
    return (
      <div>
        <Header
          Logo={(className: string) => (
            <Link className={className} to='/'>
              {':-)'}
            </Link>
          )}
          titles={['slides', 'profile']}
          baseUrl={'https://9renpoto.github.io'}
        />
        {children()}
      </div>
    )
  }
}
