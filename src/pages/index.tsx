import { client } from '@/utils/apollo'
import { firstPageArticles } from '@/queries/firstPageArticles'
import { useLoadMoreAxios } from '@/hooks/useLoadMoreAxios'
import { Wrapper } from '@/components/Wrapper/Wrapper'
import { useEffect, useState } from 'react'
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

interface HomeProps {
  articles: Article[]
  toggleTheme: () => void
}

export type ArticleType = 'external' | 'internal'

const getTypes = (articles: Article[]) => {
  const types: string[] = ['All']
  articles.forEach((item: Article) => {
    !types.includes(item.type) && types.push(item.type)
  })
  return types
}

export default function Home(props: HomeProps) {
  const { toggleTheme } = props

  const [articles, setArticles] = useState<Article[]>(props.articles)
  const filters: string[] = getTypes(articles)
  const [filter, setFilter] = useState<string>('All')
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([])
  const [hasLoaded, setHasLoaded] = useState<boolean>(true)
  const { data, loading } = useLoadMoreAxios()

  const filterArticles = (articles: Article[], filter: string) => {
    return articles.filter(
      (article: { type: string }) => article.type === filter
    )
  }

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
    console.log(articles.length)
    if (filter === 'All') {
      setFilteredArticles(articles)
    } else {
      setFilteredArticles(filterArticles(articles, filter))
    }
    setHasLoaded(true)

    return () => {
      //
    }
  }, [filter, articles]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Wrapper
        onFilterClick={setFilter}
        filters={filters}
        activeFilter={filter}
        articles={filteredArticles}
        hasLoaded={hasLoaded}
        articleType={'external'}
        toggleTheme={toggleTheme}
      ></Wrapper>
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
