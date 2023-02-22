import React, { FunctionComponent } from 'react'
import * as Styled from './Modals.styled'
import { ToggleFormModal } from '../ToggleFormModal/ToggleFormModal'
import { TogglePostsListModal } from '../TogglePostsListModal/TogglePostsListModal'

type Props = {
  //
}

export const Modals: FunctionComponent<Props> = () => {
  return (
    <Styled.wrapper>
      <ToggleFormModal />
      <TogglePostsListModal />
    </Styled.wrapper>
  )
}
