import { client } from '@/utils/apollo'
import { firstPageArticles } from '@/queries/firstPageArticles'
import { Wrapper } from '@/components/Wrapper/Wrapper'
import { Article } from '@/Interfaces/article'
import { FormModal } from '@/components/FormModal/FormModal'
import { useModalStore } from '@/store/modal'
import { PostModal } from '@/components/PostModal/PostModal'

import Head from 'next/head'
interface HomeProps {
  articles: Article[]
}

export default function Home(props: HomeProps) {
  const { isFormOpen, isListOpen } = useModalStore()

  return (
    <>
      <div>
        <Head>
          <title>News Blog</title>
        </Head>
      </div>
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
    },
  }
}
