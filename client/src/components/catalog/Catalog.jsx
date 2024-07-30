import { useGetAllSets } from "../../hooks/useSets";
import CatalogItem from "./CatalogItem";

export default function Catalog() {
    const [sets] = useGetAllSets();

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
                            
                            {sets.length > 0 
                                ? sets.map(set => <CatalogItem key={set._id} {...set}/> )
                                : <h3>No sets yet</h3>
                            }
                            


                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}