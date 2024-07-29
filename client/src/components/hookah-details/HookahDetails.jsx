import { useEffect, useState } from "react";
import setsApi from "../../api/sets-api";
import { useParams } from "react-router-dom";

export default function HookahDetails() {
    const [set, setSet] = useState({});
    const {setId} = useParams()

    useEffect(() => {
        (async () => {
            const result = await setsApi.getOne(setId);

            setSet(result);
        })()
    })

    return (
        <div className="detailsWrapper">

            <main className="details-main">
                <div className="cardInfo">
                    <div className="imageAndButtons">
                        <div className="details__image">
                            <img className="current__img" src={set.imageUrl} alt="" />
                        </div>
                        <div className="card__likes">
                            <p>Likes:</p>
                            <p>155</p>
                        </div>
                        <div className="details__button">
                            <div className="owner__buttons">
                                <button className="detBtn">Like</button>
                                {/* <!-- <button className="detBtn">Coment</button> --> */}
                            </div>

                        </div>
                    </div>
                    <div className="details__info">
                        <div className="about__card">
                            <div>
                                <h5>HOOKAH</h5>
                                <p>{set.hookah}</p>
                            </div>

                            <div>
                                <h5>BOWL</h5>
                                <p>{set.bowl}</p>
                            </div>

                            <div>
                                <h5>HMD</h5>
                                <p>{set.HMD}</p>
                            </div>

                            <div>
                                <h5>DESCRIPTION</h5>
                                <p>{set.description}</p>
                            </div>

                            <div>
                                <h5>Price</h5>
                                <p>{set.price}</p>
                            </div>


                        </div>

                        <div className="guest__buttons">
                            <button className="detBtn">Edit</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}