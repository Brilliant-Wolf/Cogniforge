// React.js
import React from 'react'

// Next.js
import Head from 'next/head'
import Link from 'next/link'

// Chakra UI
import { Badge, Box, Heading, Stack, HStack, VStack, Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { ArrowLeftIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

// Custom CSS
import styles from '../styles/Portal.module.css'

export default function Portal() {

	const { colorMode, toggleColorMode } = useColorMode()

	function Project({ title, desc, language, ...rest }) {
	  return (
	    <Box shadow='md' borderWidth='1' borderRadius='l' overflow='hidden' {...rest}>
      <Box p='5'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='purple'>New</Badge>
          <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2'>{language}</Box>
        </Box>

        <Box>
          <Heading mt={5} fontSize='3xl'>{title}</Heading>
        </Box>

				<Box>
          <Text fontSize='xl'>{desc}</Text>
        </Box>
      </Box>
    </Box>
	  )
	}
	
	function ProjectStack() {
	  return (
	    <Stack spacing={5}>
	      <Project
	        title='Project 1'
	        desc='Never gonna give you up, never gonna let you down, never gonna run around and desert you'
					language='rick-astley'
	      />
	      <Project
	        title='Project 2'
	        desc='Never gonna make you cry, never gonna say goodbye, never gonna tell a lie and hurt you'
					language='rick-astley'
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

				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
			</Head>

			<main className={styles.main}>
				<VStack spacing={5} align="stretch">
					<Text fontSize='5xl'>Projects</Text>

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