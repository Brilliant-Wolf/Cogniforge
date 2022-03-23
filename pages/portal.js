// React.js
import React from 'react'

// Next.js
import Head from 'next/head'
import Link from 'next/link'

// Chakra UI
import { Badge, Box, Heading, Stack, HStack, VStack, Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'
import { ArrowLeftIcon, ArrowRightIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

// Custom CSS
import styles from '../styles/default.module.css'

export default function Portal() {

	const { colorMode, toggleColorMode } = useColorMode()

	function Project({ title, desc, language, link, ...rest }) {
		
		const bg = useColorModeValue('white', 'purple.500')
		const color = useColorModeValue('purple.500', 'white')
		
	  return (
	    <Box shadow='md' borderWidth='1' borderRadius='lg' overflow='hidden' bg={bg} color={color} {...rest}>
      <Box p='5'>
				
        <VStack spacing={2} align='stretch'>
					<Box display='flex' alignItems='baseline'>
	          <Badge borderRadius='full' px='2' colorScheme='purple'>New</Badge>
	          <Box fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2'>{language}</Box>
	        </Box>
	
	        <Box>
	          <Heading mt={5} fontSize='3xl'>{title}</Heading>
	        </Box>
	
					<Box>
	          <Text fontSize='xl' isTruncated>{desc}</Text>
	        </Box>
	
					<Box>
						<Link href={link} passHref>
								<Button leftIcon={<ArrowRightIcon />}>Learn more</Button>
						</Link>
					</Box>
			</VStack>
		
      </Box>
    </Box>
	  )
	}
	
	function ProjectStack() {
	  return (
	    <Stack spacing={5}>
	      <Project
	        title='Build a Discord bot with Discord.js and Replit'
	        desc='A 2-week project where you will learn some JavaScript, write + deploy a simple bot script on Replit, and build some commands to interact with your server'
					language='Javascript'
					link='/projects/discord_bot'
	      />
	    </Stack>
	  )
	}
	
	return (
		<div className={styles.container}>
			<Head>
				<title>Portal - Cogniforge</title>
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
				<VStack spacing={10} align="stretch">
					<Heading fontSize='5xl'>🚀 Projects</Heading>

					<ProjectStack />
		
					<HStack spacing={2}>
						<Link href="/" passHref>
							<Button leftIcon={<ArrowLeftIcon />}>Back to home</Button>
						</Link>
	
						<Button leftIcon={colorMode === 'light' ? <MoonIcon/> : <SunIcon/>} onClick={toggleColorMode}>Toggle to {colorMode === 'light' ? 'dark' : 'light'} mode</Button>
					</HStack>
				</VStack>
			</main>
		</div>
	)
}