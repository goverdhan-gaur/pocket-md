import { localClient as client } from '@/utils/apollo'
import { firstPageArticles } from '@/queries/firstPageArticles'
import { useEffect, useState } from 'react'
import { useLoadMore } from '@/hooks/useLoadMore'
import { Wrapper } from '@/components/Wrapper/Wrapper'
import { Article } from '@/Interfaces/article'
import { retrievePageArticles } from '@/queries/retrievePageArticles'
import { getTypes } from '@/utils/getTypes'

export interface HomeProps {
  articles: Article[]
  page: string
  toggleTheme: () => void
}

export default function Home(props: HomeProps) {
  const { toggleTheme } = props
  const [articles, setArticles] = useState<Article[]>(props.articles)
  const filters: string[] = getTypes(articles)

  const [filter, setFilter] = useState<string>('All')
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([])
  const [hasLoaded, setHasLoaded] = useState<boolean>(false)
  const { data, loading } = useLoadMore({
    query: retrievePageArticles,
    useApollo: true,
  })

  const filterArticles = (articles: Article[], filter: string) => {
    return articles.filter(
      (article: { type: string }) => article.type === filter
    )
  }
  // To reset the scroll
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setArticles((prev) => {
      const oldArray = prev
      const updatedArray = [...oldArray, ...data]
      return updatedArray
    })
    loading && setHasLoaded(false)
  }, [data, loading]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const delay = setTimeout(() => {
      if (filter === 'All') {
        setFilteredArticles(articles)
      } else {
        setFilteredArticles(filterArticles(articles, filter))
      }
      setHasLoaded(true)
    }, 500)

    return () => {
      clearTimeout(delay)
    }
  }, [filter, articles]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Wrapper
      onFilterClick={setFilter}
      filters={filters}
      activeFilter={filter}
      articles={filteredArticles}
      hasLoaded={hasLoaded}
      articleType={'internal'}
      toggleTheme={toggleTheme}
    ></Wrapper>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: firstPageArticles,
  })

  return {
    props: {
      articles: data.firstPageArticles,
      page: 'local',
    },
  }
}
