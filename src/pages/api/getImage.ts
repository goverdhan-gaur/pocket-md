
import type { NextApiRequest, NextApiResponse } from 'next';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import { DUMMY_IMAGE_URL } from '@/data/DUMMY_DATA';
import { getRandomUrl } from '@/utils/getRandomFromArray';

const filterURL = (arr: string[]) => {
    return arr.filter((item) => new RegExp('^https://+').test(item))
}

export default async function getImageUrls(
    { query }: NextApiRequest,
    res: NextApiResponse<string>
) {
    const url = query.url as string;
    try {
        const html = await fetch(url).then((res) => res.text());
        const $ = cheerio.load(html);

        // eslint-disable-next-line no-unused-vars
        const imageUrlsSrc: string[] = $('img').map((_, el) => $(el)?.attr('src'))?.get()
        // eslint-disable-next-line no-unused-vars
        const imageUrlsDataSrc: string[] = $('img').map((_, el) => $(el)?.attr('data-src'))?.get()

        const filteredSrc = filterURL(imageUrlsSrc);
        const filteredDataSrc = filterURL(imageUrlsDataSrc);

        const urls = [...filteredSrc, ...filteredDataSrc];

        if (urls.length) {
            res.status(200).json(getRandomUrl(urls));
        } else {
            res.status(200).json(getRandomUrl(DUMMY_IMAGE_URL));
        }

    } catch (err) {
        res.status(500).send('Server Error');
    }
}