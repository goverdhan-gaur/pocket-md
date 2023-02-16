import React, { FunctionComponent } from 'react'
import * as Styled from './FormModal.styled'

type Props = {
  //
  title: string
}

export const FormModal: FunctionComponent<Props> = ({ title = 'title' }) => {
  return <Styled.wrapper>{title}</Styled.wrapper>
}