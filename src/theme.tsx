import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
// import '@fontsource/cinzel/400.css'

// const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
   sm: '40em',
   md: '52em',
   lg: '64em',
   xl: '80em',
})

const theme = extendTheme({
   styles: {
      global: {
         'html, body': {
            bg: 'teal.900',
            backgroundImage:
               "url('https://images.unsplash.com/photo-1530362502708-d02c8f093039?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')",
            color: 'white',
         },
      },
   },

   breakpoints,
   fonts: {
      heading: 'Cinzel',
      body: 'Raleway',
   },
   icons: {
      logo: {
         path: (
            <svg
               width="3000"
               height="3163"
               viewBox="0 0 3000 3163"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <rect width="3000" height="3162.95" fill="none" />
               <path
                  d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
                  fill="currentColor"
               />
            </svg>
         ),
         viewBox: '0 0 3000 3163',
      },
   },

   components: {
      Button: {
         variants: {
            magic: {
               bg: 'pink.300',
               color: 'white',
               borderRadius: 'lg',
               textShadow: '1px 1px 2px black',
               fontWeight: '300',
               boxShadow: '0 5px 5px 1px #521B41',
               _hover: { bg: 'purple.300' },
               _active: { bg: 'purple.300', borderColor: 'purple.700' },
            },

            'magic-navbar': {
               bg: 'blue.200',
               color: 'black',
               borderRadius: 'lg',
               boxShadow: '0 5px 5px 1px #521B41',
               _hover: { bg: 'purple.300' },
               _active: { bg: 'purple.300', borderColor: 'purple.700' },
            },
         },
      },
      MenuList: {
         baseStyle: {
            bg: 'blue.500',
            color: 'black',
            _hover: { bg: 'pink.500' },
         },
      },

      Text: {
         baseStyle: {
            textShadow: '1px 2px 2px #521B41',
         },
      },
   },
})

export default theme
