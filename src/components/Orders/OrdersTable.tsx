import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import {
   Accordion,
   AccordionItem,
   AccordionButton,
   AccordionPanel,
   AccordionIcon,
   Box,
   Text,
   Center,
   IconButton,
} from '@chakra-ui/react'

import OrderEditingModal from './OrderEditingModal'

export const OrdersTable = () => {
   return (
      <Box>
         <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
               <h2>
                  <AccordionButton>
                     <Box flex="1" textAlign="left">
                        ORDER NAME
                     </Box>
                     <AccordionIcon />
                  </AccordionButton>
               </h2>
               <AccordionPanel pb={4}> 
                  <Box borderRadius="lg" boxShadow="0 1px 3px 0 #ffffff" p={5}>
                     <Box color="white"> Order placement date: </Box>
                     <Box color="white"> User: </Box>
                     <Box color="white"> User e-mail: </Box>
                     <Box color="white"> User contact phone: </Box>
                     <Box color="white" fontWeight="semibold">
                        Order status: NOT CONFIRMED
                     </Box>
                  </Box>
                  <Center>
                     <OrderEditingModal />
                     <IconButton
                        variant="magic"
                        m={5}
                        color="yellow.800"
                        aria-label="edit"
                        icon={<DeleteIcon />}
                     />
                  </Center>
               </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
               <h2>
                  <AccordionButton>
                     <Box flex="1" textAlign="left">
                        ORDER 2 NAME
                     </Box>
                     <AccordionIcon />
                  </AccordionButton>
               </h2>
               <AccordionPanel pb={4}>
                  <Text>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                  <Center>
                     <IconButton
                        variant="magic"
                        m={5}
                        color="yellow.800"
                        aria-label="edit"
                        icon={<EditIcon />}
                     />
                     <IconButton
                        variant="magic"
                        m={5}
                        color="yellow.800"
                        aria-label="edit"
                        icon={<DeleteIcon />}
                     />
                  </Center>
               </AccordionPanel>
            </AccordionItem>
         </Accordion>
      </Box>
   )
}
