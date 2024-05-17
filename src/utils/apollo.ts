import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const localClient = new ApolloClient({
  link: new HttpLink({ uri: process.env.NEXT_PUBLIC_APOLLO_LOCAL_URL }),
  headers: { 'Content-Type': 'application/JSON' },
  cache: new InMemoryCache(),
})

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_APOLLO_MAIN_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  }),
  cache: new InMemoryCache(),
})

export { client, localClient }
