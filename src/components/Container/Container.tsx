import React, { FunctionComponent, ReactNode } from 'react'
import * as Styled from './Container.styled'

type Props = {
  //
  children: ReactNode
}

export const Container: FunctionComponent<Props> = ({ children }) => {
  return <Styled.wrapper>{children}</Styled.wrapper>
}