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

export const LoginModal = () => {
   const { isOpen, onOpen, onClose } = useDisclosure()
   return (
      <>
         <Button onClick={onOpen} variant="magic-navbar" m={5} mr={10}>
            Log In
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
               //    bg="rgba(42, 67, 101, 0.98)"
               //    bgGradient="linear(to-tr, pink.800, orange.900, blue.800)"
            >
               <Flex direction="column">
                  <ModalHeader
                     color="white"
                     borderBottomRadius="2xl"
                     boxShadow="inset 0 0 3px 1px #000000"
                  >
                     Admin Dashboard Login
                  </ModalHeader>
                  <ModalCloseButton variant="magic" color="white" />
                  <ModalBody>
                     <Center my={5}>
                        <Stack spacing={3}>
                           <Input placeholder="Username" size="lg" />
                           <Input placeholder="Password" size="lg" />
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
                        <Button variant="magic" bg="pink.300">
                           Login
                        </Button>
                     </Box>
                  </ModalFooter>
               </Flex>
            </ModalContent>
         </Modal>
      </>
   )
}

export default LoginModal