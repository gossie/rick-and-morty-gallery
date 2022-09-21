import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My favorite Rick & Morty characters</title>
        <meta name="description" content="Just for testing - don't have a usecase yet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/characters">Character gallery</Link>
        <Link href="/favorites">Favorites</Link>
      </main>
        
    </div>
  )
}

export default Home
