import React, { useState } from 'react'
import {
   Drawer,
   DrawerBody,
   DrawerFooter,
   DrawerHeader,
   DrawerOverlay,
   DrawerContent,
   DrawerCloseButton,
   Button,
   IconButton,
   useDisclosure,
   Icon,
   Text,
   Badge,
   Flex,
   Heading,
} from '@chakra-ui/react'
import { CartItemType } from '../../types/CartItemType'
import { CartItem } from './CartItem'
import { BiCartAlt } from '@react-icons/all-files/bi/BiCartAlt'

interface CartProps {}

export const Cart: React.FC<CartProps> = () => {
   const [cartItems, setCartItems] = useState([] as CartItemType[])
   const getTotalItems = (items: CartItemType[]) =>
      items.reduce(
         (accumulateTotal: number, item) => accumulateTotal + item.quantity,
         0
      )

   const handleAddToCart = (clickedItem: CartItemType) => {
      setCartItems((cart) => {
         const isItemInCart = cart.find((item) => item.id === clickedItem.id)

         if (isItemInCart) {
            return cart.map((item) =>
               item.id === clickedItem.id
                  ? { ...item, amount: item.quantity + 1 }
                  : item
            )
         }
         return [...cart, { ...clickedItem, amount: 1 }]
      })
   }

   const handleRemoveFromCart = (id: number) => {
      setCartItems((cart) =>
         cart.reduce((ack, item) => {
            if (item.id === id) {
               if (item.quantity === 1) return ack
               return [...ack, { ...item, amount: item.quantity - 1 }]
            } else {
               return [...ack, item]
            }
         }, [] as CartItemType[])
      )
   }
   const shopBtnRef = React.useRef()
   const { isOpen, onOpen, onClose } = useDisclosure()
   const calculateTotal = (items: CartItemType[]) => {
      items.reduce(
         (accumulateTotal: number, item: CartItemType) =>
            accumulateTotal + item.quantity * item.unitPrice,
         0
      )
   }
   return (
      <>
         <Flex>
            <IconButton
               ref={shopBtnRef.current}
               aria-label="show cart"
               icon={<Icon as={BiCartAlt} onClick={onOpen} />}
            ></IconButton>
            <Badge variant="solid" colorScheme="green">
               {getTotalItems(cartItems)}
            </Badge>
         </Flex>

         <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={shopBtnRef.current}
         >
            <DrawerOverlay />
            <DrawerContent>
               <DrawerCloseButton color="red" />
               <DrawerHeader color="white">Shopping Cart</DrawerHeader>
               <DrawerBody>
                  {cartItems.length === 0 ? (
                     <Text textAlign="center" fontSize="24" fontWeight="bolder">
                        No items in cart
                     </Text>
                  ) : null}
                  {cartItems.map((item) => (
                     <CartItem
                        key={item.id}
                        item={item}
                        addToCart={handleAddToCart}
                        removeFromCart={handleRemoveFromCart}
                     />
                  ))}
                  {cartItems.length === 0 ? null : (
                     <Heading mt="3" as="h2" size="md">
                        Total: ${calculateTotal(cartItems)}
                     </Heading>
                  )}
               </DrawerBody>

               <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                     Checkout
                  </Button>
               </DrawerFooter>
            </DrawerContent>
         </Drawer>
      </>
   )
}
