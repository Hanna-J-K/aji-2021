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
   Center,
} from '@chakra-ui/react'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { EditIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { Order } from '../../types/OrderType'
import { useState } from 'react'
import { useUpdateOrderMutation } from '../../generated/graphql'
import { Form, Formik } from 'formik'
import { toErrorMap } from '../../utils/toErrorMap'

function OrderEditingModal(props: Order) {
   const { id, orderPlaceDate, username, email, phone, status } = props
   const { isOpen, onOpen, onClose } = useDisclosure()
   const [orderStatus, setOrderStatus] = useState(status)
   const statuses = ['not confirmed', 'confirmed', 'cancelled', 'completed']
   const [updateOrder] = useUpdateOrderMutation()
   return (
      <>
         <IconButton
            onClick={onOpen}
            variant="magic"
            m={5}
            color="blue.800"
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
                        color="white"
                     >
                        <Box> Order placement date: {orderPlaceDate} </Box>
                        <Box> User: {username} </Box>
                        <Box> User e-mail: {email} </Box>
                        <Box> User contact phone: {phone} </Box>
                        <Box fontWeight="semibold">
                           <Text> Order status: {status} </Text>
                           <Formik
                              validateOnBlur={false}
                              validateOnChange={false}
                              initialValues={{
                                 statusToChange: ``,
                              }}
                              onSubmit={async (values, { setErrors }) => {
                                 const response = await updateOrder({
                                    variables: {
                                       status: `${
                                          statuses.indexOf(orderStatus) + 1
                                       }`,
                                       updateOrderId: id,
                                    },
                                    update: (cache) => {
                                       cache.evict({
                                          fieldName: 'orders:{}',
                                       })
                                    },
                                 })
                                 if (response.data?.updateOrder.errors) {
                                    setErrors(
                                       toErrorMap(
                                          response.data.updateOrder.errors
                                       )
                                    )
                                 } else {
                                    //TODO: RESPONSE POWIODLO SIE UPDATE ORDEERU
                                    // ZAMKNIJ MODAL
                                 }
                              }}
                           >
                              {({ isSubmitting }) => (
                                 <Form>
                                    <Menu>
                                       <MenuButton
                                          as={Button}
                                          variant="magic"
                                          rightIcon={<ChevronDownIcon />}
                                       >
                                          {orderStatus}
                                       </MenuButton>
                                       <MenuList
                                          bg="blue.500"
                                          color="black"
                                          borderRadius="xl"
                                       >
                                          {statuses.map((stat) =>
                                             !stat ? null : (
                                                <MenuItem
                                                   key={stat}
                                                   _hover={{
                                                      backgroundColor:
                                                         'pink.500',
                                                      color: 'white',
                                                   }}
                                                   onClick={() =>
                                                      setOrderStatus(stat)
                                                   }
                                                >
                                                   {stat}
                                                </MenuItem>
                                             )
                                          )}
                                       </MenuList>
                                    </Menu>
                                    <Center>
                                       <Button
                                          mt={4}
                                          variant="magic"
                                          isLoading={isSubmitting}
                                          type="submit"
                                       >
                                          Update order
                                       </Button>
                                    </Center>
                                 </Form>
                              )}
                           </Formik>
                        </Box>
                     </Box>
                  </ModalBody>

                  <ModalFooter>
                     <Box
                        borderWidth="5px"
                        borderColor="pink.800"
                        borderRadius="xl"
                        bg="pink.300"
                     >
                        <Button
                           onClick={onClose}
                           variant="magic"
                           bg="pink.200"
                           color="black"
                        >
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
