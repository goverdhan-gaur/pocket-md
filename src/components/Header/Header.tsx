import React, { FunctionComponent } from 'react'
import * as Styled from './Header.styled'
import { ThemeToggler } from '../ThemeToggler/ThemeToggler'
import { Modals } from '../Modals/Modals'
import { Container } from '../Container/Container'

export const Header: FunctionComponent = () => {
  return (
    <Styled.wrapper>
      <Container>
        <Styled.nav>
          <Modals />
          <ThemeToggler />
        </Styled.nav>
      </Container>
    </Styled.wrapper>
  )
}
