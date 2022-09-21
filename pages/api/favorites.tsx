import type { NextApiRequest, NextApiResponse } from 'next'
import { addFavorite } from '../../db/favorites-repository';
import Favorite from '../../model/favorite';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method?.toUpperCase() === "POST") {
        await addFavorite(req.body as Favorite);
        console.debug('inserted favorite');
        res.status(201).end();
    } else {
        res.status(415).end();
    }
}
  