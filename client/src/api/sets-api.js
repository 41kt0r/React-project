 import * as request from './requester';

 const BASE_URL = 'http://localhost:3030/data/sets';

 export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const sets = Object.values(result);

    return sets;
 };

 export const getOne = (setId) => request.get(`${BASE_URL}/${setId}`);
 export const create = (setData) => request.post(`${BASE_URL}`, setData);
 
 const setsApi = {
    getAll,
    getOne,
    create
 }

 export default setsApi;