import { SimpleGrid } from "@chakra-ui/react"
import ProductCard from "./ProductCard"
import ProductModal from "./ProductModal"

function ProductsGrid() {
    // const finalRef = React.useRef()
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
            
            {products.map(product => 
                    <ProductCard 
                        key={product.id}
                        name={product.name}
                        description={product.description}
                        unitPrice={product.unitPrice}
                        unitWeight={product.unitWeight}
                        categories={product.categories}
                />
            )}
        </SimpleGrid>
    )
}

export default ProductsGrid