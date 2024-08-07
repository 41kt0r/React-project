import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetOneSets } from "../../hooks/useSets";
import { useAuthContext } from "../../contexts/AuthContext";
import setsApi from "../../api/sets-api";
import { Link } from "react-router-dom";

export default function HookahDetails() {
    const navigate = useNavigate();
    const { setId } = useParams()
    const [set, setSet] = useGetOneSets(setId);
    const { email, userId } = useAuthContext();
    const { isAuthenticated } = useAuthContext();


    const setDeleteHandler = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete ${set.hookah} set?`)

        if (!isConfirmed) {
            return
        }
        try {
            await setsApi.remove(setId);
            navigate('/')
        } catch (err) {
            console.log(err.message);
        }
    }
    const isOwner = userId === set._ownerId

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
                            <p>{set.likes}</p>
                        </div>
                        <div className="details__button">
                            {!isOwner && isAuthenticated && (
                                <div className="owner__buttons">
                                    <button className="detBtn">Like</button>
                                </div>
                            )}

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

                        {isOwner && (
                            <div className="owner__buttons">
                                <Link to={`/catalog/${setId}/edit`} className="detBtn">Edit</Link>
                                <button onClick={setDeleteHandler} className="detBtn">Delete</button>
                            </div>

                        )}



                    </div>
                </div>
            </main>
        </div>
    );
}