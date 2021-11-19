import { Box, Center, Flex, Heading  } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react"
import CartDrawer from "../components/CartDrawer"

function Navbar() {


    return (

        <Flex 
            mb={10} 
            bg="blue.700" 
            w="100%" 
            h="10vh"
            borderRadius="lg"
            justify="space-between"
        >
            <Box m={5} ml={10} color="white">
                <Heading>Ollie-wand-er</Heading>
            </Box>

            <Box>
                <CartDrawer />

                <Button 
                        variant="solid"
                        bg="pink.300"
                        color="black"
                        boxShadow="0 5px 5px 1px #521B41"
                        borderRadius="lg"
                        m={5}
                        mr={10}
                        _hover={{ bg: "purple.300" }}
                        _active={{
                            bg: "purple.300",
                            borderColor: "purple.700",
                        }}
                    >
                        Log In   
                </Button>
            </Box>
            
                
        </Flex>
    )
}

export default Navbar