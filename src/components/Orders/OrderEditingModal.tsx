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
   Text,
   IconButton,
} from '@chakra-ui/react'

import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

import { EditIcon, ChevronDownIcon } from '@chakra-ui/icons'

import { Order } from '../../types/OrderType'
import { useState } from 'react'

function OrderEditingModal(props: Order) {
   const { id, orderPlaceDate, username, email, phone, status } = props
   const { isOpen, onOpen, onClose } = useDisclosure()
   const { orderStatus, setOrderStatus } = useState({ status })

   const changeOrderStatus = () => {
      setOrderStatus('whatever')
   }
   return (
      <>
         <IconButton
            onClick={onOpen}
            variant="magic"
            m={5}
            color="yellow.800"
            aria-label="edit"
            icon={<EditIcon />}
         />

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
               bgGradient="linear(to-tr, pink.800, orange.900, blue.800)"
            >
               <Flex direction="column">
                  <ModalHeader
                     color="white"
                     borderBottomRadius="2xl"
                     boxShadow="inset 0 0 3px 1px #000000"
                  >
                     {id}
                  </ModalHeader>
                  <ModalCloseButton variant="magic" color="white" />
                  <ModalBody>
                     <Box
                        borderRadius="lg"
                        boxShadow="0 1px 3px 0 #ffffff"
                        p={5}
                     >
                        <Box color="white">
                           {' '}
                           Order placement date: {orderPlaceDate}{' '}
                        </Box>
                        <Box color="white"> User: {username} </Box>
                        <Box color="white"> User e-mail: {email} </Box>
                        <Box color="white"> User contact phone: {phone} </Box>
                        <Box color="white" fontWeight="semibold">
                           <Text> Order status: {status} </Text>
                           <Menu>
                              <MenuButton
                                 changeOrderStatus={changeOrderStatus}
                                 as={Button}
                                 variant="magic"
                                 rightIcon={<ChevronDownIcon />}
                              >
                                 Edit status
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
                                    Not confirmed
                                 </MenuItem>
                                 <MenuItem
                                    _hover={{
                                       backgroundColor: 'pink.500',
                                       color: 'white',
                                    }}
                                 >
                                    Confirmed
                                 </MenuItem>
                                 <MenuItem
                                    _hover={{
                                       backgroundColor: 'pink.500',
                                       color: 'white',
                                    }}
                                 >
                                    Completed
                                 </MenuItem>
                                 <MenuItem
                                    _hover={{
                                       backgroundColor: 'pink.500',
                                       color: 'white',
                                    }}
                                 >
                                    Cancelled
                                 </MenuItem>
                              </MenuList>
                           </Menu>
                        </Box>
                     </Box>
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
                           Save
                        </Button>
                     </Box>
                     <Box
                        borderWidth="5px"
                        borderColor="pink.800"
                        borderRadius="xl"
                        bg="pink.300"
                     >
                        <Button variant="magic" bg="pink.200" color="black">
                           Cancel
                        </Button>
                     </Box>
                  </ModalFooter>
               </Flex>
            </ModalContent>
         </Modal>
      </>
   )
}

export default OrderEditingModal
