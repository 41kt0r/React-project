import * as request from '../api/requester';

const BASE_URL = 'http://localhost:3030/data/likes';

export const allLikesForItem = async (itemId) => {
    const query = new URLSearchParams({
        where: `itemId="${itemId}"`,
    });

    const result = await request.get(`${BASE_URL}?${query}`);

    return result;
}

export const likeItem = async (itemId) => {
    await request.post(BASE_URL, {itemId});
}