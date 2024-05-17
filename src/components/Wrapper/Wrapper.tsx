import React, { FunctionComponent, useEffect, useState } from 'react'
import * as Styled from './Wrapper.styled'
import { Header } from '../Header/Header'
import { ArticleList } from '../ArticleList/ArticleList'
import { Article } from '@/Interfaces/article'
import { ArticleType } from '@/Interfaces/types'
import { useLoadMore } from '@/hooks/useLoadMore'
import { retrievePageArticles } from '@/queries/retrievePageArticles'
import { getTypes } from '@/utils/getTypes'
import { Loading } from '../Loading/Loading'
import { ArticleFilters } from '../ArticleFilters/ArticleFilters'
import { Container } from '../Container/Container'

type Props = {
  articles: Article[]
  articleType: ArticleType
  isModalOpen: boolean
}

const filterArticles = (articlesList: Article[], filter: string) => {
  return articlesList.filter(
    (article: { type: string }) => article.type === filter
  )
}

export const Wrapper: FunctionComponent<Props> = ({
  articles,
  articleType,
  isModalOpen,
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
    <Styled.wrapper disabled={isModalOpen}>
      <Header />
      {filters.length > 0 && (
        <ArticleFilters
          onFilterClick={setFilter}
          filters={filters}
          activeFilter={filter}
        />
      )}
      <Container>
        {filteredArticles.length ? (
          <ArticleList
            articles={filteredArticles}
            hasLoaded={hasLoaded}
            articleType={articleType}
          />
        ) : (
          <Loading />
        )}
      </Container>
    </Styled.wrapper>
  )
}
