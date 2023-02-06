import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'

const client = new ApolloClient({
  link: new HttpLink({
    uri: `https://graphql.contentful.com/content/v1/spaces/h94z2ctd658u`,
    headers: {
      authorization: `Bearer vmo29hEoUf1fVgXE4rGBAK8x0YJU3kG-g1RBzrVYDEU`,
    },
  }),
  cache: new InMemoryCache(),
})

export default client
