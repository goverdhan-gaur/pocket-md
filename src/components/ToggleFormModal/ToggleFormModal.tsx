import React, { FunctionComponent } from 'react'
import * as Styled from './ToggleFormModal.styled'
import { useModalStore } from '@/store/modal'

export const ToggleFormModal: FunctionComponent = () => {
  const { openModal } = useModalStore()

  return (
    <Styled.wrapper onClick={openModal}>
      <Styled.plusWrapper>
        <Styled.span />
        <Styled.span />
      </Styled.plusWrapper>
      <Styled.label>Add Post</Styled.label>
    </Styled.wrapper>
  )
}
