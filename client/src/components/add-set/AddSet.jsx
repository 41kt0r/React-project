export default function AddSet() {
    return (
        <div className="catalogWrapper">

            <main className="aadd-main">
                <div className="addContainer">
                    <div className="registerLoginWrapper">
                        <form action="">
                            <h1 className="registerLoginTitle">Add set</h1>
                            <div className="input-box">
                                <input type="text" placeholder="Hookah" required />
                                    <i className="fa-solid fa-bong"></i>
                            </div>

                            <div className="input-box">
                                <input type="password" placeholder="Bowl" required />
                                    <i className="fa-solid fa-bowl-rice"></i>
                            </div>

                            <div className="input-box">
                                <input type="password" placeholder="HMD" required />
                                    <i className="fa-solid fa-fire-burner"></i>
                            </div>

                            <div className="input-box">
                                <input type="url" placeholder="Image" required />
                                    <i className="fa-solid fa-image"></i>
                            </div>

                            <div className="input-box">
                                <input type="url" placeholder="Price" required />
                                    <i className="fa-solid fa-dollar-sign"></i>
                            </div>

                            <div className="input-box">
                                <input type="text" maxLength="150" placeholder="Description" required />
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