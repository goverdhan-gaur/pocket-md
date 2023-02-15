import React, { FunctionComponent, useMemo, memo } from 'react'
import * as Styled from './ArticleList.styled'
import { HomeProps } from '@/pages'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { Loading } from '../Loading/Loading'

interface Props extends HomeProps {
  hasLoaded: boolean
}

export const ArticleList: FunctionComponent<Props> = (props) => {
  const { articles, hasLoaded } = props

  const memoizedArticles = useMemo(
    () =>
      articles.map((article, index) => (
        <ArticleListItem
          key={`article__${article.id}_${index}}`}
          article={article}
          index={index}
        />
      )),
    [articles]
  )

  return (
    <Styled.wrapper>
      {memoizedArticles}
      {!hasLoaded && <Loading />}
    </Styled.wrapper>
  )
}

export default memo(ArticleList)
