import { Box, Image, Center, Text, Flex, Button } from '@chakra-ui/react'
import React from 'react'
import { CartItemType } from '../../types/CartItemType'
import { Product } from '../../types/ProductType'
import ProductModal from './ProductModal'
import { AdminProductEditingModal } from '../AdminView/AdminProductEditingModal'

interface CardProps {
   product: Product
   addToCart?: (clickedItem: CartItemType) => void
   view: Boolean
}

export const Card: React.FC<CardProps> = ({ product, addToCart, view }) => {
   const { name, unitPrice, unitWeight, categories } = product
   const backgroundImage = {
      imageUrl:
         'https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80',
      imageAlt: 'Kill me plz',
   }

   const productImage = {
      imageUrl: 'https://via.placeholder.com/380x200',
      imageAlt: 'Kill this love',
   }

   let buttons = (
      <>
         <Center mt={6}>
            <ProductModal product={product} />
         </Center>
         <Center>
            <Box
               borderWidth="5px"
               borderColor="pink.800"
               borderRadius="xl"
               bg="pink.300"
               mt={2}
            >
               <Button
                  onClick={() => {
                     addToCart!({
                        id: product.id,
                        name: product.name,
                        unitPrice: product.unitPrice,
                        quantity: 1,
                        image: 'https://via.placeholder.com/240x100',
                     })
                  }}
                  variant="magic"
               >
                  Add to cart
               </Button>
            </Box>
         </Center>
      </>
   )

   if (view) {
      buttons = (
         <>
            {' '}
            <Center mt={6}>
               <AdminProductEditingModal product={product} />
            </Center>
         </>
      )
   }

   return (
      <Box
         borderWidth="12px"
         borderRadius="xl"
         borderColor="gray.800"
         maxW={420}
         maxH={608}
         overflow="hidden"
         backgroundImage={backgroundImage.imageUrl}
      >
         <Flex direction="column" justify="center" align="center">
            <Box
               mt={2}
               maxH={100}
               minH={35}
               minW={390}
               maxW={390}
               borderRadius="2xl"
               bg="pink.300"
               borderWidth="3px"
               borderColor="pink.800"
            >
               <Box boxShadow="inset 0 5px 1px black" borderRadius="xl">
                  <Text textAlign="left" fontWeight="600" padding="2">
                     {name}
                  </Text>
               </Box>
            </Box>

            <Center>
               <Box
                  maxH="200px"
                  maxW="380px"
                  borderWidth="3px"
                  borderColor="pink.800"
                  borderBottom="none"
                  borderTopRadius="sm"
                  borderTopWidth="5px"
                  mt={-1}
               >
                  <Image
                     src={productImage.imageUrl}
                     alt={productImage.imageAlt}
                  />
               </Box>
            </Center>

            <Flex
               justify="space-between"
               maxH={100}
               minH={35}
               minW={390}
               maxW={390}
               borderRadius="3xl"
               bg="pink.300"
               borderWidth="7px"
               borderColor="pink.800"
               borderBottomRadius="3xl"
               mb={-1}
               mt={-3}
            >
               <Flex
                  justify="space-between"
                  grow={2}
                  boxShadow="0 7px 5px 2px #281207"
                  borderRadius="2xl"
               >
                  <Text textAlign="left" padding="2">
                     Price: {unitPrice}
                  </Text>

                  <Text textAlign="left" padding="2">
                     Weight: {unitWeight}
                  </Text>
               </Flex>
            </Flex>

            <Center>
               <Box
                  minH={275}
                  w="380px"
                  borderWidth="4px"
                  borderRadius="lg"
                  borderColor="pink.800"
                  bg="rgba(42, 67, 101, 0.5)"
                  marginBottom="2"
                  borderTopColor="#281207"
                  borderTopWidth="6px"
                  mt={-1}
                  pt={1}
                  boxShadow="inset -2px -2px 7px 2px #281207"
               >
                  <Text
                     fontSize="2em"
                     letterSpacing="wide"
                     fontWeight="semibold"
                     textAlign="center"
                  >
                     {categories.map((category) => category.name)}
                  </Text>

                  {buttons}
               </Box>
            </Center>
         </Flex>
      </Box>
   )
}

export default Card
