// Imports
// Next.js
import NextDocument, { Html, Head, Main, NextScript } from "next/document"

// Chakra UI
import { ColorModeScript } from "@chakra-ui/react"

// Custom CSS
import theme from "./theme"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
