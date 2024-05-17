import React, { FunctionComponent } from 'react'
import * as Styled from './ScrollInstruction.styled'

type Props = {
  //
  title: string
}

export const ScrollInstruction: FunctionComponent<Props> = ({ title = 'title' }) => {
  return <Styled.wrapper>{title}</Styled.wrapper>
}