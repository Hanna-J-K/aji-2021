import { Box, Image, Center, Button, useDisclosure } from "@chakra-ui/react"
import { Product } from "../types/ProductType"
import ProductModal from "./ProductModal"

function ProductCard(props: Product) {

    // const { onOpen } = useDisclosure({id: "openModal"})
    
    const { name, unitPrice, unitWeight, categories } = props

    const imageInfo = {
        imageUrl: "https://via.placeholder.com/420",
        imageAlt: "Kill me plz"
    }

    return (

        <Box maxW={420} borderWidth="1px" borderRadius="lg" overflow="hidden">

            <Image src={imageInfo.imageUrl} alt={imageInfo.imageAlt} />
            <Box bg="pink.300" p="6">
                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {name}
                </Box>

                <Box color="gray.500"> {unitPrice} </Box>
                <Box color="gray.500"> {unitWeight} </Box>
                <Box fontWeight="semibold"> {categories} </Box>

                <Center>
                    <ProductModal />
                </Center>

            </Box>

        </Box>
    )
}

export default ProductCard