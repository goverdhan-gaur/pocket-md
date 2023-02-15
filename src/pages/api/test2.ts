/* eslint-disable no-unused-vars */
import type { NextApiRequest, NextApiResponse } from 'next';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import isUrl from 'is-url';

const filterURL =
    (arr: string[]) => {
        const regex = new RegExp("^(?:http(s)?:\\/\\/)([\\w.-])+(?:[\\w\\.-]+)+([\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.])+$");
        return arr.filter((src: string) => regex.test(src))
    }
let a = 0;
export default async function getImageUrls(
    req: NextApiRequest,
    res: NextApiResponse<string>
) {
    const url = req.query.url as string;
    console.log(a++)
    const DUMMY_IMAGE_URL = 'https://images.unsplash.com/photo-1676127351321-35b1accd3d9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

    try {
        const html = await fetch(url).then((res) => res.text());
        const $ = cheerio.load(html);
        const imageUrls = $('img').map((_, el) => $(el).attr('src')).get()
        const imageUrlsDataSRC = $('img').map((_, el) => $(el).attr('data-src')).get()
        const filteredSrc = filterURL(imageUrls)
        const filteredDataSrc = filterURL(imageUrlsDataSRC)


        if (filteredDataSrc.length > 0) {
            res.status(200).json(imageUrlsDataSRC[0]);
        } else if (filteredSrc.length > 0) {
            if (isUrl(filteredSrc[0])) {
                res.status(200).json(filteredSrc[0]);
            } else {
                res.status(200).json(DUMMY_IMAGE_URL);
            };
        } else {
            res.status(200).json(DUMMY_IMAGE_URL);
        }

    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}