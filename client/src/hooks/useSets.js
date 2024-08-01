import { useEffect, useState } from "react";

import setsApi from "../api/sets-api";

export function useGetAllSets() {
    const [sets, setSets] = useState([]);

    useEffect(() => {
        setsApi.getAll()
            .then(result => setSets(result))
    }, []);

    return [sets, setSets];
}

export function useGetOneSets(setId) {
    const [set, setSet] = useState({});


    useEffect(() => {
        (async () => {
            const result = await setsApi.getOne(setId);

            setSet(result);
        })()
    }, [setId]);

    return [
        set,
        setSet,
    ];
}

export function useCreateSet() {
    const setCreateHandler = (setData) =>
        setsApi.create(setData);

    return setCreateHandler;
}