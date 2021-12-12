import { Box, Flex, Heading } from '@chakra-ui/layout'
import React from 'react'
import { Cart } from '../components/Cart/Cart'
import LoginModal from './LoginModal'
import { Button } from '@chakra-ui/react'
import { useApolloClient } from '@apollo/client'
import { useRouter } from 'next/router'
import { useLogoutMutation } from '../generated/graphql'

interface Title {
   title: String
   buttons: Boolean
}
export const Navbar = ({ title, buttons }: Title) => {
   const [logout, { loading: logoutFetching }] = useLogoutMutation()
   const apolloClient = useApolloClient()
   const router = useRouter()

   let navbarButtons

   if (buttons) {
      navbarButtons = (
         <>
            <Flex>
               <Cart />
               <LoginModal />
            </Flex>
         </>
      )
   } else {
      navbarButtons = (
         <>
            {' '}
            <Button
               onClick={async () => {
                  await logout()
                  await apolloClient.resetStore()
                  router.push('/')
               }}
               variant="magic-navbar"
               mr={10}
               mt={6}
            >
               Logout
            </Button>
         </>
      )
   }
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
            <Heading>{title}</Heading>
         </Box>
         {navbarButtons}
      </Flex>
   )
}
