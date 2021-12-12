import {
   SimpleGrid,
   Button,
   Flex,
   Container,
   Input,
   Center,
   Text,
   Box,
} from '@chakra-ui/react'
import Card from '../DeckBuilder/Card'
import AdminProductAddingModal from './AdminProductAddingModal'
import { useLogoutMutation, useProductsQuery } from '../../generated/graphql'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useApolloClient } from '@apollo/client'

const AdminProductsGrid = () => {
   const [phrase, setPhrase] = useState('')
   const [limit, setLimit] = useState(12)
   const [cursor, setCursor] = useState(0)
   const [logout, { loading: logoutFetching }] = useLogoutMutation()
   const apolloClient = useApolloClient()
   const router = useRouter()

   const { data, error, loading, fetchMore, variables, refetch } =
      useProductsQuery({
         variables: {
            limit,
            cursor,
            phrase,
         },
         notifyOnNetworkStatusChange: true,
      })

   return (
      <Container maxW="none" p={3}>
         <Box mx={20} fontSize="2xl">
            <Text>Add new products when needed.</Text>
            <Text>Edit or delete products using buttons.</Text>
         </Box>
         <Box>
            <Button
               onClick={async () => {
                  await logout()
                  await apolloClient.resetStore()
                  router.push('/')
               }}
            >
               logout
            </Button>
         </Box>
         <Center>
            <AdminProductAddingModal />
         </Center>

         <Center my={5}>
            <Flex>
               <Input
                  placeholder="Search for items"
                  minW="lg"
                  value={phrase}
                  mx={2}
                  onChange={(e) => {
                     setPhrase(e.target.value)
                  }}
               />
            </Flex>
            <Flex justifyContent="space-around" mx={3}>
               <Button
                  placeholder="filter"
                  variant="magic-navbar"
                  maxW="xs"
                  onClick={() => {
                     setCursor(0)
                     refetch()
                  }}
               >
                  Search
               </Button>
            </Flex>
         </Center>

         <SimpleGrid columns={4} spacing={2}>
            {data?.products.products.map((product) =>
               !product ? null : (
                  <Card key={product.id} product={product} view={true} />
               )
            )}
         </SimpleGrid>
         {data && data?.products.hasMore ? (
            <Flex>
               <Button
                  variant="magic-navbar"
                  onClick={() => {
                     setCursor(cursor + limit)
                     fetchMore({
                        variables: {
                           limit,
                           cursor:
                              data.products.products[
                                 data.products.products.length - 1
                              ].id,
                           phrase,
                        },
                     })
                  }}
                  isLoading={loading}
                  m="auto"
                  my={9}
               >
                  Load more products
               </Button>
            </Flex>
         ) : null}
      </Container>
   )
}

export default AdminProductsGrid
