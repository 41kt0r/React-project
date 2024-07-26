export default function AddSet() {
    return (
        <div class="catalogWrapper">

            <main class="aadd-main">
                <div class="addContainer">
                    <div class="registerLoginWrapper">
                        <form action="">
                            <h1 class="registerLoginTitle">Add set</h1>
                            <div class="input-box">
                                <input type="text" placeholder="Hookah" required />
                                    <i class="fa-solid fa-bong"></i>
                            </div>

                            <div class="input-box">
                                <input type="password" placeholder="Bowl" required />
                                    <i class="fa-solid fa-bowl-rice"></i>
                            </div>

                            <div class="input-box">
                                <input type="password" placeholder="HMD" required />
                                    <i class="fa-solid fa-fire-burner"></i>
                            </div>

                            <div class="input-box">
                                <input type="url" placeholder="Image" required />
                                    <i class="fa-solid fa-image"></i>
                            </div>

                            <div class="input-box">
                                <input type="url" placeholder="Price" required />
                                    <i class="fa-solid fa-dollar-sign"></i>
                            </div>

                            <div class="input-box">
                                <input type="text" maxlength="150" placeholder="Description" required />
                                    <i class="fa-solid fa-pen"></i>
                            </div>

                            <button type="submit" class="btn">Add your set</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}