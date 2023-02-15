import React, { FunctionComponent } from 'react'
import * as Styled from './Wrapper.styled'
import { ArticleFilter } from '../ArticleFilter/ArticleFilter'
import { ArticleList } from '../ArticleList/ArticleList'
import { Article } from '@/pages'

type Props = {
  filters: string[]
  activeFilter: string
  onFilterClick: (id: string) => void
  hasLoaded: boolean
  articles: Article[]
}

export const Wrapper: FunctionComponent<Props> = ({
  filters,
  activeFilter,
  onFilterClick,
  hasLoaded,
  articles,
}) => {
  return (
    <Styled.wrapper>
      <ArticleFilter
        onFilterClick={onFilterClick}
        filters={filters}
        activeFilter={activeFilter}
      />
      <ArticleList articles={articles} hasLoaded={hasLoaded} />
    </Styled.wrapper>
  )
}
