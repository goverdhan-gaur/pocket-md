import { client } from '@/utils/apollo'
import { firstPageArticles } from '@/queries/firstPageArticles'
import { Wrapper } from '@/components/Wrapper/Wrapper'
import { Article } from '@/Interfaces/article'
import Head from 'next/head'
interface HomeProps {
  articles: Article[]
  toggleTheme: () => void
}

export default function Home(props: HomeProps) {
  const { toggleTheme } = props

  return (
    <>
      <div>
        <Head>
          <title>Pocket MD</title>
        </Head>
      </div>
      <Wrapper
        articles={props.articles}
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
