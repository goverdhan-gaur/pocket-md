import { ApolloError } from '@apollo/client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import _ from 'lodash'
import { Article } from '@/Interfaces/article'


export const useLoadMoreAxios = () => {
    const [error, setError] = useState<ApolloError>()
    const [data, setData] = useState<Article[]>([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState<number>(1)

    const handleScroll = () => {
        const windowHeight = window.innerHeight
        const documentHeight = document.documentElement.scrollHeight - 1
        const scrollTop = document.documentElement.scrollTop

        if (windowHeight + scrollTop >= documentHeight && !loading) {
            window.removeEventListener('scroll', handleScroll)
            setLoading(true)
            axios
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
                }).finally(() => setLoading(false))

            setPage(page + 1)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [data, loading]) // eslint-disable-line react-hooks/exhaustive-deps

    return { loading, error, data, }
}
