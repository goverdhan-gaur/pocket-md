import React, { FunctionComponent } from 'react'
import * as Styled from './Container.styled'

type Props = {
  //
  title: string
}

export const Container: FunctionComponent<Props> = ({ title = 'title' }) => {
  return <Styled.wrapper>{title}</Styled.wrapper>
}
