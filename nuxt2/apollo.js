import { BatchHttpLink } from '@apollo/client/link/batch-http'

export default (context) => {
  const link = new BatchHttpLink({
    uri: 'http://localhost:4000/graphql'
  })
  return {
    link,
    httpEndpoint: 'http://localhost:4000/graphql',
  }
}