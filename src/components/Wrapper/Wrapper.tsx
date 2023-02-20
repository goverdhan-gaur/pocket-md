import React, { FunctionComponent, useEffect, useState } from 'react'
import * as Styled from './Wrapper.styled'
import { ArticleFilter } from '../ArticleFilter/ArticleFilter'
import { ArticleList } from '../ArticleList/ArticleList'
import { Article } from '@/Interfaces/article'
import { ArticleType } from '@/Interfaces/types'
import { useLoadMore } from '@/hooks/useLoadMore'
import { retrievePageArticles } from '@/queries/retrievePageArticles'
import { getTypes } from '@/utils/getTypes'
import { Loading } from '../Loading/Loading'

type Props = {
  articles: Article[]
  toggleTheme: () => void
  articleType: ArticleType
}

const filterArticles = (articlesList: Article[], filter: string) => {
  return articlesList.filter(
    (article: { type: string }) => article.type === filter
  )
}

export const Wrapper: FunctionComponent<Props> = ({
  articles,
  toggleTheme,
  articleType,
}) => {
  const [articlesList, setArticlesList] = useState<Article[]>(articles)
  const filters: string[] = getTypes(articlesList)
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([])

  const [filter, setFilter] = useState<string>('All')
  const [hasLoaded, setHasLoaded] = useState<boolean>(true)

  const loadMoreObj =
    articleType === 'internal'
      ? {
          query: retrievePageArticles,
          useApollo: true,
        }
      : { query: retrievePageArticles }

  const { data, loading } = useLoadMore(loadMoreObj)

  useEffect(() => {
    setArticlesList((prev) => {
      const oldArray = prev
      const updatedArray = [...oldArray, ...data]
      return updatedArray
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => {
    loading && setHasLoaded(false)
  }, [loading])

  useEffect(() => {
    const delay = setTimeout(() => {
      if (filter === 'All') {
        setFilteredArticles(articlesList)
      } else {
        setFilteredArticles(filterArticles(articlesList, filter))
      }
      setHasLoaded(true)
    }, 500)

    return () => {
      clearTimeout(delay)
    }
  }, [filter, articlesList]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Styled.wrapper>
      <ArticleFilter
        onFilterClick={setFilter}
        filters={filters}
        activeFilter={filter}
        toggleTheme={toggleTheme}
      />
      {filteredArticles.length ? (
        <ArticleList
          articles={filteredArticles}
          hasLoaded={hasLoaded}
          articleType={articleType}
        />
      ) : (
        <Loading />
      )}
    </Styled.wrapper>
  )
}
