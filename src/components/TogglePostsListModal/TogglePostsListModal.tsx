import React, { FunctionComponent } from 'react'
import * as Styled from './TogglePostsListModal.styled'
import { modalType, useModalStore } from '@/store/modal'

export const TogglePostsListModal: FunctionComponent = () => {
  const { openModal } = useModalStore()

  return (
    <Styled.wrapper onClick={() => openModal(modalType.Posts)}>
      <Styled.iconWrapper />
      <Styled.label>View Posts</Styled.label>
    </Styled.wrapper>
  )
}
