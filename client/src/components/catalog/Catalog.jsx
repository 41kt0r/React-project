import { useEffect, useState } from "react";
import * as setsAPI from '../../api/sets-api';
import CatalogItem from "./CatalogItem";
// import * as request from "../../api/requester";

export default function Catalog() {
    const [sets, setSets] = useState([]);

    useEffect(() => {
        setsAPI.getAll()
            .then(result => setSets(result)) 
    }, []);


    return (
        <div className="catalogWrapper">
            <main className="catalog-main">
                <div className="test">
                    <div className="catalog-information">
                        <div className="catalog-heading">
                            <h1 className="catalog-title">Hookah Universe - Enjoy Perfection</h1>
                        </div>
                        <div className="catalog-paragraph">
                            <p>
                                Welcome to Hookah Universe, where perfection is our mission. Here, you will find everything you need for an unforgettable hookah experience. With us, tradition meets modernity to offer you the best of hookah culture.</p>
                        </div>
                    </div>
                    <div className="containerForContainer">
                        <div className="card-container">
                            
                            {sets.map(set => <CatalogItem key={set._id} {...set}/> )}
                            


                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}