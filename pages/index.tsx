import type { NextPage } from 'next'
import Head from 'next/head'
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
        <h1>My first next.js application</h1>
      </main>
        
    </div>
  )
}

export default Home
