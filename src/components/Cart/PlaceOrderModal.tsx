import {
   Button,
   Modal,
   ModalBody,
   ModalCloseButton,
   ModalContent,
   ModalFooter,
   ModalHeader,
   ModalOverlay,
   useDisclosure,
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import React from 'react'
import { useCreateOrderMutation } from '../../generated/graphql'
import { CartItemType } from '../../types/CartItemType'
import { OrderedProduct } from '../../types/OrderType'
import {
   validateEmail,
   validatePhone,
   validateUsername,
} from '../../utils/orderInputValidation'
import { InputField } from './InputField'

interface PlaceOrderModalProps {
   orderedProducts: CartItemType[]
}

export const PlaceOrderModal: React.FC<PlaceOrderModalProps> = ({
   orderedProducts,
}) => {
   const [createOrderMutation] = useCreateOrderMutation()
   const { isOpen, onOpen, onClose } = useDisclosure()
   const initialRef = React.useRef()

   const calculateCart = (orderedProducts: CartItemType[]) => {
      let productsToOrder: OrderedProduct[] = []
      orderedProducts.map((product) => {
         productsToOrder.push({
            product_id: product.id,
            quantity: product.quantity,
         })
      })
      return productsToOrder
   }

   return (
      <>
         <Button variant="magic" mr={3} onClick={onOpen}>
            Checkout
         </Button>
         <Modal
            initialFocusRef={initialRef.current}
            isOpen={isOpen}
            onClose={onClose}
         >
            <ModalOverlay />
            <ModalContent>
               <ModalHeader bg="gray.800">
                  Provide your contact information
               </ModalHeader>
               <ModalCloseButton />
               <ModalBody pb={6} bg="gray.800">
                  <Formik
                     initialValues={{ username: '', email: '', phone: '' }}
                     validateOnChange={false}
                     validateOnBlur={false}
                     validate={(values) => {
                        const errors = {} as typeof values
                        errors.username = validateUsername(values.username)
                        errors.email = validateEmail(values.email)
                        errors.phone = validatePhone(values.phone)
                        if (
                           errors.email.length > 0 ||
                           errors.phone.length > 0 ||
                           errors.username.length > 0
                        ) {
                           return errors
                        }
                        return undefined
                     }}
                     onSubmit={async (values) => {
                        const products = calculateCart(orderedProducts)
                        const { errors } = await createOrderMutation({
                           variables: {
                              input: { ...values, orderedProducts: products },
                           },
                           update: (cache) => {
                              cache.evict({
                                 fieldName: 'orders:{}',
                              })
                           },
                        })
                        if (errors) {
                           console.log('zle')
                        } else {
                           console.log('dobrze')
                        }
                     }}
                  >
                     {({ isSubmitting }) => (
                        <Form>
                           <InputField
                              name="username"
                              placeholder=""
                              label="Username"
                           />
                           <InputField
                              name="email"
                              placeholder=""
                              label="Email"
                           />
                           <InputField
                              name="phone"
                              placeholder=""
                              label="Phone number"
                           />
                           <Button
                              mt={4}
                              variant="magic"
                              isLoading={isSubmitting}
                              type="submit"
                           >
                              Place order
                           </Button>
                        </Form>
                     )}
                  </Formik>
               </ModalBody>

               <ModalFooter bg="gray.800">
                  <Button onClick={onClose} variant="magic" bg="pink.400">
                     Cancel
                  </Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      </>
   )
}
