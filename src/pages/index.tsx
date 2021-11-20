import ProductsGrid from '../components/ProductsGrid'
import React from 'react'
import Navbar from '../components/Navbar'
import { useProductsQuery } from '../generated/graphql'
import { withApollo } from '../utils/withApollo'

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
         <ProductsGrid />
      </>
   )
}

export default withApollo({ ssr: false })(Index)
