// React.js
import React from 'react'

// Next.js
import Head from 'next/head'
import Link from 'next/link'

// Chakra UI
import { HStack, VStack, Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { ArrowLeftIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

// Custom CSS
import styles from '../styles/Portal.module.css'

export default function Portal() {

	const { colorMode, toggleColorMode } = useColorMode()
	
	return (
		<div className={styles.container}>
			<Head>
				<title>Portal - Cogniforge</title>
				<meta name="description" content="Free project-based platform that focuses on peer-to-peer collaboration and contribution" />
				<meta httpEquiv="content-type" content="text/html; charset=utf-8" />
				<meta httpEquiv="content-language" content="en_US" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
			</Head>

			<main className={styles.main}>
				<VStack spacing={2} align="stretch">
					<Text fontSize='3xl'>Projects</Text>
					<Text fontSize='lg'>Coming soon!</Text>
		
					<HStack spacing={2}>
						<Link href="/" passHref>
							<Button leftIcon={<ArrowLeftIcon />}>Portal</Button>
						</Link>
	
						<Button leftIcon={colorMode === 'light' ? <MoonIcon/> : <SunIcon/>} onClick={toggleColorMode}>Toggle to {colorMode === 'light' ? 'dark' : 'light'} mode</Button>
					</HStack>
				</VStack>
			</main>
		</div>
	)
}