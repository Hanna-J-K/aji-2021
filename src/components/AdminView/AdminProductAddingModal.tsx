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
} from '@chakra-ui/react'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import {
   useCategoryQuery,
   useCreateProductMutation,
} from '../../generated/graphql'
import { Form, Formik } from 'formik'
import { InputField } from '../InputField'
import { toErrorMap } from '../../utils/toErrorMap'

export const AdminProductAddingModal: React.FC = () => {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const [category, setCategory] = useState('Category')
   const categoriesQueryResult = useCategoryQuery()
   const [createProductMutation] = useCreateProductMutation()

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
                           <Formik
                              validateOnBlur={false}
                              validateOnChange={false}
                              initialValues={{
                                 name: ``,
                                 unitPrice: 0,
                                 unitWeight: 0,
                                 description: ``,
                              }}
                              onSubmit={async (values, { setErrors }) => {
                                 const response = await createProductMutation({
                                    variables: {
                                       input: {
                                          ...values,
                                          categories: category,
                                       },
                                    },
                                 })
                                 if (response.data?.createProduct.errors) {
                                    setErrors(
                                       toErrorMap(
                                          response.data.createProduct.errors
                                       )
                                    )
                                 } else {
                                    //TODO: RESPONSE POWIODLO SIE DODANIE PRODUKTU
                                    // ZAMKNIJ MODAL
                                    console.log('dobrze')
                                 }
                              }}
                           >
                              {({ isSubmitting }) => (
                                 <Form>
                                    <InputField
                                       name="name"
                                       placeholder=""
                                       label="Name"
                                    />
                                    <InputField
                                       name="unitPrice"
                                       placeholder=""
                                       label="Price"
                                       type="number"
                                    />
                                    <InputField
                                       name="unitWeight"
                                       placeholder=""
                                       label="Weight"
                                       type="number"
                                    />
                                    <InputField
                                       name="description"
                                       placeholder=""
                                       label="Description"
                                    />
                                    <Menu>
                                       <MenuButton
                                          mt={3}
                                          as={Button}
                                          variant="magic"
                                          rightIcon={<ChevronDownIcon />}
                                       >
                                          {category}
                                       </MenuButton>
                                       <MenuList
                                          bg="blue.500"
                                          color="black"
                                          borderRadius="xl"
                                       >
                                          {categoriesQueryResult.data?.category.map(
                                             (category) =>
                                                !category ? null : (
                                                   <MenuItem
                                                      key={category.name}
                                                      _hover={{
                                                         backgroundColor:
                                                            'pink.500',
                                                         color: 'white',
                                                      }}
                                                      onClick={() =>
                                                         setCategory(
                                                            category.name
                                                         )
                                                      }
                                                   >
                                                      {category.name}
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
                                          Add product
                                       </Button>
                                       <Button
                                          onClick={onClose}
                                          variant="magic"
                                          bg="pink.400"
                                          ml={8}
                                          mt={4}
                                       >
                                          Close
                                       </Button>
                                    </Center>
                                 </Form>
                              )}
                           </Formik>
                        </Stack>
                     </Center>
                  </ModalBody>

                  <ModalFooter></ModalFooter>
               </Flex>
            </ModalContent>
         </Modal>
      </>
   )
}

export default AdminProductAddingModal
