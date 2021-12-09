import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
   Button,
   useDisclosure,
   Box,
   Flex,
   Center,
   Stack,
   Input,
} from '@chakra-ui/react'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

import { EditIcon, ChevronDownIcon } from '@chakra-ui/icons'

import Link from 'next/link'

export const LoginModal = () => {
   const { isOpen, onOpen, onClose } = useDisclosure()

   const bgImg =
      "url('https://images.unsplash.com/photo-1530362502708-d02c8f093039?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')"

   return (
      <>
         <Button onClick={onOpen} variant="magic-navbar" m={5} mr={10}>
            Add new product
         </Button>

         <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            motionPreset="slideInBottom"
         >
            <ModalOverlay />
            <ModalContent
               borderWidth="10px"
               borderColor="#121212"
               boxShadow="inset 0 0 10px 5px black"
               borderRadius="xl"
               bg="rgba(42, 67, 101, 0.98)"
               backgroundImage={bgImg}
            >
               <Flex direction="column">
                  <ModalHeader
                     color="white"
                     borderBottomRadius="2xl"
                     boxShadow="inset 0 0 3px 1px #000000"
                  >
                     Add new product to stock
                  </ModalHeader>
                  <ModalCloseButton variant="magic" color="white" />
                  <ModalBody>
                     <Center my={5}>
                        <Stack spacing={3}>
                           <Input placeholder="Name" size="lg" />
                           <Input placeholder="Price" size="lg" />
                           <Input placeholder="Weight" size="lg" />
                           <Input placeholder="Image URL" size="lg" />
                           <Menu>
                              <MenuButton
                                 as={Button}
                                 variant="magic"
                                 rightIcon={<ChevronDownIcon />}
                              >
                                 Category
                              </MenuButton>
                              <MenuList
                                 bg="blue.500"
                                 color="black"
                                 borderRadius="xl"
                              >
                                 <MenuItem
                                    _hover={{
                                       backgroundColor: 'pink.500',
                                       color: 'white',
                                    }}
                                 >
                                    Ingredients
                                 </MenuItem>
                                 <MenuItem
                                    _hover={{
                                       backgroundColor: 'pink.500',
                                       color: 'white',
                                    }}
                                 >
                                    Equipment
                                 </MenuItem>
                                 <MenuItem
                                    _hover={{
                                       backgroundColor: 'pink.500',
                                       color: 'white',
                                    }}
                                 >
                                    Clothing
                                 </MenuItem>
                                 <MenuItem
                                    _hover={{
                                       backgroundColor: 'pink.500',
                                       color: 'white',
                                    }}
                                 >
                                    Materials
                                 </MenuItem>
                                 <MenuItem
                                    _hover={{
                                       backgroundColor: 'pink.500',
                                       color: 'white',
                                    }}
                                 >
                                    Collectibles
                                 </MenuItem>
                                 <MenuItem
                                    _hover={{
                                       backgroundColor: 'pink.500',
                                       color: 'white',
                                    }}
                                 >
                                    Perishable
                                 </MenuItem>
                                 <MenuItem
                                    _hover={{
                                       backgroundColor: 'pink.500',
                                       color: 'white',
                                    }}
                                 >
                                    Non-perishable
                                 </MenuItem>
                              </MenuList>
                           </Menu>
                        </Stack>
                     </Center>
                  </ModalBody>

                  <ModalFooter>
                     <Box
                        borderWidth="5px"
                        borderColor="pink.800"
                        borderRadius="xl"
                        bg="pink.300"
                        mr={3}
                     >
                        <Button onClick={onClose} variant="magic" bg="pink.400">
                           Close
                        </Button>
                     </Box>
                     <Box
                        borderWidth="5px"
                        borderColor="pink.800"
                        borderRadius="xl"
                        bg="pink.300"
                     >
                        <Link href="/Orders/OrdersTable">
                           <Button variant="magic" bg="pink.300">
                              <a>Add</a>
                           </Button>
                        </Link>
                     </Box>
                  </ModalFooter>
               </Flex>
            </ModalContent>
         </Modal>
      </>
   )
}

export default LoginModal
