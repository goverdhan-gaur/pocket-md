import { gql } from '@apollo/client'

export const firstPageArticles = gql`
  query Article {
    firstPageArticles {
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
