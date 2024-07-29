import { Link } from "react-router-dom";

export default function CatalogItem({
    _id,
    hookah,
    bowl,
    HMD,
    imageUrl,
    price,
    description
}) {
    return (
        <div className="catalog-singleCard">
            <div className="img-container">
                <img className="car-img"
                    src={imageUrl}
                    alt="" />
            </div>
            <div className="car-info">
                <h5>{hookah}</h5>
                <div className="card-author">
                    <p>Price:</p>
                    <p>{price}</p>
                </div>
            </div>
            <li><Link className="seeCar__btn" to={`/catalog/${_id}/details`}>See the set</Link></li>
        </div>
    );
}