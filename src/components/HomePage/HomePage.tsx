import React, { FunctionComponent } from 'react'
import * as Styled from './HomePage.styled'

type Props = {
  //
  title: string
}

export const HomePage: FunctionComponent<Props> = ({ title = 'title' }) => {
  return <Styled.wrapper>{title}</Styled.wrapper>
}
