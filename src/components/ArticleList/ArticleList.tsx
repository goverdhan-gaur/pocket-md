import React from 'react'
import * as Styled from './ArticleList.styled'
import { HomeProps } from '@/pages'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { Loading } from '../Loading/Loading'

interface Props extends HomeProps {
  hasLoaded: boolean
}

export const ArticleList: React.FC<Props> = (props) => {
  const { articles, hasLoaded } = props
  return (
    <>
      <Styled.wrapper>
        {articles.map((article) => {
          return (
            <ArticleListItem
              key={`article__${Math.random()}`}
              article={article}
            />
          )
        })}
        {!hasLoaded && <Loading />}
      </Styled.wrapper>
    </>
  )
}
