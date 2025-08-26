import React from 'react'
import { ContainerComponent } from './container.styles'

function Container({children}) {
  return (
    <ContainerComponent>{children}</ContainerComponent>
  )
}

export default Container