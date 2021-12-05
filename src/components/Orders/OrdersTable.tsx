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
import { useOrdersQuery } from '../../generated/graphql'

import OrderEditingModal from './OrderEditingModal'

export const OrdersTable: React.FC<{}> = () => {
   const { data } = useOrdersQuery({
      notifyOnNetworkStatusChange: true,
   })
   return (
      <Box>
         <Accordion defaultIndex={[0]} allowMultiple>
            {data?.orders.map((order) =>
               !order ? null : (
                  <AccordionItem key={order.id}>
                     <h2>
                        <AccordionButton>
                           <Box flex="1" textAlign="left">
                              {order.orderPlaceDate}
                           </Box>
                           <AccordionIcon />
                        </AccordionButton>
                     </h2>
                     <AccordionPanel pb={4}>
                        <Box
                           borderRadius="lg"
                           boxShadow="0 1px 3px 0 #ffffff"
                           p={5}
                        >
                           <Box color="white">
                              {' '}
                              Order placement date: {order.orderPlaceDate}
                           </Box>
                           <Box color="white"> User: {order.username}</Box>
                           <Box color="white"> User e-mail: {order.email}</Box>
                           <Box color="white">
                              {' '}
                              User contact phone: {order.phone}
                           </Box>
                           <Box color="white" fontWeight="semibold">
                              Order status: {order.status.orderStatus}
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
                              color="yellow.800"
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
