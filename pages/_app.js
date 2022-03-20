// Chakra UI
import { ChakraProvider } from '@chakra-ui/react'

// Custom CSS
import '../styles/globals.css'
import theme from './assets/theme' 

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp