import { Box, Flex, Heading } from '@chakra-ui/layout'
import React from 'react'
import { Cart } from '../components/Cart/Cart'
import LoginModal from '../LoginModal'

export const Navbar = () => {
   return (
      <Flex
         mb={10}
         bg="gray.700"
         w="100%"
         h="10vh"
         borderRadius="lg"
         borderTopRadius="none"
         justify="space-between"
         boxShadow="0 5px 5px 3px black"
      >
         <Box m={5} ml={10} color="white">
            <Heading>Ollie-wand-er</Heading>
         </Box>

         <Flex>
            <Cart />
            <LoginModal />
         </Flex>
      </Flex>
   )
}
