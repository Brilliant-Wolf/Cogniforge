// React.js
import React from 'react'

// Next.js
import Head from 'next/head'
import Link from 'next/link'

// Chakra UI
import { Heading, HStack, VStack } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'
import { ArrowLeftIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

// Custom CSS
import styles from './styles/project.module.css'

export default function discord_bot() {

	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<div className={styles.container}>
			<Head>
				<title>Build a Discord bot with Discord.js and Replit - Cogniforge</title>
				<meta name="description" content="A 2-week project where you will learn some JavaScript, write + deploy a simple bot script on Replit, and build some commands to interact with your server" />
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
					<Heading fontSize='xl'>Coming soon!</Heading>

					<HStack spacing={2}>
						<Link href="/portal" passHref>
							<Button leftIcon={<ArrowLeftIcon />}>Back to projects portal</Button>
						</Link>
	
						<Button leftIcon={colorMode === 'light' ? <MoonIcon/> : <SunIcon/>} onClick={toggleColorMode}>Toggle to {colorMode === 'light' ? 'dark' : 'light'} mode</Button>
					</HStack>
				</VStack>
			</main>
		</div>
	)
}
