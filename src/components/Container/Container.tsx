import React, { FunctionComponent } from 'react'
import * as Styled from './Container.styled'
import { ArticleList } from '../ArticleList/ArticleList'

type Props = {
  children: React.ReactElement<typeof ArticleList>
}

export const Container: FunctionComponent<Props> = ({ children }) => {
  return <Styled.wrapper>{children}</Styled.wrapper>
}
