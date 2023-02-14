import { gql } from '@apollo/client'
import client from '@/utils/apollo'
import { firstPageArticles } from '@/queries/firstPageArticles'
import { ArticleList } from '@/components/ArticleList/ArticleList'
import { ArticleFilter } from '@/components/ArticleFilter/ArticleFilter'
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

export interface HomeProps {
  articles: Article[]
}

const getTypes = (articles: any) => {
  const types: string[] = ['All']
  articles.forEach((_item: Article) => {
    !types.includes(_item.type) && types.push(_item.type)
  })
  return types
}

export default function Home(props: HomeProps) {
  const { articles } = props
  const filters: string[] = getTypes(articles)

  const [filter, setFilter] = useState<string>('All')
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([])

  useEffect(() => {
    let articlesFiltered: Article[] = []
    if (filter === 'All') {
      setFilteredArticles(articles)
    } else {
      articlesFiltered = articles.filter((article) => article.type === filter)
      console.log(articlesFiltered)
      setFilteredArticles(articlesFiltered)
    }

    return () => {
      //
    }
  }, [filter])

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
    query: gql`
      ${firstPageArticles}
    `,
  })

  return {
    props: {
      articles: data.firstPageArticles,
    },
  }
}
