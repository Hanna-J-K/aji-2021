import { SimpleGrid } from "@chakra-ui/react"
import Card from "./DeckBuilder/Card"
import { useProductsQuery } from '../generated/graphql'

function ProductsGrid() {

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
        <SimpleGrid columns={4} spacing={2}>
            
            {data?.products.map(product => 
                    !product ? null : (<Card 
                        key={product.id}
                        name={product.name}
                        description={product.description}
                        unitPrice={product.unitPrice}
                        unitWeight={product.unitWeight}
                        categories={"Whatever"}
                />
            ))}
        </SimpleGrid>
    )
}

export default ProductsGrid