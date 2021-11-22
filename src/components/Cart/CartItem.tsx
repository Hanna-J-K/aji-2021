import { Container, Button } from '@chakra-ui/react'
import React from 'react'
import { CartItemType } from '../../types/CartItemType'

interface CartItemProps {
   item: CartItemType
   addToCart: (clickedItem: CartItemType) => void
   removeFromCart: (id: number) => void
}

export const CartItem: React.FC<CartItemProps> = ({
   item,
   addToCart,
   removeFromCart,
}) => (
   <Container color="white">
      <div>
         <h3>{item.name}</h3>
         <div>
            <p>Price: ${item.unitPrice}</p>
            <p>Total: ${(item.quantity * item.unitPrice).toFixed(2)}</p>
         </div>
         <div>
            <Button
               size="small"
               disableElevation
               variant="contained"
               onClick={() => removeFromCart(item.id)}
            >
               -
            </Button>
            <p>{item.quantity}</p>
            <Button
               size="small"
               disableElevation
               variant="contained"
               onClick={() => addToCart(item)}
            >
               +
            </Button>
         </div>
      </div>
      <img src={item.image} alt={''} />
   </Container>
)
