import { Box, Image, Center, Text, Flex, Button, useDisclosure } from "@chakra-ui/react"
import { Product } from "../../types/ProductType"
import ProductModal from "../ProductModal"


function Card(props: Product) {

    const { name, description, unitPrice, unitWeight, categories } = props
    const { isOpen, onOpen, onClose } = useDisclosure()

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
            borderWidth="12px" 
            borderRadius="xl"
            borderColor="#121212"
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
                    bg="pink.300"
                    borderWidth="3px"
                    borderColor="pink.800"
                >
                    <Box boxShadow="inset 0 5px 1px black" borderRadius="xl">
                        <Text 
                            textAlign="left" 
                            fontWeight="bold" 
                            color="black"
                            padding="2"
                        >
                            {name}
                        </Text>
                    </Box>
                </Box>

                <Center >
                    <Box 
                        maxH="200px" 
                        maxW="380px" 
                        borderWidth="3px"
                        borderColor="pink.800"
                        borderBottom="none"
                        borderTopRadius="sm"
                        borderTopWidth="5px"
                        mt={-1}
                    >
                        <Image src={productImage.imageUrl} alt={productImage.imageAlt}/>
                    </Box>
                </Center>
                

                <Flex justify="space-between"
                    maxH={100}
                    minH={35}
                    minW={390}
                    maxW={390}
                    borderRadius="3xl" 
                    bg="pink.300"
                    borderWidth="7px"
                    borderColor="pink.800"
                    borderBottomRadius="3xl"
                    mb={-1}
                    mt={-3}
                >
                    <Flex justify="space-between" grow={2} boxShadow="0 7px 5px 2px #281207" borderRadius="2xl">
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
                    
                </Flex>

                <Center>
                    <Box 
                        minH={275}
                        w="380px" 
                        borderWidth="4px"
                        borderRadius="lg"
                        borderColor="pink.800"
                        bg="rgba(42, 67, 101, 0.5)"
                        marginBottom="2"
                        borderTopColor="#281207"
                        borderTopWidth="6px"
                        mt={-1}
                        pt={1}
                        boxShadow="inset -2px -2px 7px 2px #281207"
                        
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
                        <Center mt={6}>
                            <ProductModal 
                                name={name} 
                                description={description} 
                                unitPrice={unitPrice} 
                                unitWeight={unitWeight} 
                                categories={categories} 
                            />
                        </Center>
                        
                        
                    </Box>
                    

                </Center>
            
            </Flex>
            
            


        </Box>
    )
}

export default Card