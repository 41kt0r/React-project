export default function HookahDetails() {
    return (
        <div class="detailsWrapper">
            <header>
                <nav class="navigation">

                    <ul class="nav-bar">
                        <li class="logo"><a href="_home.html"><img src="../../images/mainLogo.png" alt="logo"/></a></li>

                        <input type="checkbox" id="check" />
                            <span class="menu">
                                <div class="navigation-div">
                                    <li><a href="_catalog.html">Catalog</a></li>
                                </div>
                                <div class="navigation-div guest">
                                    <li><a href="_login.html">Login</a></li>
                                    <li><a href="_register.html">Register</a></li>
                                </div>
                                <div class="navigation-div user">
                                    <li><a href="_add.html">Add car</a></li>
                                    <li><a href="#">Logout</a></li>
                                </div>
                                <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
                            </span>
                            <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
                    </ul>
                </nav>
            </header>

            <main class="details-main">
                <div class="cardInfo">
                    <div class="imageAndButtons">
                        <div class="details__image">
                            <img class="current__img" src="../../images/Carro fixed.jpg" alt="" />
                        </div>
                        <div class="card__likes">
                            <p>Likes:</p>
                            <P>155</P>
                        </div>
                        <div class="details__button">
                            <div class="owner__buttons">
                                <button class="detBtn">Like</button>
                                {/* <!-- <button class="detBtn">Coment</button> --> */}
                            </div>

                        </div>
                    </div>
                    <div class="details__info">
                        <div class="about__card">
                            <div>
                                <h5>HOOKAH</h5>
                                <p>Fantom</p>
                            </div>

                            <div>
                                <h5>BOWL</h5>
                                <p>Dechini</p>
                            </div>

                            <div>
                                <h5>HMD</h5>
                                <p>Flumant</p>
                            </div>

                            <div>
                                <h5>DESCRIPTION</h5>
                                <p>Some description for card about the car and other stupid things</p>
                            </div>

                            <div>
                                <h5>Price</h5>
                                <p>299$</p>
                            </div>


                        </div>

                        <div class="guest__buttons">
                            <button class="detBtn">Edit</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}