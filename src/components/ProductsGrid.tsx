import {
   SimpleGrid,
   Button,
   Flex,
   Container,
   Input,
   Select,
} from '@chakra-ui/react'
import Card from './DeckBuilder/Card'
import { useProductsQuery, useCategoryQuery } from '../generated/graphql'
import React, { useContext, useState } from 'react'
import CartContext from '../contexts/CartContext'
import { CartItemType } from '../types/CartItemType'

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

   const categoriesQueryResult = useCategoryQuery()
   if (!loading && !data) {
      return (
         <div>
            <div>TBD (query failed, no data fetched)</div>
            <div>{error?.message}</div>
         </div>
      )
   }

   return (
      <Container maxW="none">
         <Input
            placeholder="searchbar"
            value={phrase}
            onChange={(e) => {
               setPhrase(e.target.value)
            }}
         />
         <Button
            placeholder="filter"
            colorScheme="teal"
            variant="outline"
            onClick={() => {
               setCursor(0)
               refetch()
            }}
         />
         <Select placeholder="category">
            {categoriesQueryResult.data?.category.map((category) =>
               !category ? null : (
                  <option value={category.name}>{category.name}</option>
               )
            )}
         </Select>
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
                  colorScheme="teal"
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
                  i want more products
               </Button>
            </Flex>
         ) : null}
      </Container>
   )
}

export default ProductsGrid
