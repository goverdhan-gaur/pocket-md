
import { Article } from '@/Interfaces/article'
import { ApolloError, DocumentNode, useQuery } from '@apollo/client'
import axios from 'axios'
import { useScroll, } from 'framer-motion'
import _ from 'lodash'
import { useEffect, useState } from 'react'

interface LoadMoreProps {
    query: DocumentNode,
    useApollo?: boolean
}

export const useLoadMore = ({ query, useApollo }: LoadMoreProps) => {
    const { scrollYProgress } = useScroll()
    const [error, setError] = useState<ApolloError>()
    const [data, setData] = useState<Article[]>([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState<number>(1)
    const [load, setLoad] = useState<boolean>(false)

    const { fetchMore } = useQuery(query, {
        variables: { page: page },
        onError: (error) => setError(error),
        onCompleted: (data) => setData(data),
        skip: true
    })


    const getData = async () => {
        setLoading(true)
        if (useApollo) {
            fetchMore({ variables: { page: page } })
                .then((newData) => {
                    setData([...newData.data.retrievePageArticles])
                })
                .catch((error) => setError(error))
        } else {
            await axios
                .post('/api/graphql', {
                    page: page
                })
                .then((response) => {
                    const result = response
                    const articles = _.get(result, 'data.data.retrievePageArticles', [])
                    setData([...articles])
                })
                .catch(function (error) {
                    setError(error)
                })
        }
        setPage(page + 1)
        setLoad(false)
        setLoading(false)
    }

    const handleScroll = async () => {
        if (scrollYProgress.get() === 1) {
            setLoad(true)
        }
    }

    useEffect(() => {
        if (!loading && load) {
            getData();
        }
    }, [load])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [data]) // eslint-disable-line react-hooks/exhaustive-deps

    return { loading, error, data, fetchMore }
}
