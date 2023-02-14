import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { client, localClient } from '@/utils/apollo'

export default function App({ Component, pageProps }: AppProps) {
  const { page } = pageProps
  const apolloClient = page === 'local' ? localClient : client
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
