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
   Flex,
} from '@chakra-ui/react'
import { useOrdersQuery } from '../../generated/graphql'

import OrderEditingModal from './OrderEditingModal'
import { Navbar } from '../Navbar'

export const OrdersTable: React.FC<{}> = () => {
   const { data } = useOrdersQuery({
      notifyOnNetworkStatusChange: true,
   })

   const placeholderProduct = [
      {
         quantity: 15,
         name: 'blackbear',
      },
      {
         quantity: 2,
         name: 'joji',
      },
      {
         quantity: 3,
         name: 'gionni & kyle',
      },
      {
         quantity: 2,
         name: 'lund',
      },
      {
         quantity: 8,
         name: 'garret nash',
      },
   ]

   return (
      <Box>
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
                        <Flex
                           justifyContent="space-between"
                           borderRadius="lg"
                           boxShadow="0 1px 3px 0 #ffffff"
                           p={5}
                           color="white"
                           bg="gray.800"
                        >
                           <Box>
                              <Box>
                                 {' '}
                                 Order placement date: {order.orderPlaceDate}
                              </Box>
                              <Box>Order confirmation date: 69-11-4200</Box>
                              <Box> User: {order.username}</Box>
                              <Box> User e-mail: {order.email}</Box>
                              <Box> User contact phone: {order.phone}</Box>
                              <Box fontWeight="semibold">Order status:</Box>
                           </Box>
                           <Box
                              borderRadius="lg"
                              boxShadow="0 1px 3px 0 #ffffff"
                              px={5}
                              py={3}
                              color="white"
                              bg="gray.800"
                              minW="30%"
                              textAlign="end"
                              mt={-1}
                           >
                              <Text fontWeight="semibold" textAlign="center">
                                 Products in this order
                              </Text>
                              {placeholderProduct.map((product) => (
                                 <Box mb={1}>
                                    {product.name}: {product.quantity}
                                 </Box>
                              ))}
                              <Box fontWeight="semibold" textAlign="center">
                                 Total value: 987
                              </Box>
                           </Box>
                        </Flex>

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
                        </Center>
                     </AccordionPanel>
                  </AccordionItem>
               )
            )}
         </Accordion>
      </Box>
   )
}
