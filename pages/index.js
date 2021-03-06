// React.js
import React from 'react'

// Next.js
import Head from 'next/head'
import Link from 'next/link'

// Chakra UI
import { Image, HStack, VStack } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'
import { ArrowRightIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

// Custom CSS
import styles from '../styles/default.module.css'

export default function Home() {

	const { colorMode, toggleColorMode } = useColorMode()

	const headingColor = useColorModeValue('purple.500', 'white')

	const textColor = useColorModeValue('black', 'purple.300')

	return (
		<div className={styles.container}>
			<Head>
				<title>Cogniforge</title>
				<meta name="description" content="Free project-based platform that focuses on peer-to-peer collaboration and contribution" />
				<meta httpEquiv="content-type" content="text/html; charset=utf-8" />
				<meta httpEquiv="content-language" content="en_US" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

				<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
				<link rel="manifest" href="/favicons/site.webmanifest" />
			</Head>
			<main className={styles.main}>
				<VStack spacing={5}>
					<Image src='cogniforge.svg' alt="Cogniforge logo"/>

					<HStack spacing={2}>
						<Link href="/portal" passHref>
							<Button leftIcon={<ArrowRightIcon />}>Projects portal</Button>
						</Link>
	
						<Button leftIcon={colorMode === 'light' ? <MoonIcon/> : <SunIcon/>} onClick={toggleColorMode}>Toggle to {colorMode === 'light' ? 'dark' : 'light'} mode</Button>
					</HStack>
				</VStack>
			</main>
		</div>
	)
}
