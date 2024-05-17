import { useState, useEffect, useCallback } from 'react';
import isUrl from 'is-url';
import { checkIfImageExists } from '@/utils/checkIfImageExists';
import { DUMMY_IMAGE_URL } from '@/data/DUMMY_DATA';
import { getRandomUrl } from '@/utils/getRandomFromArray';

export function useImageUrls(url: string) {
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

    const fetchImageUrls = useCallback(async () => {

        if (!isUrl(url)) {
            setImageUrl(getRandomUrl(DUMMY_IMAGE_URL));
            return;
        }

        try {
            // console.log(encodeURI(url))
            const data = await fetch(`/api/getImage?url=${encodeURI(url)}`)
            .then((res) => {
                return res.ok ? res.json() : getRandomUrl(DUMMY_IMAGE_URL)
            });
            if (isUrl(data)) {

                checkIfImageExists(data, (exists: boolean) => {
                    setImageUrl(exists ? data : getRandomUrl(DUMMY_IMAGE_URL));
                });
            }
            
        } catch (err) {
            console.log(err)
        }

    }, [url]);

    useEffect(() => {
        if (!imageUrl) {
            fetchImageUrls();
        }
    }, [fetchImageUrls, imageUrl]);

    return imageUrl;
}