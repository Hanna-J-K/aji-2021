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
   Menu,
   MenuItem,
   MenuList,
   MenuButton,
   Button,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useOrdersByStatusQuery } from '../../generated/graphql'
import { useState } from 'react'

export const OrdersFilteringPanel: React.FC<{}> = () => {
   const [orderStatus, setOrderStatus] = useState('Filter')
   const statuses = ['not confirmed', 'confirmed', 'cancelled', 'completed']
   const { data } = useOrdersByStatusQuery({
      notifyOnNetworkStatusChange: true,
      variables: {
         status: `${statuses.indexOf(orderStatus) + 1}`,
      },
   })

   return (
      <Box>
         <Box mx={20} fontSize="2xl">
            <Text>Click on an order to expand for more information.</Text>
            <Text>Edit or delete orders using buttons.</Text>
         </Box>

         <Center>
            <Menu>
               <MenuButton
                  as={Button}
                  variant="magic"
                  rightIcon={<ChevronDownIcon />}
               >
                  {orderStatus}
               </MenuButton>
               <MenuList bg="blue.500" color="black" borderRadius="xl">
                  {statuses.map((stat) =>
                     !stat ? null : (
                        <MenuItem
                           key={stat}
                           _hover={{
                              backgroundColor: 'pink.500',
                              color: 'white',
                           }}
                           onClick={() => setOrderStatus(stat)}
                        >
                           {stat}
                        </MenuItem>
                     )
                  )}
               </MenuList>
            </Menu>
         </Center>

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
            {data?.ordersByStatus?.map((order) =>
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
                              {order.orderedProducts.map((orderedProduct) => (
                                 <Flex
                                    textAlign="end"
                                    justifyContent="flex-end"
                                 >
                                    <Text>
                                       ID: {orderedProduct.product_id} -
                                    </Text>
                                    <Text>
                                       {' '}
                                       - Qty: {orderedProduct.quantity}
                                    </Text>
                                 </Flex>
                              ))}
                              <Text fontWeight="semibold" textAlign="end">
                                 Total value: ${order.orderTotal.toFixed(2)}
                              </Text>
                           </Box>
                        </Flex>
                     </AccordionPanel>
                  </AccordionItem>
               )
            )}
         </Accordion>
      </Box>
   )
}
