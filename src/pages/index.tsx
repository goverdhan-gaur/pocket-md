import { client } from '@/utils/apollo'
import { firstPageArticles } from '@/queries/firstPageArticles'
import { Wrapper } from '@/components/Wrapper/Wrapper'
import { Article } from '@/Interfaces/article'
import { FormModal } from '@/components/FormModal/FormModal'
import { useModalStore } from '@/store/modal'

interface HomeProps {
  articles: Article[]
}

export default function Home(props: HomeProps) {
  const { isOpen } = useModalStore()
  return (
    <>
      {isOpen && <FormModal />}
      <Wrapper articles={props.articles} articleType={'external'}></Wrapper>
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
