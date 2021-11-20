import ProductsGrid from '../components/ProductsGrid'
import React from 'react'
<<<<<<< HEAD
import Navbar from '../components/Navbar'
=======
import { Cart } from '../components/Cart/Cart'
import { useProductsQuery } from '../generated/graphql'
import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import { withApollo } from '../utils/withApollo'
>>>>>>> 6dd82e181238c30425e9497ea4dbca63986943d0

const Index = () => {
   const { data, error, loading } = useProductsQuery()
   if (!loading && !data) {
      return (
         <div>
            <div>TBD (query failed, no data fetched)</div>
            <div>{error?.message}</div>
         </div>
      )
   }

   return (
      <>
<<<<<<< HEAD
         <Navbar />
=======
         <Stack direction="row" wrap="wrap" spacing={8}>
            {data?.products.map((p) =>
               !p ? null : (
                  <Flex direction="row" key={p.id} p={3} shadow="md" borderWidth="1px">
                     <Text fontSize="small">product: {p.name}</Text>
                  </Flex>
               )
            )}
         </Stack>
         <Cart />
>>>>>>> 6dd82e181238c30425e9497ea4dbca63986943d0
         <ProductsGrid />
      </>
   )
}

export default withApollo({ ssr: false })(Index)
