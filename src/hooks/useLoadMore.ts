import { Article } from '@/pages'
import { ApolloError, DocumentNode, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

interface LoadMoreProps {
    query: DocumentNode
}

export const useLoadMore = ({ query }: LoadMoreProps) => {
    const [error, setError] = useState<ApolloError>()
    const [data, setData] = useState<Article[]>([])
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const [page, setPage] = useState<number>(1)

    const { fetchMore } = useQuery(query, {
        variables: { page: page },
        onError: (error) => setError(error),
        onCompleted: (data) => setData(data),
        // To stop fetching data on mount
        skip: true,
    })

    const handleScroll = () => {
        const windowHeight = window.innerHeight
        const documentHeight = document.documentElement.scrollHeight - 1
        const scrollTop = document.documentElement.scrollTop
        if (windowHeight + scrollTop >= documentHeight && hasMore && !loading) {
            setLoading(true)
            fetchMore({ variables: { page: page } })
                .then((newData) => {
                    setData([...newData.data.retrievePageArticles])
                    setHasMore(newData.data.retrievePageArticles.length > 0)
                })
                .catch((error) => setError(error))
                .finally(() => setLoading(false))
            setPage(page + 1)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [data, hasMore, loading]) // eslint-disable-line react-hooks/exhaustive-deps

    return { loading, error, data, hasMore, fetchMore }
}
