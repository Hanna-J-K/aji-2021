import * as React from 'react'
import { CartItemType } from '../types/CartItemType'

const CartContext = React.createContext<
   [CartItemType[], (cartItems: React.SetStateAction<CartItemType[]>) => void]
>([
   [{ id: 1, name: 'foo', unitPrice: 1.0, quantity: 1, image: 'bar' }],
   () => {},
])

export const CartProvider = CartContext.Provider

export default CartContext
