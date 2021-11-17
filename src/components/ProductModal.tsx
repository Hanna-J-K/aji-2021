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
	Box
  } from "@chakra-ui/react"

  import { Product } from "../types/ProductType"

function ProductModal(props: Product) {

    const { name, description, unitPrice, unitWeight, categories } = props
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
    	<>
        	<Button onClick={onOpen} colorScheme="gray.900" variant="outline">
        		See more    
        	</Button>
        	<Modal 
				isOpen={isOpen} 
				onClose={onClose} 
				isCentered motionPreset="slideInBottom"
        	>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{name}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Box color="gray.500"> {unitPrice} </Box>
						<Box color="gray.500"> {unitWeight} </Box>
						<Box fontWeight="semibold"> {categories} </Box>
						<Box fontWeight="semibold"> {description} </Box>
					</ModalBody>
		
					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
							<Button variant="ghost">Add to cart</Button>
					</ModalFooter>
				</ModalContent>
        	</Modal>
    	</>
    )
  }

  export default ProductModal