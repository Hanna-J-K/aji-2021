import ProductsGrid from '../components/ProductsGrid'
import React from 'react'
import { Navbar } from '../components/Navbar'
import { withApollo } from '../utils/withApollo'
import OrdersTable from '../components/Orders/OrdersTable'

const Index = () => {
   return (
      <>
         <Navbar />
         <OrdersTable />
         <ProductsGrid />
      </>
   )
}

export default withApollo({ ssr: false })(Index)
