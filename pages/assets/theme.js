// Imports
// Chakra UI
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	config: {
		initialColorMode: 'light',
  	useSystemColorMode: false,
	},
})

module.exports = theme