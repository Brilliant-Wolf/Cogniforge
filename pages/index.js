// Imports
// React.js
import React from 'react'

// Next.js
import Head from 'next/head'
import NextLink from 'next/link'

// Chakra UI
import {
	Image,
	HStack,
	VStack,
	Text
} from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'
import {
  BellIcon,
	MoonIcon,
  SunIcon
} from '@chakra-ui/icons';
import { Button, IconButton } from '@chakra-ui/button'

// Custom CSS
import styles from '../styles/Home.module.css'

export default function Home() {

	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<div className={styles.container}>
			<Head>
				<title>Cogniforge</title>
				<meta name="description" content="Learning for all through collaborative projects and peer-to-peer mentorship" />
				<meta httpEquiv="content-type" content="text/html; charset=utf-8" />
				<meta httpEquiv="content-language" content="en_US" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
			</Head>

			<main className={styles.main}>
				<VStack spacing={4} align='center'>
		
					<Image src="/cogniforge.svg" alt="Cogniforge logo" className={styles.logo}/>
	
					<div className={styles.hero}>
						<Text fontSize='3xl' color='brand.default' align='center'>Cogniforge Beta</Text>
	
						<Text fontSize='xl' align='center'>Cogniforge, <span className={styles.underlined}>a free project-based learning community</span>, is opening up beta access and testing soon!</Text>
					</div>
	
	        <HStack spacing={5} align='center'>
						<NextLink href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
		          <Button leftIcon={<BellIcon />} colorScheme='purple'>Notify me</Button>
						</NextLink>
	
						<IconButton aria-label="T ggle light/dark mode" onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}</IconButton>
					</HStack>
				</VStack>
			</main>
		</div>
	)
}
