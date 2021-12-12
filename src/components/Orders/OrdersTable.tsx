import {
   Accordion,
   AccordionItem,
   AccordionButton,
   AccordionPanel,
   AccordionIcon,
   Box,
   Text,
   Center,
   Heading,
   Flex,
} from '@chakra-ui/react'
import { useOrdersQuery } from '../../generated/graphql'
import OrderEditingModal from './OrderEditingModal'

export const OrdersTable: React.FC<{}> = () => {
   const { data } = useOrdersQuery({
      notifyOnNetworkStatusChange: true,
   })

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
                              <Text>
                                 Date placed:{' '}
                                 {new Date(
                                    Number(order.orderPlaceDate)
                                 ).toLocaleString()}
                              </Text>
                           </Box>
                           <AccordionIcon />
                        </AccordionButton>
                     </h2>
                     <AccordionPanel pb={4}>
                        <Flex
                           justifyContent="space-between"
                           borderRadius="lg"
                           boxShadow="0 1px 2px 0 #ffffff"
                           p={5}
                           color="white"
                           bg="gray.800"
                        >
                           <Box>
                              <Box>
                                 Order placement date: 
                                 {new Date(
                                    Number(order.orderPlaceDate)
                                 ).toLocaleString()}
                              </Box>
                              <Box>
                                 Order confirmation date:{' '}
                                 {order.orderConfirmedDate
                                    ? new Date(
                                         Number(order.orderConfirmedDate)
                                      ).toLocaleString()
                                    : 'not confirmed yet'}
                              </Box>
                              <Box> User: {order.username}</Box>
                              <Box> User e-mail: {order.email}</Box>
                              <Box> User contact phone: {order.phone}</Box>
                              <Box fontWeight="semibold">Order status:</Box>
                           </Box>
                           <Box>
                              <Text fontWeight="semibold">
                                 Products in this order
                              </Text>
                              {data.orders.map((order) =>
                                 order.orderedProducts.map((orderedProduct) => (
                                    <Box textAlign="end">
                                       {orderedProduct.product_id}
                                       {orderedProduct.quantity}
                                    </Box>
                                 ))
                              )}
                              <Text fontWeight="semibold" textAlign="end">
                                 Total value: {order.orderTotal}$
                              </Text>
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
