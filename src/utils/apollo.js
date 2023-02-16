import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const localClient = new ApolloClient({
  link: new HttpLink({ uri: 'https://graphql-api.herokuapp.com/graphql' }),
  headers: { 'Content-Type': 'application/JSON' },
  cache: new InMemoryCache(),
})

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://powerful-beyond-01021.herokuapp.com/graphql',
    headers: {
      'Content-Type': 'application/json',
    },
  }),
  cache: new InMemoryCache(),
})

export { client, localClient }
