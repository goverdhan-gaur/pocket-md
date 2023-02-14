import React, { FunctionComponent } from 'react'
import * as Styled from './Loading.styled'

type Props = {
  //
}

export const Loading: FunctionComponent<Props> = (props) => {
  return (
    <Styled.wrapper>
      <Styled.left />
      <Styled.center />
      <Styled.right />
    </Styled.wrapper>
  )
}
