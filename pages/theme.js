// Imports
// Chakra UI
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      default: "#9900ff",
    },
  },
	config: {
		initialColorMode: 'light',
  	useSystemColorMode: false,
	},
})

module.exports = theme