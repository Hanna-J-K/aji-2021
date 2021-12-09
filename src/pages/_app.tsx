import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import theme from '../theme'
// import '@fontsource/cinzel/700.css'
import '@fontsource/hahmlet/700.css'
import '@fontsource/raleway/500.css'

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
