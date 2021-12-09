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
   Stack,
   Input,
   InputGroup,
   InputLeftAddon,
} from '@chakra-ui/react'
import { Product } from '../../types/ProductType'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

import { EditIcon, ChevronDownIcon } from '@chakra-ui/icons'

interface ProductModalProps {
   product: Product
}

export const AdminProductEditingModal: React.FC<ProductModalProps> = ({
   product,
}) => {
   const productImage = {
      imageUrl: 'https://via.placeholder.com/570x300',
      imageAlt: 'Kill this love',
   }
   const { name, description, unitPrice, unitWeight, categories } = product
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
                           Categories: {categories}{' '}
                        </Box>
                        <Box fontWeight="semibold">
                           <Text> Product description: </Text>
                           <Text>{description} </Text>
                        </Box>
                     </Box>

                     <Stack spacing={3}>
                        <InputGroup>
                           <InputLeftAddon
                              children="Name"
                              size="xl"
                              bg="none"
                           />
                           <Input placeholder={name} />
                        </InputGroup>
                        <InputGroup>
                           <InputLeftAddon
                              children="Weight"
                              size="xl"
                              bg="none"
                           />
                           <Input placeholder={unitWeight} />
                        </InputGroup>
                        <InputGroup>
                           <InputLeftAddon
                              children="Category"
                              size="xl"
                              bg="none"
                           />
                           <Menu>
                              <MenuButton
                                 as={Button}
                                 variant="outline"
                                 rightIcon={<ChevronDownIcon />}
                              >
                                 {categories}
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
                        </InputGroup>
                        <InputGroup>
                           <InputLeftAddon
                              children="Description"
                              size="xl"
                              bg="none"
                           />
                           <Input placeholder={description} />
                        </InputGroup>
                        <InputGroup>
                           <InputLeftAddon
                              children="Price"
                              size="xl"
                              bg="none"
                           />
                           <Input placeholder={unitPrice} />
                        </InputGroup>
                        <InputGroup>
                           <InputLeftAddon
                              children="Image"
                              size="xl"
                              bg="none"
                           />
                           <Input placeholder="URL" />
                        </InputGroup>
                     </Stack>
                  </ModalBody>

                  <ModalFooter>
                     <Box
                        borderWidth="5px"
                        borderColor="pink.800"
                        borderRadius="xl"
                        bg="pink.300"
                        mr={3}
                     >
                        <Button onClick={onClose} variant="magic-navbar">
                           Save changes
                        </Button>
                     </Box>
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
