import { useToast, Button } from '@chakra-ui/react'

interface IToast {
   title: String
   description: String
   status: String
}

const ResponseToast = ({ title, description, status }: IToast) => {
   const toast = useToast()
   return toast({
      title: { title },
      description: { description },
      status: { status },
      duration: 9000,
      isClosable: true,
   })
}

export default ResponseToast
