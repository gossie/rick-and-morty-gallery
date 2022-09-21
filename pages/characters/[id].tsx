import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Character from '../../model/character'
import styles from '../../styles/Characters.module.css'

export default function CharacterDetails() {

    const [character, setCharacter] = useState<Character>();

    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            axios.get<Character>(`https://rickandmortyapi.com/api/character/${id}`)
                .then(response => setCharacter(response.data));
        }
    }, [id]);

    const add = () => {
        axios.post('/api/favorites', { characterId: id })
            .then(response => console.log(response.status));
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>My favorite Rick & Morty characters</title>
                <meta name="description" content="All Rick & Morty characters" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                { character &&
                    <>
                        <img src={character.image}  alt={character.name} />
                        <button onClick={add}>Add to fav</button>
                    </>
                }
            </main>
        </div>
  )
}
