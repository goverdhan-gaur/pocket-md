
import { useState, useEffect } from 'react'
import isUrl from 'is-url';
import { checkIfImageExists } from '@/utils/checkIfImageExists';
import { DUMMY_IMAGE_URL } from '@/data/DUMMY_DATA';

export function useImageUrls(url: string, imgUrl: string) {
    const [imageUrl, setImageUrl] = useState<string>(imgUrl);

    useEffect(() => {
        async function fetchImageUrls() {
            if (!isUrl(url)) {
                setImageUrl(DUMMY_IMAGE_URL)
                return;
            }
            try {
                const res = await fetch(`/api/getImage?url=${url}`);
                const data = await res.json();
                checkIfImageExists(data, (e: boolean) => {
                    if (e) {
                        setImageUrl(data);
                    } else {
                        setImageUrl(DUMMY_IMAGE_URL)
                    }
                })
            } catch (err) {
                console.error(err);
            }
        }
        if (!imageUrl) {
            fetchImageUrls();
        }
    }, [imageUrl, url]);

    return imageUrl;
}
