export default function Catalog() {
   return (
       <main className="catalog-main">
            <div className="test">
                <div className="catalog-information">
                    <div className="catalog-heading">
                        <h1 className="catalog-title">Hookah Universe - Enjoy Perfection</h1>
                    </div>
                    <div className="catalog-paragraph">
                        <p>
                            Welcome to Hookah Universe, where perfection is our mission. Here, you will find everything you need for an unforgettable hookah experience. With us, tradition meets modernity to offer you the best of hookah culture.</p>
                    </div>
                </div>
                <div className="containerForContainer">
                    <div className="card-container">
                        <div className="catalog-singleCard">
                            <div className="img-container">
                                <img className="car-img"
                                    src="../../images/set 1.jpg"
                                    alt="" />
                            </div>
                            <div className="car-info">
                                <h5>Set title</h5>
                                <div className="card-author">
                                    <p>Author:</p>
                                    <p>pipi</p>
                                </div>
                            </div>
                            <li><a className="seeCar__btn" href="">See the set</a></li>
                        </div>
                        <div className="catalog-singleCard">
                            <div className="img-container">
                                <img className="car-img" src="../../images/set 2.webp" alt="" />
                            </div>
                            <div className="car-info">
                                <h5>Set title</h5>
                                <div className="card-author">
                                    <p>Author:</p>
                                    <p>pipi</p>
                                </div>
                            </div>
                            <li><a className="seeCar__btn" href="">See the set</a></li>
                        </div>
                        <div className="catalog-singleCard">
                            <div className="img-container">
                                <img className="car-img" src="../../images/set 3.jpg" alt="" />
                            </div>
                            <div className="car-info">
                                <h5>Set title</h5>
                                <div className="card-author">
                                    <p>Author:</p>
                                    <p>pipi</p>
                                </div>
                            </div>
                            <li><a className="seeCar__btn" href="">See the set</a></li>
                        </div>

                    </div>
                </div>
            </div>
        </main>
   );
}