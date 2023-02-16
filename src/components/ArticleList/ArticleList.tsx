import React, { FunctionComponent, useMemo, memo } from 'react'
import * as Styled from './ArticleList.styled'
import { Article, ArticleType } from '@/pages'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { Loading } from '../Loading/Loading'

interface Props {
  articles: Article[]
  hasLoaded: boolean
  articleType: ArticleType
}

export const ArticleList: FunctionComponent<Props> = (props) => {
  const { articles, hasLoaded, articleType } = props

  const memoizedArticles = useMemo(
    () =>
      articles.map((article, index) => (
        <ArticleListItem
          key={`article__${article.id}_${index}}`}
          article={article}
          index={index}
          articleType={articleType}
        />
      )),
    [articles, articleType]
  )

  return (
    <Styled.wrapper>
      {memoizedArticles}
      {!hasLoaded && <Loading />}
    </Styled.wrapper>
  )
}

export default memo(ArticleList)
