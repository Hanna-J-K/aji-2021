import { SimpleGrid } from "@chakra-ui/react"
import Card from "./DeckBuilder/Card"
import { useProductsQuery } from '../generated/graphql'
import { withApollo } from '../utils/withApollo'

function ProductsGrid() {
    // const finalRef = React.useRef()

    const { data, error, loading } = useProductsQuery()
   if (!loading && !data) {
      return (
         <div>
            <div>TBD (query failed, no data fetched)</div>
            <div>{error?.message}</div>
         </div>
      )
   }
    const products = [
        {
            "id": 1,
            "name": "Elder Wand",
            "description": "One of 3 deathly hallows",
            "unitPrice": 2.00,
            "unitWeight": 5.35,
            "categories": "Equipment"
        },
        {
            "id": 2,
            "name": "Invisibility Cloak",
            "description": "One of 3 deathly hallows",
            "unitPrice": 2.00,
            "unitWeight": 5.35,
            "categories": "Equipment"
        },
        {
            "id": 3,
            "name": "Resurrection Stone",
            "description": "One of 3 deathly hallows",
            "unitPrice": 2.00,
            "unitWeight": 5.35,
            "categories": "Equipment"
        },
        {
            "id": 4,
            "name": "Riddle's diary",
            "description": "One of 7 horcruxes",
            "unitPrice": 2.00,
            "unitWeight": 5.35,
            "categories": "Equipment"
        },
    ]

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