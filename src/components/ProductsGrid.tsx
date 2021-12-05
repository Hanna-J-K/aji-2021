import {
   SimpleGrid,
   Button,
   Flex,
   Container,
   Input,
   Center,
} from '@chakra-ui/react'
import Card from './DeckBuilder/Card'
import { useProductsQuery } from '../generated/graphql'
import React, { useContext, useState } from 'react'
import CartContext from '../contexts/CartContext'
import { CartItemType } from '../types/CartItemType'
import { OrdersTable } from './Orders/OrdersTable'

const ProductsGrid = () => {
   const [_, setCartItems] = useContext(CartContext)
   const [phrase, setPhrase] = useState('')
   const [limit, setLimit] = useState(12)
   const [cursor, setCursor] = useState(0)
   const handleAddToCart = (clickedItem: CartItemType) => {
      setCartItems((cart) => {
         const isItemInCart = cart.find((item) => item.id === clickedItem.id)

         if (isItemInCart) {
            return cart.map((item) =>
               item.id === clickedItem.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
            )
         }
         return [...cart, { ...clickedItem, amount: 1 }]
      })
   }

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

         <OrdersTable />

         <SimpleGrid columns={4} spacing={2}>
            {data?.products.products.map((product) =>
               !product ? null : (
                  <Card
                     key={product.id}
                     product={product}
                     addToCart={handleAddToCart}
                  />
               )
            )}
         </SimpleGrid>
         {data && data?.products.hasMore ? (
            <Flex>
               <Button
                  variant="magic-navbar"
                  onClick={() => {
                     setCursor(cursor + 12)
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

export default ProductsGrid
