import { localClient as client } from '@/utils/apollo'
import { firstPageArticles } from '@/queries/firstPageArticles'
import { Wrapper } from '@/components/Wrapper/Wrapper'
import { Article } from '@/Interfaces/article'
import { useModalStore } from '@/store/modal'
import { FormModal } from '@/components/FormModal/FormModal'
import { PostModal } from '@/components/PostModal/PostModal'

export interface HomeProps {
  articles: Article[]
  page: string
}

export default function Home(props: HomeProps) {
  const { isFormOpen, isListOpen } = useModalStore()

  return (
    <>
      {isFormOpen && <FormModal />}
      {isListOpen && <PostModal />}
      <Wrapper
        isModalOpen={isListOpen || isFormOpen}
        articles={props.articles}
        articleType={'external'}
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
      page: 'local',
    },
  }
}
