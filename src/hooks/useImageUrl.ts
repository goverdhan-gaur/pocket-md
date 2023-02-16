/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import isUrl from 'is-url';
function checkIfImageExists(url: string, callback: any) {
    const img = new Image();
    img.src = url;

    if (img.complete) {
        callback(true);
    } else {
        img.onload = () => {
            callback(true);
        };

        img.onerror = () => {
            callback(false);
        };
    }
}
export function useImageUrls(url: string, imgUrl: string) {
    const [imageUrl, setImageUrl] = useState<string>(imgUrl);
    const DUMMY_IMAGE_URL = 'https://images.unsplash.com/photo-1676394876797-7d9a27721f18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    useEffect(() => {

        async function fetchImageUrls() {
            if (!isUrl(url)) {
                setImageUrl(DUMMY_IMAGE_URL)
                return;
            }
            try {
                const res = await fetch(`/api/getImage?url=${url}`);
                const data = await res.json();
                if (isUrl(data)) {
                    checkIfImageExists(data, (e: any) => {
                        if (e) {
                            setImageUrl(data);
                        } else {
                            setImageUrl(DUMMY_IMAGE_URL)
                        }
                    })
                } else { setImageUrl(DUMMY_IMAGE_URL) }

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
