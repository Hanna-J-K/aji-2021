import { ApolloClient, InMemoryCache } from '@apollo/client'
import { NextPageContext } from 'next'
import { withApollo as createApolloClient } from 'next-apollo'
import { PaginatedProducts } from '../generated/graphql'
const createClient = (ctx: NextPageContext | undefined) =>
   new ApolloClient({
      uri: 'http://localhost:4000/graphql',
      credentials: 'include',
      headers: {
         cookie:
            (typeof window === 'undefined'
               ? ctx?.req?.headers.cookie
               : undefined) || '',
      },
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
