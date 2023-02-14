import React from 'react'
import * as Styled from './ArticleList.styled'
import { HomeProps } from '@/pages'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { Loading } from '../Loading/Loading'

export const ArticleList: React.FC<HomeProps> = (props) => {
  const { articles } = props
  return (
    <>
      <Styled.wrapper>
        {/* {articles.map((article) => {
          return (
            <ArticleListItem key={`asdads${Math.random()}`} article={article} />
          )
        })} */}
        <Loading />
      </Styled.wrapper>
    </>
  )
}
