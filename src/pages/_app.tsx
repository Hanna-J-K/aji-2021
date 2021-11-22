import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import theme from '../theme'


const MyApp = ({ Component, pageProps }: any) => {
   return (
      <ChakraProvider resetCSS theme={theme}>
         <ColorModeProvider
            options={{
               useSystemColorMode: false,
            }}
         >
            <Component {...pageProps} />
         </ColorModeProvider>
      </ChakraProvider>
   )
}

export default MyApp
