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
   Text,
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import { useLoginMutation } from '../generated/graphql'
import { InputField } from './InputField'

export const LoginModal = () => {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const router = useRouter()
   const [login] = useLoginMutation()
   let failed = false

   const bgImg =
      "url('https://images.unsplash.com/photo-1530362502708-d02c8f093039?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')"

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
               bg="rgba(42, 67, 101, 0.98)"
               backgroundImage={bgImg}
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
                           <Formik
                              initialValues={{ username: '', password: '' }}
                              onSubmit={async (values) => {
                                 const response = await login({
                                    variables: values,
                                 })
                                 if (!response.data?.login.error) {
                                    router.push('/admin')
                                 } else {
                                    failed = true
                                 }
                              }}
                           >
                              {({ isSubmitting }) => (
                                 <Form>
                                    <InputField
                                       name="username"
                                       placeholder="username"
                                       label="Username"
                                    />
                                    <Box mt={4}>
                                       <InputField
                                          name="password"
                                          placeholder="password"
                                          label="Password"
                                          type="password"
                                       />
                                    </Box>
                                    <Button
                                       mt={4}
                                       type="submit"
                                       isLoading={isSubmitting}
                                       variant="magic"
                                       bg="pink.300"
                                    >
                                       login
                                    </Button>
                                 </Form>
                              )}
                           </Formik>
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
                  </ModalFooter>
               </Flex>
            </ModalContent>
         </Modal>
      </>
   )
}

export default LoginModal
