import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cogniforge</title>
        <meta name="description" content="Learning for all through collaborative projects and peer-to-peer mentorship" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/ >
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Imagine a platform...
        </h1>

        <p className={styles.description}>
          where students collaborate with peers in{' '}
          <code className={styles.code}>real-world projects</code> and receive{' '}
          <code className={styles.code}>immediate feedback and help from mentors</code> available in a Discord community server.
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://discord.gg/NFRzZkqZDR"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by{' '}
          <span className={styles.logo}>
            <Image src="/cogniforge.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
