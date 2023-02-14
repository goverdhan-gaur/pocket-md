import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://graphql-api.herokuapp.com/graphql' }),
  cache: new InMemoryCache(),
})

export default client
