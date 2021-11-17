import { Box, Image, Center, Text, Flex } from "@chakra-ui/react"
import { Product } from "../../types/ProductType"

function Card(props: Product) {

    const { name, description, unitPrice, unitWeight, categories } = props

    const backgroundImage = {
        imageUrl: "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80",
        imageAlt: "Kill me plz"
    }

    const productImage = {
        imageUrl: "https://via.placeholder.com/380x200",
        imageAlt: "Kill this love"
    }

    return (
        <Box 
            borderWidth="10px" 
            borderRadius="xl"
            borderColor="orange.600"
            maxW={420} 
            maxH={608} 
            overflow="hidden"
            backgroundImage={backgroundImage.imageUrl}
            
        >
            <Flex direction="column" justify="center" align="center">
                <Box
                    marginTop="2"
                    maxH={100}
                    minH={35}
                    minW={390}
                    maxW={390}
                    borderRadius="2xl" 
                    bg="orange.300"
                    borderWidth="3px"
                    borderColor="orange.900"
                >
                    <Text 
                        textAlign="left" 
                        fontWeight="bold" 
                        color="black"
                        padding="2"
                    >
                        {name}
                    </Text>
                </Box>

                <Center >
                    <Box 
                        maxH="200px" 
                        maxW="380px" 
                        borderWidth="3px"
                        borderColor="orange.900"
                    >
                        <Image src={productImage.imageUrl} alt={productImage.imageAlt}/>
                    </Box>
                </Center>
                

                <Flex justify="space-between"
                    maxH={100}
                    minH={35}
                    minW={390}
                    maxW={390}
                    borderRadius="2xl" 
                    bg="orange.300"
                    borderWidth="3px"
                    borderColor="orange.900"
                    boxShadow="0 5px 5px 5px #000000;"
                >
                    <Text 
                        textAlign="left" 
                        fontWeight="bold" 
                        color="black"
                        padding="2"
                    >
                        Price: {unitPrice}
                    </Text>

                    <Text 
                        textAlign="left" 
                        fontWeight="bold" 
                        color="black"
                        padding="2"
                    >
                        Weight: {unitWeight}
                    </Text>
                    
                </Flex>

                <Center>
                    <Box 
                        maxH={300}
                        minH={275}
                        w="380px" 
                        borderWidth="4px"
                        borderTopWidth="2px"
                        borderColor="orange.900"
                        bg="rgba(42, 67, 101, 0.5)"
                        marginBottom="2"
                        borderRadius="md"
                    >
                        <Text 
                            fontSize='2em' 
                            letterSpacing="wide" 
                            color="white" 
                            fontWeight="semibold"
                            textAlign="center"
                        >
                            {categories}
                        </Text>
                    </Box>
                </Center>
            
            </Flex>
            
            


        </Box>
    )
}

export default Card