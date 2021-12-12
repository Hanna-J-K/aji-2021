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
   Image,
   Text,
   createStandaloneToast,
} from '@chakra-ui/react'
import { Product } from '../../types/ProductType'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
   useCategoryQuery,
   useUpdateProductMutation,
} from '../../generated/graphql'
import { useState } from 'react'
import { Formik, Form } from 'formik'
import { toErrorMap } from '../../utils/toErrorMap'
import { InputField } from '../InputField'

interface ProductModalProps {
   product: Product
}

export const AdminProductEditingModal: React.FC<ProductModalProps> = ({
   product,
}) => {
   const { id, name, description, unitPrice, unitWeight, categories } = product
   const categoriesQueryResult = useCategoryQuery()
   const [updateProductMutation] = useUpdateProductMutation()
   const toast = createStandaloneToast()

   let categoryName = categories[0] ? categories[0].name : 'Category'
   const [category, setCategory] = useState(categoryName)
   const productImage = {
      imageUrl: 'https://via.placeholder.com/570x300',
      imageAlt: 'Kill this love',
   }
   const { isOpen, onOpen, onClose } = useDisclosure()
   const bgImg =
      "url('https://images.unsplash.com/photo-1530362502708-d02c8f093039?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')"

   return (
      <>
         <Box
            borderWidth="5px"
            borderColor="pink.800"
            borderRadius="xl"
            bg="pink.300"
         >
            <Button onClick={onOpen} variant="magic-navbar">
               Edit this product
            </Button>
         </Box>

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
               backgroundImage={bgImg}
            >
               <Flex direction="column">
                  <ModalHeader
                     color="white"
                     borderBottomRadius="2xl"
                     boxShadow="inset 0 0 3px 1px #000000"
                  >
                     {name}
                  </ModalHeader>
                  <ModalCloseButton variant="magic" color="white" />
                  <ModalBody>
                     <Center mb={3}>
                        <Box>
                           <Image
                              src={productImage.imageUrl}
                              alt={productImage.imageAlt}
                           />
                        </Box>
                     </Center>
                     <Box
                        borderRadius="lg"
                        boxShadow="0 1px 3px 0 #ffffff"
                        p={5}
                        color="white"
                     >
                        <Box> Price: {unitPrice} </Box>
                        <Box> Weight: {unitWeight} </Box>
                        <Box fontWeight="semibold">
                           {' '}
                           Categories:{' '}
                           {categories.map((category) => category.name)}{' '}
                        </Box>
                        <Box fontWeight="semibold">
                           <Text> Product description: </Text>
                           <Text>{description} </Text>
                        </Box>
                     </Box>

                     <Formik
                        validateOnBlur={false}
                        validateOnChange={false}
                        initialValues={{
                           name: ``,
                           unitPrice: unitPrice,
                           unitWeight: unitWeight,
                           description: ``,
                        }}
                        onSubmit={async (values, { setErrors }) => {
                           const response = await updateProductMutation({
                              variables: {
                                 input: {
                                    ...values,
                                    categories: category,
                                 },
                                 updateProductId: id,
                              },
                              update: (cache) => {
                                 cache.evict({
                                    fieldName: 'products:{}',
                                 })
                              },
                           })
                           if (response.data?.updateProduct.errors) {
                              setErrors(
                                 toErrorMap(response.data.updateProduct.errors)
                              )
                           } else {
                              //TODO: RESPONSE POWIODLO SIE DODANIE PRODUKTU
                              // ZAMKNIJ MODAL
                              toast({
                                 title: 'Success!',
                                 description: 'Product added to stock.',
                                 status: 'success',
                                 duration: 7000,
                                 isClosable: true,
                              })
                              console.log('dobrze')
                           }
                        }}
                     >
                        {({ isSubmitting }) => (
                           <Form>
                              <InputField
                                 name="name"
                                 placeholder={name}
                                 label="Name"
                              />
                              <InputField
                                 name="unitPrice"
                                 placeholder={unitPrice.toString()}
                                 label="Price"
                                 type="number"
                              />
                              <InputField
                                 name="unitWeight"
                                 placeholder={unitWeight.toString()}
                                 label="Weight"
                                 type="number"
                              />
                              <InputField
                                 name="description"
                                 placeholder={description}
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
                                                   backgroundColor: 'pink.500',
                                                   color: 'white',
                                                }}
                                                onClick={() =>
                                                   setCategory(category.name)
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
                                    Update product
                                 </Button>
                              </Center>
                           </Form>
                        )}
                     </Formik>
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
                  </ModalFooter>
               </Flex>
            </ModalContent>
         </Modal>
      </>
   )
}

export default AdminProductEditingModal
