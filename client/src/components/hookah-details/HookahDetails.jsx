export default function HookahDetails() {
    return (
        <div className="detailsWrapper">
            <header>
                <nav className="navigation">

                    <ul className="nav-bar">
                        <li className="logo"><a href="_home.html"><img src="../../images/mainLogo.png" alt="logo"/></a></li>

                        <input type="checkbox" id="check" />
                            <span className="menu">
                                <div className="navigation-div">
                                    <li><a href="_catalog.html">Catalog</a></li>
                                </div>
                                <div className="navigation-div guest">
                                    <li><a href="_login.html">Login</a></li>
                                    <li><a href="_register.html">Register</a></li>
                                </div>
                                <div className="navigation-div user">
                                    <li><a href="_add.html">Add car</a></li>
                                    <li><a href="#">Logout</a></li>
                                </div>
                                <label for="check" className="close-menu"><i className="fas fa-times"></i></label>
                            </span>
                            <label for="check" className="open-menu"><i className="fas fa-bars"></i></label>
                    </ul>
                </nav>
            </header>

            <main className="details-main">
                <div className="cardInfo">
                    <div className="imageAndButtons">
                        <div className="details__image">
                            <img className="current__img" src="../../images/Carro fixed.jpg" alt="" />
                        </div>
                        <div className="card__likes">
                            <p>Likes:</p>
                            <P>155</P>
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

                        <div className="guest__buttons">
                            <button className="detBtn">Edit</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}