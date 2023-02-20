
import { firstPageArticles } from '@/queries/firstPageArticles';
import { retrievePageArticles } from '@/queries/retrievePageArticles';
import { client } from '@/utils/apollo';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function asynchandler({ body, method }: NextApiRequest, res: NextApiResponse) {
  if (method === 'POST') {
    const page = body?.page;

    const data = await client.query({
      query: !page ? firstPageArticles : retrievePageArticles,
      variables: page ? { page: page } : {}
    })

    res.status(200).send(data)
  }
}
