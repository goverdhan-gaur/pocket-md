import { localClient as client } from '@/utils/apollo'
import {
  firstPageArticles,
  retrievePageArticles,
} from '@/queries/firstPageArticles'
import { useEffect, useState } from 'react'
import { useLoadMore } from '@/hooks/useLoadMore'
import { Wrapper } from '@/components/Wrapper/Wrapper'

export interface Article {
  __typename: string
  id: string
  author: string
  createdAt: string
  score: number
  updatedAt: string
  title: string
  text: string
  type: string
  url: string
}

export interface HomeProps {
  articles: Article[]
  page: string
}

const getTypes = (articles: Article[]) => {
  const types: string[] = ['All']
  articles.forEach((item: Article) => {
    !types.includes(item.type) && types.push(item.type)
  })
  return types
}

export default function Home(props: HomeProps) {
  const [articles, setArticles] = useState<Article[]>(props.articles)
  const filters: string[] = getTypes(articles)

  const [filter, setFilter] = useState<string>('All')
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([])
  const [hasLoaded, setHasLoaded] = useState<boolean>(false)
  const { data, loading } = useLoadMore({
    query: retrievePageArticles,
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
