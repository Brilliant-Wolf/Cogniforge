// React.js
import React from 'react'

// Next.js
import Head from 'next/head'

// Chakra UI
import { Box, Image, HStack, VStack, Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

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
				<VStack spacing={2} align='center'>
					<Box>
						<Image src='cogniforge.svg' alt="Cogniforge logo"/>
					</Box>
		
					<Box>
					<Text fontSize='3xl' align='center'>Cogniforge Beta</Text>

					<Text fontSize='lg' align='center'>Opening up beta access and testing soon!</Text>
					</Box>

	        <HStack spacing={5} align='center'>
						<Button leftIcon={colorMode === 'light' ? <MoonIcon/> : <SunIcon/>} onClick={toggleColorMode}>Toggle to {colorMode === 'light' ? 'dark' : 'light'} mode</Button>
					</HStack>
				</VStack>
			</main>
		</div>
	)
}
