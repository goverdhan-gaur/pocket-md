import { localClient as client } from '@/utils/apollo'
import { firstPageArticles } from '@/queries/firstPageArticles'
import { Wrapper } from '@/components/Wrapper/Wrapper'
import { Article } from '@/Interfaces/article'

export interface HomeProps {
  articles: Article[]
  page: string
  toggleTheme: () => void
}

export default function Home(props: HomeProps) {
  const { toggleTheme } = props

  return (
    <Wrapper
      articles={props.articles}
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
