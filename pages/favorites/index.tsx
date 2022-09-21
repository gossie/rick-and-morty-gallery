import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Character from '../../model/character'
import RMResponse, { Info } from '../../model/rm-response'
import styles from '../../styles/Characters.module.css'

export default function Characters() {

    const [characters, setCharacters] = useState<Character[]>([]);
    const [info, setInfo] = useState<Info>();
    const [currentPage, setCurrentPage] = useState((typeof window !== "undefined" && localStorage.getItem('currentPage')) ?? '1');

    useEffect(() => {
        localStorage.setItem('currentPage', `${currentPage}`);
    }, [currentPage]);

    useEffect(() => {
        axios.get<RMResponse>(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
            .then(response => {
                setInfo(response.data.info);
                setCharacters(response.data.results);
            });
    }, [currentPage]);

    const prevPage = () => {
        setCurrentPage(oldPage => `${parseInt(oldPage) - 1}`)
    };

    const nextPage = () => {
        setCurrentPage(oldPage => `${parseInt(oldPage) + 1}`)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>My favorite Rick & Morty characters</title>
                <meta name="description" content="All Rick & Morty characters" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>Rick & Morty favorites</h1>
            </main>
        </div>
  )
}
