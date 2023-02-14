import { gql } from '@apollo/client'
import client from '@/utils/apollo'
import { firstPageArticles } from '@/queries/firstPageArticles'
import { ArticleList } from '@/components/ArticleList/ArticleList'

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

export default function Home(props: HomeProps) {
  const { articles } = props
  console.log(articles)
  return (
    <>
      <ArticleList articles={articles} />
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
