import React, { FunctionComponent } from 'react'
import * as Styled from './FormInput.styled'

type Props = {
  //
  title: string
}

export const FormInput: FunctionComponent<Props> = ({ title = 'title' }) => {
  return <Styled.wrapper>{title}</Styled.wrapper>
}