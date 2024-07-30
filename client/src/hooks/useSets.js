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