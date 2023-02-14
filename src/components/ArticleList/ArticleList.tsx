import React, { FunctionComponent } from 'react'
import * as Styled from './ArticleList.styled'
import { HomeProps } from '@/pages'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'

interface Props extends HomeProps {}

export const ArticleList: FunctionComponent<Props> = (props) => {
  const { articles } = props
  return (
    <>
      <Styled.wrapper>
        {articles.map((article) => {
          return (
            <ArticleListItem key={`asdads${Math.random()}`} article={article} />
          )
        })}
      </Styled.wrapper>
    </>
  )
}
