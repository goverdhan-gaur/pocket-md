import React, { FunctionComponent } from 'react'
import * as Styled from './Wrapper.styled'
import { ArticleFilter } from '../ArticleFilter/ArticleFilter'
import { ArticleList } from '../ArticleList/ArticleList'
import { Article, ArticleType } from '@/pages'

type Props = {
  filters: string[]
  activeFilter: string
  onFilterClick: (id: string) => void
  hasLoaded: boolean
  articles: Article[]
  toggleTheme: () => void
  articleType: ArticleType
}

export const Wrapper: FunctionComponent<Props> = ({
  filters,
  activeFilter,
  onFilterClick,
  hasLoaded,
  articles,
  toggleTheme,
  articleType,
}) => {
  return (
    <Styled.wrapper>
      <ArticleFilter
        onFilterClick={onFilterClick}
        filters={filters}
        activeFilter={activeFilter}
        toggleTheme={toggleTheme}
      />
      <ArticleList
        articles={articles}
        hasLoaded={hasLoaded}
        articleType={articleType}
      />
    </Styled.wrapper>
  )
}
