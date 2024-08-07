import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGetOneSets } from "../../hooks/useSets";
import { useEffect, useState } from "react";

import * as likesService from '../../services/likeService';

import { useAuthContext } from "../../contexts/AuthContext";
import setsApi from "../../api/sets-api";

export default function HookahDetails() {
    const navigate = useNavigate();
    const { setId } = useParams();
    const [set, setSet] = useGetOneSets(setId);
    const { email, userId } = useAuthContext();
    const { isAuthenticated } = useAuthContext();
    const [likesAmount, setLikesAmount] = useState(0);
    const [like, setLike] = useState(false);

    useEffect(() => {
        likesService.allLikesForItem(setId)
            .then(likes => {
                setLikesAmount(likes.length);

                if (likes.find(x => x._ownerId === userId)) {
                    setLike(true);
                }
            })
            .catch(err => console.log(err));
    }, [setId, userId]);

    const isOwner = userId === set._ownerId;

    const likeHandle = async () => {
        try {
            await likesService.likeItem(setId);
            setLikesAmount(prev => prev + 1);
            setLike(true);
        } catch (err) {
            console.log(err);
        }
    }

    const setDeleteHandler = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete ${set.hookah} set?`);

        if (!isConfirmed) {
            return;
        }
        try {
            await setsApi.remove(setId);
            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    }

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
                            <p>{likesAmount}</p>
                        </div>
                        <div className="details__button">
                            {!isOwner && isAuthenticated && !like && (
                                <div className="owner__buttons">
                                    <button 
                                        className="detBtn" 
                                        onClick={likeHandle}
                                    >
                                        Like
                                    </button>
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
