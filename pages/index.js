import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@mui/material/Button'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Cogniforge</title>
				<meta name="description" content="Learning for all through collaborative projects and peer-to-peer mentorship" />
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
			</Head>

			<main className={styles.main}>

				<h1 className={styles.title}>
					Imagine a <span className={styles.emphasized}>space...</span>
				</h1>

				<p className={styles.description}>
					where students collaborate with peers and receive{' '}<span className={styles.emphasized}>immediate feedback and help from mentors</span> available in a Discord community server.

					Unlike most online learning platforms, Cogniforge promotes projects over the traditional ‘courses’ where students learn a lot of theory but never use it in practice. Instead, by having a project that connects to a{' '}<span className={styles.emphasized}>real-world problem</span>, students learn how to apply the concepts they are learning along the way to the problem.
				</p>

				<Link
    href={''}
    passHref>
					<Button variant="contained" color="secondary" component="a">
					    REQUEST EARLY ACCESS
					</Button>
				</Link>
			
			</main>

			<footer className={styles.footer}>
				© 2022 Cogniforge. All rights reserved.
      </footer>
		</div>
	)
}
