// 1
import gql from 'graphql-tag'

// 2
// language=GraphQL
export const ALL_ARTICLES_QUERY = gql`
{
  articles(orderBy: date_ASC) {
    id
    title
    date
    contents
    thumbnail {
      url
    }
  }
}
`
