import Favorite from "../model/favorite";
import clientPromise from "./mongodb";

export async function addFavorite(favorite: Favorite) {
    const client = await clientPromise;
    console.debug('got db client');
    await client.db()
        .collection('favorites')
        .insertOne({
            characterId: favorite.characterId
        });
}

export async function getFavorites() {
    const client = await clientPromise;
    console.debug('got db client');
    await client.db()
        .collection('favorites')
        // TODO
}
