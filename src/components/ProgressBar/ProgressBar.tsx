import React, { FunctionComponent } from 'react'
import * as Styled from './ProgressBar.styled'

type Props = {
  //
  progress: number
}

export const ProgressBar: FunctionComponent<Props> = ({ progress }) => {
  return (
    <Styled.wrapper>
      <Styled.bar
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.2 }}
      />
    </Styled.wrapper>
  )
}
