// Chakra UI
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	"colors": {
    "pink": {
      "50": "#FFE5FD",
      "100": "#FFB8F8",
      "200": "#FF8AF4",
      "300": "#FF5CEF",
      "400": "#FF2EEB",
      "500": "#FF00E6",
      "600": "#CC00B8",
      "700": "#99008A",
      "800": "#66005C",
      "900": "#33002E"
    },
    "red": {
      "50": "#FFE5E5",
      "100": "#FFB8B8",
      "200": "#FF8A8A",
      "300": "#FF5C5C",
      "400": "#FF2E2E",
      "500": "#FF0000",
      "600": "#CC0000",
      "700": "#990000",
      "800": "#660000",
      "900": "#330000"
    },
		"orange": {
      "50": "#FFF5E5",
      "100": "#FFE2B8",
      "200": "#FFD08A",
      "300": "#FFBE5C",
      "400": "#FFAB2E",
      "500": "#FF9900",
      "600": "#CC7A00",
      "700": "#995C00",
      "800": "#663D00",
      "900": "#331F00"
    },
		"cyan": {
      "50": "#E5FDFF",
      "100": "#B8F8FF",
      "200": "#8AF4FF",
      "300": "#5CEFFF",
      "400": "#2EEBFF",
      "500": "#00E6FF",
      "600": "#00B8CC",
      "700": "#008A99",
      "800": "#005C66",
      "900": "#002E33"
    },
		"blue": {
      "50": "#E8E5FF",
      "100": "#BFB8FF",
      "200": "#958AFF",
      "300": "#6C5CFF",
      "400": "#422EFF",
      "500": "#1900FF",
      "600": "#1400CC",
      "700": "#0F0099",
      "800": "#0A0066",
      "900": "#050033"
    },
		"purple": {
      "50": "#F5E5FF",
      "100": "#E2B8FF",
      "200": "#D08AFF",
      "300": "#BE5CFF",
      "400": "#AB2EFF",
      "500": "#9900FF",
      "600": "#7A00CC",
      "700": "#5C0099",
      "800": "#3D0066",
      "900": "#1F0033"
    }
  },
	config: {
		initialColorMode: 'light',
  	useSystemColorMode: false,
	},
})

module.exports = theme