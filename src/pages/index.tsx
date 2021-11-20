import ProductsGrid from '../components/ProductsGrid'
import React from 'react'
import Navbar from '../components/Navbar'
import { useProductsQuery } from '../generated/graphql'
import { withApollo } from '../utils/withApollo'
import OrdersTable from '../components/Orders/OrdersTable'

const Index = () => {
   const { data, error, loading } = useProductsQuery()
   if (!loading && !data) {
      return (
         <div>
            <div>TBD (query failed, no data fetched)</div>
            <div>{error?.message}</div>
         </div>
      )
   }

   return (
      <>
         <Navbar />
         <OrdersTable />
         <ProductsGrid />
         
      </>
   )
}

export default withApollo({ ssr: false })(Index)
