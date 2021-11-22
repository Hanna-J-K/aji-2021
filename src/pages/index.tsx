import ProductsGrid from '../components/ProductsGrid'
import React from 'react'
import { Navbar } from '../components/Navbar'
import { withApollo } from '../utils/withApollo'
import OrdersTable from '../components/Orders/OrdersTable'
import { CartItemType } from '../types/CartItemType'
import { CartProvider } from '../contexts/CartContext'

const Index = () => {
   const [cartItems, setCartItems] = React.useState<CartItemType[]>([])
   return (
      <>
         <CartProvider value={[cartItems, setCartItems]}>
            <Navbar />
            <OrdersTable />
            <ProductsGrid />
         </CartProvider>
      </>
   )
}

export default withApollo({ ssr: false })(Index)
