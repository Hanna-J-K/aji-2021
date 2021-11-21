import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import theme from '../theme'
import { Provider } from 'react-redux'
import store from '../store'

function MyApp({ Component, pageProps }: any) {
   return (
      <Provider store={store}>
         <ChakraProvider resetCSS theme={theme}>
            <ColorModeProvider
               options={{
                  useSystemColorMode: false,
               }}
            >
               <Component {...pageProps} />
            </ColorModeProvider>
         </ChakraProvider>
      </Provider>
   )
}

export default MyApp
