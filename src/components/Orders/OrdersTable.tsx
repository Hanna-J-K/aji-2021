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
   Heading,
} from '@chakra-ui/react'
import { useOrdersQuery } from '../../generated/graphql'

import OrderEditingModal from './OrderEditingModal'
import { Navbar } from '../Navbar'

export const OrdersTable: React.FC<{}> = () => {
   const { data } = useOrdersQuery({
      notifyOnNetworkStatusChange: true,
   })

   return (
      <Box>
         <Navbar title="Admin Orders Panel" buttons={false} />
         <Box mx={20} fontSize="2xl">
            <Text>Click on an order to expand for more information.</Text>
            <Text>Edit or delete orders using buttons.</Text>
         </Box>
         <Accordion
            borderWidth="4px"
            borderRadius="lg"
            borderColor="pink.800"
            mx="auto"
            my="20"
            maxW="50%"
            defaultIndex={[0]}
            allowMultiple
         >
            {data?.orders.map((order) =>
               !order ? null : (
                  <AccordionItem bg="gray.900" key={order.id}>
                     <h2>
                        <AccordionButton>
                           <Box flex="1" textAlign="left">
                              <Heading fontSize="lg">
                                 Order ID: {order.id}
                              </Heading>
                              <Text>Date placed: {order.orderPlaceDate}</Text>
                           </Box>
                           <AccordionIcon />
                        </AccordionButton>
                     </h2>
                     <AccordionPanel pb={4}>
                        <Box
                           borderRadius="lg"
                           boxShadow="0 1px 3px 0 #ffffff"
                           p={5}
                           color="white"
                           bg="gray.800"
                        >
                           <Box>
                              {' '}
                              Order placement date: {order.orderPlaceDate}
                           </Box>
                           <Box> User: {order.username}</Box>
                           <Box> User e-mail: {order.email}</Box>
                           <Box> User contact phone: {order.phone}</Box>
                           <Box fontWeight="semibold">
                              Order status: "great"
                              {/* Order status: "{order.status.orderStatus}" */}
                           </Box>
                        </Box>
                        <Center>
                           <OrderEditingModal
                              id={order.id}
                              orderPlaceDate={order.orderPlaceDate}
                              username={order.username}
                              email={order.email}
                              phone={order.phone}
                              status={order.status.orderStatus}
                              orderConfirmedDate={order.orderConfirmedDate}
                              orderProducts={order.orderedProducts}
                           />
                           <IconButton
                              variant="magic"
                              m={5}
                              color="red.800"
                              aria-label="edit"
                              icon={<DeleteIcon />}
                           />
                        </Center>
                     </AccordionPanel>
                  </AccordionItem>
               )
            )}
         </Accordion>
      </Box>
   )
}
