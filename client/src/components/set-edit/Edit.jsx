import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import setsApi, { getOne } from "../../api/sets-api";
import { useGetOneSets } from "../../hooks/useSets";
import { useEffect, useMemo } from "react";

const initialValues = {
    hookah: '',
    bowl: '',
    HMD: '',
    imageUrl: '',
    price: '',
    description: '',
}

export default function Edit() {
    const navigate = useNavigate();
    const {setId} = useParams();
    const [ set, setSet] = useGetOneSets(setId);
    const inititalFormValues = useMemo(() => Object.assign(initialValues, set), [set])

    const {
        changeHandler,
        submitHandler,
        values,
     } = useForm( inititalFormValues, async (values) => { 
        const isConfirmed = confirm('Are you want to update this set?');
        if (isConfirmed) {
            await setsApi.update(setId, values);
    
            navigate(`/catalog/${setId}/details`);
        }

    });



    return (
        <div className="catalogWrapper">

            <main className="aadd-main">
                <div className="addContainer">
                    <div className="registerLoginWrapper">
                        <form action="" onSubmit={submitHandler}>
                            <h1 className="registerLoginTitle">Edit set</h1>
                            <div className="input-box">
                                <input type="text" name="hookah" value={values.hookah} onChange={changeHandler} placeholder="Hookah" required />
                                <i className="fa-solid fa-bong"></i>
                            </div>

                            <div className="input-box">
                                <input type="text" name="bowl" value={values.bowl} onChange={changeHandler} placeholder="Bowl" required />
                                <i className="fa-solid fa-bowl-rice"></i>
                            </div>

                            <div className="input-box">
                                <input type="text" name="HMD" value={values.HMD} onChange={changeHandler} placeholder="HMD" required />
                                <i className="fa-solid fa-fire-burner"></i>
                            </div>

                            <div className="input-box">
                                <input type="url" name="imageUrl" value={values.imageUrl} onChange={changeHandler} placeholder="Image" required />
                                <i className="fa-solid fa-image"></i>
                            </div>

                            <div className="input-box">
                                <input type="number" name="price" value={values.price} onChange={changeHandler} placeholder="Price" required />
                                <i className="fa-solid fa-dollar-sign"></i>
                            </div>

                            <div className="input-box">
                                <input type="text" maxLength="1500" name="description" value={values.description} onChange={changeHandler} placeholder="Description" required />
                                <i className="fa-solid fa-pen"></i>
                            </div>

                            <button type="submit" className="btn">Edit your set</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}