 import * as request from './requester';

 const BASE_URL = 'http://localhost:3030/jsonstore/sets';

 export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const sets = Object.values(result);

    return sets;
 };

 export const getOne = (setId) => request.get(`${BASE_URL}/${setId}`);

 const setsApi = {
    getAll,
    getOne
 }

 export default setsApi;