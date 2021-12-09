import { Container, Button, Flex, Text, Heading, Box } from '@chakra-ui/react'
import React from 'react'
import { CartItemType } from '../../types/CartItemType'

interface CartItemProps {
   item: CartItemType
   addToCart: (clickedItem: CartItemType) => void
   removeFromCart: (id: number) => void
}

export const CartItem: React.FC<CartItemProps> = ({
   item,
   addToCart,
   removeFromCart,
}) => (
   <Container color="white">
      <Flex direction="column">
         <Heading>{item.name}</Heading>
         <div>
            <Box minH="100px" minW="240px">
               <img src={item.image} alt={''} />
            </Box>
            <Text fontSize="lg">Price: ${item.unitPrice}</Text>
            <Text fontSize="lg">
               Total for this item: $
               {(item.quantity * item.unitPrice).toFixed(2)}
            </Text>
         </div>
         <Flex mt={3}>
            <Text fontSize="lg" mr={3} mt={2}>
               Quantity:
            </Text>
            <Text fontSize="2xl" mr={3}>
               {item.quantity}
            </Text>
            <Button
               mr={2}
               mt={2}
               size="xs"
               variant="magic-navbar"
               onClick={() => removeFromCart(item.id)}
            >
               -
            </Button>

            <Button
               size="xs"
               mt={2}
               variant="magic-navbar"
               onClick={() => addToCart(item)}
            >
               +
            </Button>
         </Flex>
      </Flex>
   </Container>
)
