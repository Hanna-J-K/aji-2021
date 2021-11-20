import { Box, Center, Flex, Heading  } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react"
import { Cart } from "../components/Cart/Cart"

function Navbar() {


    return (

        <Flex 
            mb={10} 
            bg="blue.700" 
            w="100%" 
            h="10vh"
            borderRadius="lg"
            borderTopRadius="none"
            justify="space-between"
            boxShadow="0 5px 5px 3px black"
        >
            <Box m={5} ml={10} color="white">
                <Heading>Ollie-wand-er</Heading>
            </Box>

            <Flex>
                <Cart />

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
            </Flex>
            
                
        </Flex>
    )
}

export default Navbar