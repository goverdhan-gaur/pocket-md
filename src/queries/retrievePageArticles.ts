import { gql } from '@apollo/client';

export const retrievePageArticles = gql`
  query Article($page: Int!) {
    retrievePageArticles(page: $page) {
      id
      author
      createdAt
      score
      updatedAt
      title
      text
      type
      url
    }
  }
`

