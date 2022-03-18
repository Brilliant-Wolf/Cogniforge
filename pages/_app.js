// Imports
// Chakra UI
import { ChakraProvider } from '@chakra-ui/react'

// Custom CSS
import '../styles/globals.css'
import theme from './assets/theme' 

export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    console.log(metric)
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp