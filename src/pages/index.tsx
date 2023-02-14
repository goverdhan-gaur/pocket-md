import client from '@/utils/apollo'
import {
  firstPageArticles,
  retrievePageArticles,
} from '@/queries/firstPageArticles'
import { ArticleList } from '@/components/ArticleList/ArticleList'
import { ArticleFilter } from '@/components/ArticleFilter/ArticleFilter'
import { useEffect, useState } from 'react'
import { useLoadMore } from '@/hooks/useLoadMore'
import { Container } from '@/components/Container/Container'
import { Loading } from '@/components/Loading/Loading'

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
    }, 5000)

    return () => {
      clearTimeout(delay)
    }
  }, [filter, articles]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <ArticleFilter
        onFilterClick={setFilter}
        filters={filters}
        activeFilter={filter}
      />
      <ArticleList articles={filteredArticles} />
    </>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: firstPageArticles,
  })

  return {
    props: {
      articles: data.firstPageArticles,
    },
  }
}
