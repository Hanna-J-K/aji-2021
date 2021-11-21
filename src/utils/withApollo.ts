import { ApolloClient, InMemoryCache } from '@apollo/client'
import { withApollo as createApolloClient } from 'next-apollo'
import { PaginatedProducts } from '../generated/graphql'
const createClient = () =>
   new ApolloClient({
      uri: 'http://localhost:4000/graphql',
      headers: {},
      cache: new InMemoryCache({
         typePolicies: {
            Query: {
               fields: {
                  products: {
                     keyArgs: [],
                     merge(
                        existing: PaginatedProducts | undefined,
                        incoming: PaginatedProducts
                     ): PaginatedProducts {
                        return {
                           ...incoming,
                           products: [
                              ...(existing?.products || []),
                              ...incoming.products,
                           ],
                        }
                     },
                  },
               },
            },
         },
      }),
   })

export const withApollo = createApolloClient(createClient)
