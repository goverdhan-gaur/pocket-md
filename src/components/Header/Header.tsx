import React, { FunctionComponent } from 'react'
import * as Styled from './Header.styled'
import { ThemeToggler } from '../ThemeToggler/ThemeToggler'
import { Modals } from '../Modals/Modals'

export const Header: FunctionComponent = () => {
  return (
    <Styled.wrapper>
      <Modals />
      <ThemeToggler />
    </Styled.wrapper>
  )
}
