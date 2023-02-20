import { useEffect, useState, RefObject } from 'react';

type Params = {
    root?: HTMLElement | null;
    rootMargin?: string;
    threshold?: number | number[];
};

const useIntersectionObserver = (
    ref: RefObject<Element>,
    {
        root = null,
        rootMargin = '0px',
        threshold = 0,
    }: Params = {}
) => {
    const [isIntersecting, setIntersecting] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
            },
            {
                root,
                rootMargin,
                threshold,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, root, rootMargin, threshold]);

    return isIntersecting;
};

export default useIntersectionObserver;