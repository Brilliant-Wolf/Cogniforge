import React from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// Light and dark mode
import { useColorMode } from '@chakra-ui/color-mode'
import {
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/button'

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
				<img src="/cogniforge.svg" alt="Cogniforge logo" className={styles.logo}/> 
			
				<h1 className={styles.title}> Cogniforge Alpha </h1>
			
				<div className={styles.descriptionDiv}>
					<p className={styles.description}> You have been invited to the alpha testing of Cogniforge, <span className={styles.underlined}>a free project-based learning community.</span> </p>
		
					<p className={styles.note}> Note: Alpha releases will be introducing new features continuously, so please keep checking back for updates! </p>
				</div>
			
				<div className={styles.buttonsDiv}>
					<button className={`${styles.button} ${styles.login}`}> Log in </button>
					<button className={`${styles.button} ${styles.signup}`}> Sign up </button> 
				</div> 

				<IconButton mt={4} size='sm' aria-label="Toggle light/dark mode" onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
        </IconButton>
				
			</main> 
		</div> 
	) 
}