import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
	Box,
	Flex,
	Center,
	Image,
	Text
  } from "@chakra-ui/react"

  import { Product } from "../../types/ProductType"

function ProductModal(props: Product) {

	const productImage = {
        imageUrl: "https://via.placeholder.com/570x300",
        imageAlt: "Kill this love"
    }
    const { name, description, unitPrice, unitWeight, categories } = props
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
    	<>
			<Box
				borderWidth="5px"
				borderColor="pink.800"
				borderRadius="xl"
				bg="pink.300"
			>
				<Button 
					onClick={onOpen} 
					variant="solid"
					bg="pink.300"
					color="black"
					boxShadow="0 5px 5px 1px #521B41"
					borderRadius="lg"
					_hover={{ bg: "purple.300" }}
					_active={{
						bg: "purple.300",
						borderColor: "purple.700",
					  }}
				>
					See more    
				</Button>

			</Box>
        	
        	<Modal 
				isOpen={isOpen} 
				onClose={onClose} 
				isCentered motionPreset="slideInBottom"
        	>
				<ModalOverlay />
				<ModalContent 
					borderWidth="10px" 
					borderColor="#121212" 
					boxShadow="inset 0 0 10px 5px black" 
					borderRadius="xl"
					bg="rgba(42, 67, 101, 0.98)"
					bgGradient="linear(to-tr, pink.800, orange.900, blue.800)"
				>
					<Flex direction="column" >
						<ModalHeader color="white" borderBottomRadius="2xl" boxShadow="inset 0 0 3px 1px #000000">
							{name}
						</ModalHeader>
						<ModalCloseButton 
							variant="solid"
							bg="pink.300"
							color="pink.900"
							borderWidth="2px"
							boxShadow="0 3px 5px 1px #521B41"
							borderColor="pink.900"
							borderRadius="lg"
							_hover={{ bg: "purple.300" }}
							_active={{
								bg: "purple.300",
								borderColor: "purple.700",
							  }}
						/>
						<ModalBody>
							<Center mb={3}>
								<Box>
									<Image src={productImage.imageUrl} alt={productImage.imageAlt}/>
								</Box>
							</Center>
							<Box borderRadius="lg" boxShadow="0 1px 3px 0 #ffffff" p={5}>
								<Box color="white"> Price: {unitPrice} </Box>
								<Box color="white"> Weight: {unitWeight} </Box>
								<Box color="white" fontWeight="semibold"> Categories: {categories} </Box>
								<Box color="white" fontWeight="semibold"> 
									<Text> Product description: </Text> 
									<Text>{description} </Text>
								</Box>
							</Box>
						</ModalBody>
			
						<ModalFooter>
							<Box
								borderWidth="5px"
								borderColor="pink.800"
								borderRadius="xl"
								bg="pink.300"
								mr={3}
							>
								<Button 
									onClick={onClose}
									variant="solid"
									bg="pink.400"
									color="black"
									boxShadow="0 5px 5px 1px #521B41"
									borderRadius="lg"
									_hover={{ bg: "purple.300" }}
									_active={{
										bg: "purple.300",
										borderColor: "purple.700",
									}}
								>
									Close    
								</Button>

							</Box>
							<Box
								borderWidth="5px"
								borderColor="pink.800"
								borderRadius="xl"
								bg="pink.300"
							>
								<Button 
									variant="ghost"
									bg="pink.200"
									color="black"
									boxShadow="0 5px 5px 1px #521B41"
									borderRadius="lg"
									_hover={{ bg: "purple.300" }}
									_active={{
										bg: "purple.300",
										borderColor: "purple.700",
									}}
								>
									Add to cart   
								</Button>

							</Box>
						</ModalFooter>

					</Flex>
					
				</ModalContent>
        	</Modal>
    	</>
    )
  }

  export default ProductModal