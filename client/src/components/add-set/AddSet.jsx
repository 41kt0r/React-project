import { useNavigate } from 'react-router-dom'
import { useForm } from "../../hooks/useForm";
import { useCreateSet } from "../../hooks/useSets";

const initialValues = {
    hookah: '',
    bowl: '',
    HMD: '',
    imageUrl: '',
    price: '',
    description: '',
}

export default function setCreate() {
    const navigate = useNavigate();
    const createSet = useCreateSet();

    const createHanfler = async (values) => {
        try {
            const { _id: setId } = await createSet(values);

            navigate(`/sets/${setId}/details`)
        } catch (err) {
            //set error state and display error
            console.log(err.message);
        }
    }
    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, createHanfler)
    return (
        <div className="catalogWrapper">

            <main className="aadd-main">
                <div className="addContainer">
                    <div className="registerLoginWrapper">
                        <form action="" onSubmit={submitHandler}>
                            <h1 className="registerLoginTitle">Add set</h1>
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
                                <input type="text" maxLength="150" name="description" value={values.description} onChange={changeHandler} placeholder="Description" required />
                                <i className="fa-solid fa-pen"></i>
                            </div>

                            <button type="submit" className="btn">Add your set</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}