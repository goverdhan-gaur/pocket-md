
import { firstPageArticles, retrievePageArticles } from '@/queries/firstPageArticles';
import { client } from '@/utils/apollo';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function asynchandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const page = req.body.page;

    const data = await client.query({
      query: !page ? firstPageArticles : retrievePageArticles,
      variables: page ? { page: page } : {}
    })
    console.log(req.body)
    res.status(200).send(data)
  }
}
