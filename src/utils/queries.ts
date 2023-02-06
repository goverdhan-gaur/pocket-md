import { gql } from 'apollo-boost'

export const GET_ENTRIES = gql`
  query postCollectionQuery {
    postCollection {
      items {
        sys {
          id
        }
        image {
          size
          url
          description
        }
        title
        description

        content {
          __typename
          json
        }
        date
        # add the fields you want to query
      }
    }
  }
`
