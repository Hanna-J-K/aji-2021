import { ApolloClient, InMemoryCache } from '@apollo/client'
import { withApollo as createApolloClient } from 'next-apollo'
const createClient = () =>
   new ApolloClient({
      uri: 'http://localhost:4000/graphql',
      headers: {},
      cache: new InMemoryCache({}),
   })

export const withApollo = createApolloClient(createClient)
