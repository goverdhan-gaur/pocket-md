import { HomePage } from '@/components/HomePage/HomePage'
import client from '@/utils/gql'

import { GET_ENTRIES } from '@/utils/queries'

type Entities = {}

export default function Home(props: Entities) {
  console.info(props)

  return <HomePage title={JSON.stringify(props)} />
}

export async function getServerSideProps(context: any) {
  const { data } = await client.query({
    query: GET_ENTRIES,
  })

  return {
    props: {
      entries: data.postCollection,
    }, // will be passed to the page component as props
  }
}
