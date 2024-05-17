import React, { FunctionComponent } from 'react'
import * as Styled from './ToggleFormModal.styled'
import { modalType, useModalStore } from '@/store/modal'

export const ToggleFormModal: FunctionComponent = () => {
  const { openModal } = useModalStore()

  return (
    <Styled.wrapper onClick={() => openModal(modalType.Form)}>
      <Styled.iconWrapper />
      <Styled.label>Add Post</Styled.label>
    </Styled.wrapper>
  )
}
